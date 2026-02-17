const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'data', 'pages_manifest.json');
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

if (!fs.existsSync(manifestPath)) {
  console.error('Error: data/pages_manifest.json not found. Run generateLargeManifest.js first.');
  process.exit(1);
}

try {
  const content = fs.readFileSync(manifestPath, 'utf-8');
  const pages = JSON.parse(content);

  console.log(`Generating sitemap for ${pages.length} pages...`);

  const baseUrl = 'https://legal-compliance-portal.com'; // Replace with actual domain
  const currentDate = new Date().toISOString();

  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static routes not in manifest (if any, though we added most to manifest)
  // We'll trust the manifest has everything now.

  pages.forEach((page) => {
    sitemapContent += `  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${page.last_modified || currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.slug === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
  });

  sitemapContent += `</urlset>`;

  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log(`✓ Sitemap generated at ${sitemapPath}`);
  console.log(`  Total URLs: ${pages.length}`);
} catch (error) {
  console.error('Error generating sitemap:', error);
  process.exit(1);
}
