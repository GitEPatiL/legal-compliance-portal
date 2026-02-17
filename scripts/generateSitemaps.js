const fs = require('fs');
const path = require('path');

const MANIFEST_PATH = path.join(__dirname, '..', 'data', 'pages_manifest.json');
const OUTPUT_PATH = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = 'https://legal-compliance-portal.com'; // Replace with actual domain

async function generateSitemap() {
  console.log('Generating sitemap...');

  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error('Manifest not found at', MANIFEST_PATH);
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf-8'));

  const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const sitemapFooter = `
</urlset>`;

  const urls = manifest
    .map((page) => {
      return `
  <url>
    <loc>${BASE_URL}/${page.slug}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.slug === 'home' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('');

  const sitemap = sitemapHeader + urls + sitemapFooter;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`✅ Sitemap with ${manifest.length} URLs generated at public/sitemap.xml`);
}

generateSitemap().catch(console.error);
