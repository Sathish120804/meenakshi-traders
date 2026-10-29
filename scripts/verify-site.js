import fs from 'fs';
import path from 'path';

console.log('--- Starting Meenakshi Traders Quality Audit & Verification ---');

let hasErrors = false;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    hasErrors = true;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

// 1. Verify index.html
const indexHtmlPath = path.resolve('index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
assert(
  indexHtml.includes('<title>Meenakshi Traders | Cattle Feed, Grains & Agricultural Products</title>'),
  'index.html has exact requested title'
);
assert(
  indexHtml.includes('Noto+Sans+Tamil') && indexHtml.includes('Inter'),
  'index.html loads Noto Sans Tamil and Inter Google fonts'
);
assert(
  indexHtml.includes('schema.org') && indexHtml.includes('LocalBusiness'),
  'index.html includes Schema.org LocalBusiness structured data'
);
assert(
  indexHtml.includes('9443888039') && indexHtml.includes('9940816288'),
  'index.html includes verified phone numbers in structured data'
);

// 2. Verify public static assets
const robotsPath = path.resolve('public/robots.txt');
const sitemapPath = path.resolve('public/sitemap.xml');
const faviconPath = path.resolve('public/favicon.svg');
assert(fs.existsSync(robotsPath), 'public/robots.txt exists');
assert(fs.existsSync(sitemapPath), 'public/sitemap.xml exists');
assert(fs.existsSync(faviconPath), 'public/favicon.svg exists');

// 3. Verify all image files listed in products & categories exist in public/
import { products } from '../src/data/products.ts';
import { categories } from '../src/data/categories.ts';
import { siteConfig } from '../src/data/siteConfig.ts';
import { faqs } from '../src/data/faqs.ts';
import { buildWhatsAppUrl, getProductEnquiryMessage } from '../src/utils/whatsapp.ts';

for (const cat of categories) {
  const imgPath = path.resolve('public', cat.image.replace(/^\//, ''));
  assert(fs.existsSync(imgPath), `Category image exists: ${cat.image} (${cat.nameEn})`);
  assert(cat.nameTa.length > 0 && cat.nameEn.length > 0, `Category has bilingual names: ${cat.nameEn}`);
}

for (const prod of products) {
  const imgPath = path.resolve('public', prod.image.replace(/^\//, ''));
  assert(fs.existsSync(imgPath), `Product image exists: ${prod.image} (${prod.nameEn})`);
  assert(prod.nameTa.length > 0 && prod.nameEn.length > 0, `Product has bilingual names: ${prod.nameEn}`);
}

// 4. Verify Brand Preservation
const brands = products.map((p) => p.brand).filter(Boolean);
assert(brands.includes('KNC Krishi Nutrition'), 'KNC Krishi Nutrition brand preserved');
assert(brands.includes('SKM'), 'SKM brand preserved');
assert(brands.includes('KS'), 'KS brand preserved');
assert(brands.includes('Santhi'), 'Santhi brand preserved');
assert(brands.includes('Amman Ponni'), 'Amman Ponni brand preserved');

// 5. Verify Distinction between Cottonseed & Cottonseed Cake
const cottonseed = products.find((p) => p.id === 'cottonseed');
const cottonseedCake = products.find((p) => p.id === 'cottonseed-cake');
assert(
  cottonseed && cottonseedCake && cottonseed.id !== cottonseedCake.id,
  'Cottonseed and Cottonseed Cake are distinct catalog records'
);

// 6. Verify Contacts & Google Maps Link
assert(
  siteConfig.contacts[0].phoneRaw === '+919443888039' &&
  siteConfig.contacts[0].email === 'arunachalam1032@gmail.com' &&
  siteConfig.contacts[0].whatsappNumber === '919443888039',
  'Arunachalam A contact details verified'
);
assert(
  siteConfig.contacts[1].phoneRaw === '+919940816288' &&
  siteConfig.contacts[1].email === 'meenakshitraders1981@gmail.com' &&
  siteConfig.contacts[1].additionalEmail === 'sathisharunachalam1208@gmail.com' &&
  siteConfig.contacts[1].whatsappNumber === '919940816288',
  'Sathish A contact details verified with additional email'
);
assert(
  siteConfig.googleMapsUrl === 'https://share.google/zduC0I0J4WuZrcNup',
  'Google Maps link matches primary reference listing'
);

// 7. Verify WhatsApp Message Generator & URL encoding
const testProd = products[0];
const taMsg = getProductEnquiryMessage(testProd, 'ta');
const enMsg = getProductEnquiryMessage(testProd, 'en');
const taUrl = buildWhatsAppUrl(siteConfig.contacts[0].whatsappNumber, taMsg);
const enUrl = buildWhatsAppUrl(siteConfig.contacts[0].whatsappNumber, enMsg);

assert(
  taUrl.startsWith('https://wa.me/919443888039?text='),
  'WhatsApp URL generated with clean numeric recipient'
);
assert(
  taUrl.includes(encodeURIComponent(testProd.nameTa)),
  'WhatsApp message includes URL-encoded Tamil product name'
);
assert(
  enUrl.includes(encodeURIComponent(testProd.nameEn)),
  'WhatsApp message includes URL-encoded English product name'
);

// 8. Verify FAQs
assert(faqs.length >= 5, 'At least 5 practical FAQs included');
for (const f of faqs) {
  assert(
    f.questionTa && f.questionEn && f.answerTa && f.answerEn,
    `FAQ has complete bilingual Q&A: ${f.id}`
  );
}

// 9. Verify dist/ build output
assert(fs.existsSync(path.resolve('dist/index.html')), 'dist/index.html generated');
assert(fs.existsSync(path.resolve('dist/assets')), 'dist/assets directory generated');

console.log('----------------------------------------------------');
if (hasErrors) {
  console.error('❌ Verification finished with errors.');
  process.exit(1);
} else {
  console.log('🎉 ALL AUDIT CHECKS PASSED SUCCESSFULLY!');
}
