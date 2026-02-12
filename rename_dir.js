const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'resourse');
const destDir = path.join(__dirname, 'src', 'assets');

try {
    if (fs.existsSync(srcDir)) {
        fs.renameSync(srcDir, destDir);
        console.log(`Renamed ${srcDir} to ${destDir}`);
    } else {
        console.log(`Source directory ${srcDir} does not exist.`);
        if (fs.existsSync(destDir)) {
             console.log(`Destination directory ${destDir} already exists.`);
        }
    }
} catch (e) {
    console.error(e);
}
