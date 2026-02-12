const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'resourse');
const dest = path.join(__dirname, 'src', 'assets');

console.log(`Attempting to rename ${src} to ${dest}`);

try {
    if (fs.existsSync(src)) {
        fs.renameSync(src, dest);
        console.log('Rename successful');
    } else {
        console.log('Source does not exist:', src);
         if (fs.existsSync(dest)) {
            console.log('Destination already exists.');
        }
    }
} catch (error) {
    console.error('Rename failed:', error);
    // Try copy and delete if rename fails (e.g. across partitions, though unlikely here)
    try {
        if (!fs.existsSync(dest)) {
             fs.mkdirSync(dest, { recursive: true });
        }
        const files = fs.readdirSync(src);
        for (const file of files) {
            const srcFile = path.join(src, file);
            const destFile = path.join(dest, file);
            // recursive copy if needed, but assuming flat or simple for now
             if (fs.lstatSync(srcFile).isDirectory()) {
                 // simple directory move logic if needed, but let's assume rename worked for dir
                 // if we are here, rename failed.
                 console.log(`Skipping complex dir copy for ${file}`);
             } else {
                fs.copyFileSync(srcFile, destFile);
             }
        }
        console.log('Copy successful, deleting source? No, keeping for safety.');
        // fs.rmdirSync(src, { recursive: true });
    } catch (err2) {
        console.error('Copy also failed:', err2);
    }
}
