const fs = require('fs');
const path = require('path');

const appJs = fs.readFileSync(path.join(__dirname, 'assets', 'app.js'), 'utf8');
const match = appJs.match(/const ARTICLES_REGISTRY = (\[[\s\S]*?\]);/);
if (!match) {
  console.error("Could not parse ARTICLES_REGISTRY");
  process.exit(1);
}
const articles = eval(match[1]);
const baseUrl = "https://mserman90.github.io/kooperatif-vikipedi/";
const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Ana Sayfa -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

articles.forEach(art => {
  const priority = art.id === "00_ana_sayfa" ? "1.0" :
                   (art.id.startsWith("24_") || art.id.startsWith("30_") || art.id.startsWith("02_")) ? "0.9" : "0.8";
  xml += `  <url>
    <loc>${baseUrl}#${art.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

xml += `</urlset>\n`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log(`Generated sitemap.xml with ${articles.length + 1} URLs.`);
