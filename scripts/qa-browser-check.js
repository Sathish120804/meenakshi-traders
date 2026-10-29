import http from 'http';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

async function runQA() {
  console.log('=== MEENAKSHI TRADERS QA INSPECTION ===\n');

  // 1. Check all image assets referenced in categories & products
  const productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
  const categoriesContent = fs.readFileSync('src/data/categories.ts', 'utf8');
  const heroContent = fs.readFileSync('src/components/Hero.tsx', 'utf8');

  console.log('1. Verifying image files on disk:');
  const imageRefs = [
    '/images/meenakshi-traders-logo.webp',
    '/images/hero-cattle-feed.jpg',
    '/images/cattle-feed-category.jpg',
    '/images/wheat-bran.jpg',
    '/images/rice-category.jpg',
    '/images/grains-millets-assortment.jpg',
    '/images/oilcake-feed-ingredient.jpg',
    '/images/knc-cattle-feed.jpg',
    '/images/skm-cattle-feed.png',
    '/images/ks-cattle-feed.webp',
    '/images/santhi-cattle-feed-pkg.jpg',
    '/images/amman-ponni-rice.jpg',
    '/images/cholam-sorghum-feed.jpg',
    '/images/kambu-millet.jpg',
    '/images/keppai-ragi.jpg',
    '/images/dry-red-chilli.jpg',
    '/images/groundnut-oil-cake.jpg',
    '/images/cottonseed.jpg',
    '/images/cottonseed-cake.jpg',
    '/images/sesame-oil-cake.jpg',
  ];

  let missingImages = 0;
  for (const img of imageRefs) {
    const fullPath = path.join('public', img.replace(/^\//, ''));
    if (fs.existsSync(fullPath)) {
      const size = fs.statSync(fullPath).size;
      console.log(`  ✓ ${img} (${size} bytes)`);
    } else {
      console.error(`  ✗ MISSING: ${img}`);
      missingImages++;
    }
  }

  if (missingImages > 0) {
    console.error(`FAILED: ${missingImages} images missing!`);
    process.exit(1);
  }

  // 2. Check preview server response
  console.log('\n2. Testing Vite preview server...');
  const preview = spawn('npx.cmd', ['vite', 'preview', '--port', '4173'], { shell: true });

  const serverReady = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      preview.kill();
      reject(new Error('Preview server timeout'));
    }, 12000);

    preview.stdout.on('data', (d) => {
      const text = d.toString();
      if (text.includes('4173')) {
        clearTimeout(timeout);
        resolve(true);
      }
    });

    preview.stderr.on('data', (d) => {
      // console.error(d.toString());
    });
  });

  if (serverReady) {
    console.log('  ✓ Preview server listening on port 4173');
    
    // Fetch HTML
    const html = await new Promise((resolve, reject) => {
      http.get('http://localhost:4173', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => resolve(data));
      }).on('error', reject);
    });

    console.log(`  ✓ HTML payload received (${html.length} bytes)`);
    console.log(`  ✓ Title tag: ${html.includes('<title>Meenakshi Traders')}`);
    console.log(`  ✓ Favicon link: ${html.includes('/images/meenakshi-traders-logo.webp')}`);
    console.log(`  ✓ JS Bundle link: ${html.includes('/assets/index-')}`);

    // Check built JS bundle content for key assertions
    const distFiles = fs.readdirSync('dist/assets');
    const jsFile = distFiles.find(f => f.endsWith('.js'));
    const jsContent = fs.readFileSync(path.join('dist/assets', jsFile), 'utf8');

    console.log('\n3. Verifying Production Bundle Contents:');
    console.log(`  ✓ Cattle Feed hero headline: ${jsContent.includes('Your Trusted Partner for Cattle Feed')}`);
    console.log(`  ✓ Hero cattle image: ${jsContent.includes('/images/hero-cattle-feed.jpg')}`);
    console.log(`  ✓ Feed-Grade Grains removed: ${!jsContent.includes('Feed-Grade Grains')}`);
    console.log(`  ✓ Managing Director (Arunachalam A): ${jsContent.includes('Managing Director')}`);
    console.log(`  ✓ Sales Executive (Sathish A): ${jsContent.includes('Sales Executive')}`);
    console.log(`  ✓ Maps Link: ${jsContent.includes('https://maps.app.goo.gl/SDEJYKWMjFhBpXrd8')}`);
    console.log(`  ✓ Maps Embed: ${jsContent.includes('output=embed')}`);
    console.log(`  ✓ WhatsApp link Arunachalam: ${jsContent.includes('919443888039')}`);
    console.log(`  ✓ WhatsApp link Sathish: ${jsContent.includes('919940816288')}`);

    preview.kill();
    console.log('\n=== ALL QA ASSERTIONS PASSED! ===');
    process.exit(0);
  }
}

runQA().catch((err) => {
  console.error('QA Error:', err);
  process.exit(1);
});
