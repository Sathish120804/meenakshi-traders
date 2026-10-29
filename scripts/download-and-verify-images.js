import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicImagesDir = path.resolve(__dirname, '../public/images');

const items = [
  {
    key: 'wheat-bran',
    filename: 'wheat-bran.jpg',
    url: 'https://tiimg.tistatic.com/fp/1/006/628/wheat-bran-for-animal-feed-663.jpg',
    description: 'Wheat bran for animal feed'
  },
  {
    key: 'grains-millets',
    filename: 'grains-millets-assortment.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTr7HjiLsXn_9ySGhn4BCPTj6GPMNfuxAZM_z6nicFA&s=10',
    description: 'Grains & Millets assortment'
  },
  {
    key: 'cholam',
    filename: 'cholam-sorghum-feed.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS74ZTL6oDFz6nZfa_bDWc-CU7wAbcryRm2W2X0ziJv3g&s=10',
    description: 'Cholam / Sorghum'
  },
  {
    key: 'oilcakes',
    filename: 'oilcake-feed-ingredient.jpg',
    url: 'https://5.imimg.com/data5/IOS/Default/2025/12/566323972/LQ/LQ/EJ/124880656/product-jpeg-500x500.jpeg',
    description: 'Oil Cakes & Feed Ingredients'
  },
  {
    key: 'santhi',
    filename: 'santhi-cattle-feed-pkg.jpg',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsRdYjrgu3MpYPZWKiv-AzbkC0zH6Sjm7o2ZDz-Tglyw&s=10',
    description: 'Santhi Cattle Feed packaging'
  }
];

function downloadFile(url, destPath) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirecting to: ${res.headers.location}`);
        return downloadFile(res.headers.location, destPath).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.error(`Failed ${url}: HTTP ${res.statusCode}`);
        return resolve({ success: false, status: res.statusCode });
      }
      const contentType = res.headers['content-type'];
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const stat = fs.statSync(destPath);
        console.log(`Saved ${destPath} (${stat.size} bytes, ${contentType})`);
        resolve({ success: true, size: stat.size, contentType });
      });
    });
    req.on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve({ success: false, error: err.message });
    });
    req.setTimeout(12000, () => {
      req.destroy();
      console.error(`Timeout downloading ${url}`);
      resolve({ success: false, timeout: true });
    });
  });
}

// Check maps redirection
function checkMapsUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      console.log('Google Maps URL status:', res.statusCode, 'Location:', res.headers.location);
      resolve(res.headers.location || url);
    }).on('error', (e) => {
      console.error('Error resolving maps:', e.message);
      resolve(url);
    });
  });
}

async function run() {
  console.log('Starting download of user-supplied product images...');
  for (const item of items) {
    const dest = path.join(publicImagesDir, item.filename);
    console.log(`\nFetching ${item.key} from ${item.url}...`);
    const res = await downloadFile(item.url, dest);
    console.log(`Result for ${item.key}:`, res);
  }

  console.log('\nChecking Google Maps redirect:');
  const finalMapUrl = await checkMapsUrl('https://maps.app.goo.gl/SDEJYKWMjFhBpXrd8');
  console.log('Resolved Map URL:', finalMapUrl);
}

run();
