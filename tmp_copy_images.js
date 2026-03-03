const fs = require('fs');
const path = require('path');

const sourceImages = [
  'C:\\Users\\alskd\\.gemini\\antigravity\\brain\\f1b65eba-adce-425c-9504-1d88cf9b65c2\\algogo_main_1772177574000.png',
  'C:\\Users\\alskd\\.gemini\\antigravity\\brain\\f1b65eba-adce-425c-9504-1d88cf9b65c2\\algogo_architecture_1772177588595.png'
];

const destDir = 'c:\\Users\\alskd\\OneDrive\\바탕 화면\\취준\\포폴\\포토폴리오\\src\\resourse\\algogo';
const destNames = ['main.png', 'architecture.png'];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

sourceImages.forEach((src, idx) => {
  const dest = path.join(destDir, destNames[idx]);
  try {
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${src} to ${dest}`);
  } catch (err) {
    console.error(`Failed to copy ${src}:`, err);
  }
});
