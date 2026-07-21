import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'videos');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// A highly reliable public domain MP4 video of a train from Wikimedia Commons / Internet Archive / etc.
// For testing, we'll use a reliable MDN / W3C test video if we can't find a train, but we will try a train first.
// Here is a known train video from Wikimedia (transcoded to MP4 or WebM)
// "Shinkansen passing"
const videoUrls = {
  train: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/High-speed_train_in_China.webm/High-speed_train_in_China.webm.480p.vp9.webm',
  speed: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
};

async function download(url, filename) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${filename}...`);
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, filename).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Finished ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

async function main() {
  try {
    await download(videoUrls.train, path.join(outDir, 'train.webm'));
    await download(videoUrls.speed, path.join(outDir, 'speed.mp4'));
    console.log("All videos downloaded successfully!");
  } catch(e) {
    console.error("Download failed:", e);
  }
}

main();
