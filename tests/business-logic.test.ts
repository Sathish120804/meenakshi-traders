import { describe, it } from 'node:test';
import assert from 'node:assert';
import { categories } from '../src/data/categories.ts';
import { products, brandPartners } from '../src/data/products.ts';
import { siteConfig } from '../src/data/siteConfig.ts';
import { buildWhatsAppUrl, getGeneralEnquiryMessage } from '../src/utils/whatsapp.ts';

describe('Category Structure & Removal of Feed-Grade Grains', () => {
  it('must contain exactly 5 product categories', () => {
    assert.strictEqual(categories.length, 5, `Expected 5 categories, found ${categories.length}`);
  });

  it('must contain the exact 5 allowed category IDs', () => {
    const ids = categories.map((c) => c.id).sort();
    const expected = [
      'bran-byproducts',
      'cattle-feed',
      'grains-millets',
      'oil-cakes',
      'rice-varieties',
    ].sort();
    assert.deepStrictEqual(ids, expected);
  });

  it('must have completely removed the feed-grains category', () => {
    const hasFeedGrains = categories.some((c) => c.id === 'feed-grains');
    assert.strictEqual(hasFeedGrains, false, 'feed-grains category should not exist in categories');
  });

  it('no product in the catalogue should be assigned to feed-grains', () => {
    const feedGrainProducts = products.filter((p) => p.category === 'feed-grains');
    assert.strictEqual(
      feedGrainProducts.length,
      0,
      `Found ${feedGrainProducts.length} products assigned to feed-grains`
    );
  });

  it('no duplicate feed-grade-cholam product should exist', () => {
    const duplicateCholam = products.find((p) => p.id === 'feed-grade-cholam');
    assert.strictEqual(duplicateCholam, undefined, 'feed-grade-cholam must be removed');
  });
});

describe('Product Catalogue Content & Integrity', () => {
  it('cattle feed products must cover the 4 featured brands', () => {
    const cattleFeeds = products.filter((p) => p.category === 'cattle-feed');
    assert.strictEqual(cattleFeeds.length, 4, 'Expected 4 cattle feed products');

    const brandNames = cattleFeeds.map((p) => p.brand);
    assert.ok(brandNames.includes('KNC Krishi Nutrition'), 'Missing KNC brand');
    assert.ok(brandNames.includes('SKM'), 'Missing SKM brand');
    assert.ok(brandNames.includes('KS / KSE'), 'Missing KS / KSE brand');
    assert.ok(brandNames.includes('Santhi'), 'Missing Santhi brand');
  });

  it('each product card must have both an English name and a Tamil reference', () => {
    products.forEach((p) => {
      assert.ok(p.nameEn && p.nameEn.trim().length > 0, `Product ${p.id} missing nameEn`);
      assert.ok(p.nameTa && p.nameTa.trim().length > 0, `Product ${p.id} missing nameTa`);
      assert.ok(p.shortDescEn && p.shortDescEn.trim().length > 0, `Product ${p.id} missing shortDescEn`);
    });
  });

  it('wheat bran is mapped to the wheat-bran.jpg image', () => {
    const wheatBran = products.find((p) => p.id === 'wheat-bran-thuvudu');
    assert.ok(wheatBran, 'Wheat bran product not found');
    assert.strictEqual(wheatBran.image, '/images/wheat-bran.jpg');
    assert.strictEqual(wheatBran.category, 'bran-byproducts');
  });

  it('cholam is mapped to cholam-sorghum-feed.jpg in grains-millets', () => {
    const cholam = products.find((p) => p.id === 'cholam-sorghum');
    assert.ok(cholam, 'Cholam product not found');
    assert.strictEqual(cholam.image, '/images/cholam-sorghum-feed.jpg');
    assert.strictEqual(cholam.category, 'grains-millets');
  });

  it('santhi feed uses verified packaging image', () => {
    const santhi = products.find((p) => p.id === 'santhi-cattle-feed');
    assert.ok(santhi, 'Santhi product not found');
    assert.strictEqual(santhi.image, '/images/santhi-cattle-feed-pkg.jpg');
  });
});

describe('Product Search & Filter Business Logic', () => {
  it('filters accurately by category ID', () => {
    const riceOnly = products.filter((p) => p.category === 'rice-varieties');
    assert.ok(riceOnly.length >= 1);
    assert.ok(riceOnly.every((p) => p.category === 'rice-varieties'));

    const oilCakes = products.filter((p) => p.category === 'oil-cakes');
    assert.ok(oilCakes.length >= 4);
    assert.ok(oilCakes.every((p) => p.category === 'oil-cakes'));
  });

  it('searches across English names, Tamil references, and brands', () => {
    const search = (query: string) => {
      const q = query.toLowerCase().trim();
      return products.filter((p) => {
        const inTa = p.nameTa.toLowerCase().includes(q);
        const inEn = p.nameEn.toLowerCase().includes(q);
        const inBrand = p.brand ? p.brand.toLowerCase().includes(q) : false;
        const inDesc = p.shortDescEn.toLowerCase().includes(q);
        return inTa || inEn || inBrand || inDesc;
      });
    };

    // English search
    assert.ok(search('SKM').some((p) => p.id === 'skm-cattle-feed'));
    assert.ok(search('sorghum').some((p) => p.id === 'cholam-sorghum'));
    assert.ok(search('bran').some((p) => p.id === 'wheat-bran-thuvudu'));

    // Tamil reference search
    assert.ok(search('தீவனம்').length >= 4, 'Search for தீவனம் should match all cattle feeds');
    assert.ok(search('சோளம்').some((p) => p.id === 'cholam-sorghum'));
    assert.ok(search('புண்ணாக்கு').length >= 3, 'Search for புண்ணாக்கு should match oil cakes');
  });
});

describe('WhatsApp URL Generation & Contact Verification', () => {
  it('generates a valid WhatsApp URL with country code +91', () => {
    const url = buildWhatsAppUrl('919443888039', 'Hello test');
    assert.ok(url.startsWith('https://wa.me/919443888039?text='));
    assert.ok(url.includes('Hello%20test'));
  });

  it('verifies Arunachalam A designation as Managing Director', () => {
    const arunachalam = siteConfig.contacts.find((c) => c.name.includes('Arunachalam'));
    assert.ok(arunachalam, 'Arunachalam A not found in contacts');
    assert.strictEqual(arunachalam.role, 'Managing Director');
    assert.strictEqual(arunachalam.phoneRaw, '+919443888039');
    assert.strictEqual(arunachalam.email, 'arunachalam1032@gmail.com');
  });

  it('verifies Sathish A designation as Sales Executive', () => {
    const sathish = siteConfig.contacts.find((c) => c.name.includes('Sathish'));
    assert.ok(sathish, 'Sathish A not found in contacts');
    assert.strictEqual(sathish.role, 'Sales Executive');
    assert.strictEqual(sathish.phoneRaw, '+919940816288');
    assert.strictEqual(sathish.email, 'meenakshitraders1981@gmail.com');
    assert.strictEqual(sathish.additionalEmail, 'sathisharunachalam1208@gmail.com');
  });

  it('verifies Google Maps URL is the exact supplied link', () => {
    assert.strictEqual(siteConfig.googleMapsUrl, 'https://maps.app.goo.gl/SDEJYKWMjFhBpXrd8');
    assert.ok(siteConfig.googleMapsEmbedUrl.includes('output=embed'));
  });
});
