import fs from 'fs';
import path from 'path';
import https from 'https';

const downloads = [
  {
    name: 'KNC Krishi Nutrition Cattle Feed (Official Banner/Packaging)',
    url: 'https://www.krishinutrition.com/wp-content/uploads/2021/03/Cattle-Feed-1536x480.jpg',
    dest: path.resolve('public/images/knc-cattle-feed.jpg'),
  },
  {
    name: 'KS / KSE Cattle Feed (Official Brand Banner)',
    url: 'https://www.kselimited.com/assets/Hero%20Banner-DaJVhGbB.webp',
    dest: path.resolve('public/images/ks-cattle-feed.webp'),
  },
  {
    name: 'SKM Cattle Feed (Official Promax Cattle Feed Bag Packaging)',
    url: 'https://www.skmpornafoods.com/wp-content/uploads/2024/05/promax_bag.png',
    dest: path.resolve('public/images/skm-cattle-feed.png'),
  },
  {
    name: 'SKM Feed Logo',
    url: 'https://www.skmpornafoods.com/assets/feedlogo-DFKRgf2v.png',
    dest: path.resolve('public/images/skm-feed-logo.png'),
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    };

    function request(u) {
      https
        .get(u, options, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return request(res.headers.location);
          }
          if (res.statusCode !== 200) {
            file.close();
            fs.unlink(dest, () => {});
            return reject(new Error(`HTTP ${res.statusCode} for ${u}`));
          }
          res.pipe(file);
          file.on('finish', () => {
            file.close(() => resolve());
          });
        })
        .on('error', (err) => {
          file.close();
          fs.unlink(dest, () => {});
          reject(err);
        });
    }

    request(url);
  });
}

async function main() {
  console.log('Downloading official brand images...');
  for (const item of downloads) {
    try {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, item.dest);
      const stat = fs.statSync(item.dest);
      console.log(`✓ Saved ${path.basename(item.dest)} (${Math.round(stat.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.name}:`, err.message);
    }
  }
}

main();
