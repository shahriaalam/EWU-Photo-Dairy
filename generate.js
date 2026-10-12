const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.PNG', '.JPG', '.JPEG']);

const SECTION_ORDER = [
  "Our Family",
  "Semester 2", "Semester 3", "Semester 4", "Semester 5",
  "Semester 6", "Semester 7", "Semester 8", "Semester 9",
  "Semester 10", "Semester 11", "Semester 12",
  "Convocation", "Gibli Art", "Others"
];

const FOLDER_MAP = {
  "1st Semester": "Our Family",
  "2nd Semester": "Semester 2",
  "3rd Semester": "Semester 3",
  "4th Semester": "Semester 4",
  "5th Semester": "Semester 5",
  "6th Semester": "Semester 6",
  "7th Semester": "Semester 7",
  "8th Semester": "Semester 8",
  "9th Semester": "Semester 9",
  "10th Semester": "Semester 10",
  "11th Semester": "Semester 11",
  "12th Semester": "Semester 12",
  "Convocation": "Convocation",
  "Gibli Art": "Gibli Art",
  "Others": "Others",
  "Slide": null // Slideshow folder handled separately
};

function naturalSort(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

async function processThumbnails() {
  const imagesRoot = path.join(__dirname, 'images');
  const thumbsRoot = path.join(__dirname, 'thumbnails');

  if (!fs.existsSync(imagesRoot)) {
    console.error('images/ directory not found!');
    return;
  }

  fs.mkdirSync(thumbsRoot, { recursive: true });

  const sections = {};
  for (const name of SECTION_ORDER) {
    sections[name] = [];
  }

  const folders = fs.readdirSync(imagesRoot).filter(f => {
    return fs.statSync(path.join(imagesRoot, f)).isDirectory();
  });

  let generatedCount = 0;
  let skippedCount = 0;
  let totalPhotos = 0;

  // Process gallery folders
  for (const folder of folders) {
    const sectionName = FOLDER_MAP[folder];
    if (sectionName === null) continue; // Skip slides in gallery data
    const targetSection = sectionName || "Others";

    const folderSrc = path.join(imagesRoot, folder);
    const folderThumb = path.join(thumbsRoot, folder);
    fs.mkdirSync(folderThumb, { recursive: true });

    const files = fs.readdirSync(folderSrc)
      .filter(f => !f.startsWith('.') && IMAGE_EXTS.has(path.extname(f)))
      .sort(naturalSort);

    for (const file of files) {
      totalPhotos++;
      const srcPath = path.join(folderSrc, file);
      const parsed = path.parse(file);
      const thumbFileName = parsed.name + '.webp';
      const thumbPath = path.join(folderThumb, thumbFileName);

      const relSrc = `images/${folder}/${file}`;
      const relThumb = `thumbnails/${folder}/${thumbFileName}`;

      sections[targetSection].push({
        src: relSrc,
        thumb: relThumb,
        text: targetSection
      });

      // Check if thumbnail exists and is up-to-date
      let needGenerate = true;
      if (fs.existsSync(thumbPath)) {
        const srcStat = fs.statSync(srcPath);
        const thumbStat = fs.statSync(thumbPath);
        if (thumbStat.mtimeMs >= srcStat.mtimeMs && thumbStat.size > 0) {
          needGenerate = false;
          skippedCount++;
        }
      }

      if (needGenerate) {
        try {
          await sharp(srcPath)
            .rotate() // Auto-orient based on EXIF tag
            .resize({
              width: 440,
              height: 440,
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({ quality: 78, effort: 4 })
            .toFile(thumbPath);
          generatedCount++;
        } catch (err) {
          console.warn(`Error generating thumbnail for ${relSrc}:`, err.message);
        }
      }
    }
  }

  // Also optimize slide images
  const slideSrc = path.join(imagesRoot, 'Slide');
  const slideThumb = path.join(thumbsRoot, 'Slide');
  if (fs.existsSync(slideSrc)) {
    fs.mkdirSync(slideThumb, { recursive: true });
    const slideFiles = fs.readdirSync(slideSrc)
      .filter(f => !f.startsWith('.') && IMAGE_EXTS.has(path.extname(f)))
      .sort(naturalSort);

    for (const file of slideFiles) {
      const srcPath = path.join(slideSrc, file);
      const parsed = path.parse(file);
      const thumbPath = path.join(slideThumb, parsed.name + '.webp');

      let needGenerate = true;
      if (fs.existsSync(thumbPath)) {
        const srcStat = fs.statSync(srcPath);
        const thumbStat = fs.statSync(thumbPath);
        if (thumbStat.mtimeMs >= srcStat.mtimeMs && thumbStat.size > 0) {
          needGenerate = false;
        }
      }

      if (needGenerate) {
        try {
          await sharp(srcPath)
            .rotate()
            .resize({
              width: 1600,
              height: 1200,
              fit: 'inside',
              withoutEnlargement: true
            })
            .webp({ quality: 80, effort: 4 })
            .toFile(thumbPath);
          console.log(`Optimized slide image: ${file} -> ${parsed.name}.webp`);
        } catch (err) {
          console.warn(`Error optimizing slide ${file}:`, err.message);
        }
      }
    }
  }

  // Build photos.js
  const output = [];
  for (const name of SECTION_ORDER) {
    if (sections[name] && sections[name].length > 0) {
      output.push({ name, photos: sections[name] });
    }
  }

  const jsContent = `// AUTO-GENERATED by generate.js — do not edit manually\nconst SECTIONS = ${JSON.stringify(output, null, 2)};\n`;
  fs.writeFileSync(path.join(__dirname, 'photos.js'), jsContent, 'utf-8');

  console.log(`\n==========================================`);
  console.log(`Thumbnail generation summary:`);
  console.log(`- Total photos: ${totalPhotos}`);
  console.log(`- Newly generated: ${generatedCount}`);
  console.log(`- Skipped (already up-to-date): ${skippedCount}`);
  console.log(`- Sections count: ${output.length}`);
  console.log(`- Saved photos.js successfully!`);
  console.log(`==========================================\n`);
}

processThumbnails().catch(console.error);
