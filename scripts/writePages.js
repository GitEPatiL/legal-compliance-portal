const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'data', 'pages_manifest.json');
const outputDir = path.join(__dirname, '..', 'public', 'pages');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read manifest
let manifest = [];
try {
  const content = fs.readFileSync(manifestPath, 'utf-8');
  manifest = JSON.parse(content);
  console.log(`✓ Loaded ${manifest.length} pages from manifest`);
} catch (error) {
  console.error('Error reading manifest:', error.message);
  process.exit(1);
}

// Track duplicates
const slugCounts = {};
const duplicates = [];

// Write individual page JSONs
manifest.forEach((page) => {
  let slug = page.slug;

  // Handle duplicate slugs
  if (slugCounts[slug]) {
    const count = slugCounts[slug];
    const newSlug = `${slug}-${count}`;
    duplicates.push({ original: slug, renamed: newSlug });
    slug = newSlug;
    page.slug = slug;
    console.warn(`⚠ Duplicate slug detected: ${slug} renamed to ${newSlug}`);
  }

  slugCounts[slug] = (slugCounts[slug] || 0) + 1;

  // Write page JSON
  const outputPath = path.join(outputDir, `${slug}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(page, null, 2));
  console.log(`✓ Written: ${slug}.json`);
});

// Write manifest
const manifestOutputPath = path.join(outputDir, 'manifest.json');
fs.writeFileSync(manifestOutputPath, JSON.stringify(manifest, null, 2));
console.log(`✓ Written manifest.json with ${manifest.length} pages`);

// Write duplicates report if any
if (duplicates.length > 0) {
  const duplicatesPath = path.join(outputDir, 'manifest-duplicates.json');
  fs.writeFileSync(duplicatesPath, JSON.stringify(duplicates, null, 2));
  console.warn(`⚠ ${duplicates.length} duplicates found. See manifest-duplicates.json`);
}

console.log(`\n🎉 Page generation complete!`);
