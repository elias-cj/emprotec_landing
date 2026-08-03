const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const assetsDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const imageUrls = JSON.parse(fs.readFileSync('extracted_images.json', 'utf8'));

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => resolve(dest));
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(`Failed with status code: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
}

async function run() {
  console.log(`Downloading ${imageUrls.length} assets to ${assetsDir}...`);
  for (const url of imageUrls) {
    try {
      const fileName = path.basename(new URL(url).pathname);
      const dest = path.join(assetsDir, fileName);
      console.log(`Downloading: ${fileName}...`);
      await downloadFile(url, dest);
      console.log(`Saved: ${fileName}`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err);
    }
  }
  console.log('All downloads completed!');
}

run();
