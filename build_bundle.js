const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const bundle = {};
files.forEach(f => {
  const id = f.replace('.md', '');
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  bundle[id] = content;
});

const bundleJs = 'window.WIKI_ARTICLES_BUNDLE = ' + JSON.stringify(bundle, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'assets', 'articles_bundle.js'), bundleJs, 'utf8');
console.log('Successfully rebuilt articles_bundle.js with ' + Object.keys(bundle).length + ' articles.');

