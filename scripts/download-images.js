import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesDir = path.resolve('public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Manifest of real, verified images
const imageManifest = [
  // Wikimedia Commons verified images
  {
    filename: 'cholam-sorghum.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Sorghum_bicolor_subsp._bicolor_seeds.jpg',
    source: 'Wikimedia Commons (USDA-NRCS PLANTS Database, Public Domain)',
  },
  {
    filename: 'kambu-millet.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Pearl_millet_grain.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 4.0)',
  },
  {
    filename: 'keppai-ragi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/The_seeds_of_Finger_millet.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 4.0)',
  },
  {
    filename: 'dry-red-chilli.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sun_dry_red_chilli.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    filename: 'groundnut-oil-cake.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/An_oil_cake_of_peanut.JPG',
    source: 'Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    filename: 'cottonseed.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Seeds_of_cotton.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 4.0)',
  },
  {
    filename: 'cottonseed-cake.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/A_bag_of_cotton_seeds.JPG',
    source: 'Wikimedia Commons (CC-BY-SA 3.0)',
  },
  {
    filename: 'sesame-oil-cake.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Sesame-Seeds.jpg',
    source: 'Wikimedia Commons (Public Domain)',
  },
  {
    filename: 'thuvudu-bran.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Wheat_bran.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 4.0)',
  },
  {
    filename: 'amman-ponni-rice.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Rice_sacks.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 4.0)',
  },
  {
    filename: 'bajra-grain.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/A_plate_of_sorghum_grain.jpg',
    source: 'Wikimedia Commons (CC-BY-SA 4.0)',
  },

  // High-resolution Unsplash licensed agricultural images for store, categories, and feeds
  {
    filename: 'hero-agri-store.jpg',
    url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    source: 'Unsplash (Free Commercial Use License - Agricultural sacks in store)',
  },
  {
    filename: 'cattle-feed-category.jpg',
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Free Commercial Use License - Dairy cattle & farming)',
  },
  {
    filename: 'bran-category.jpg',
    url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Free Commercial Use License - Milled grains & bran)',
  },
  {
    filename: 'rice-category.jpg',
    url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Free Commercial Use License - Stacked rice & grain sacks)',
  },
  {
    filename: 'grains-category.jpg',
    url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Free Commercial Use License - Traditional agricultural grains)',
  },
  {
    filename: 'oilcakes-category.jpg',
    url: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Free Commercial Use License - Agricultural oilseeds and feed byproducts)',
  },
  {
    filename: 'feed-grains-category.jpg',
    url: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Free Commercial Use License - Feed-grade grains harvest)',
  },
  {
    filename: 'knc-cattle-feed.jpg',
    url: 'https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Representative dairy livestock feed sacks)',
  },
  {
    filename: 'skm-cattle-feed.jpg',
    url: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Representative animal feed packaging)',
  },
  {
    filename: 'ks-cattle-feed.jpg',
    url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Representative livestock cattle feed formulation bags)',
  },
  {
    filename: 'santhi-cattle-feed.jpg',
    url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Representative traditional cattle feed sack)',
  },
  {
    filename: 'feed-grade-cholam.jpg',
    url: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=800&q=80',
    source: 'Unsplash (Feed-grade grain sorghum photography)',
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent': 'MeenakshiTradersWeb/1.0 (contact: meenakshitraders1981@gmail.com)',
      },
    };

    function get(currentUrl) {
      https.get(currentUrl, options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          get(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          reject(new Error(`Failed with status code: ${res.statusCode} for ${currentUrl}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve());
        });
      }).on('error', (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
    }

    get(url);
  });
}

async function run() {
  console.log('Downloading assets into public/images/...');
  for (const item of imageManifest) {
    const dest = path.join(imagesDir, item.filename);
    try {
      console.log(`Downloading ${item.filename}...`);
      await downloadFile(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✓ Saved ${item.filename} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.filename}:`, err.message);
    }
  }
  console.log('Finished downloading images.');
}

run();
