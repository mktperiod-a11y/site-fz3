import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const manifest = JSON.parse(fs.readFileSync('data/rankings/trend-assets.json', 'utf8'));
fs.mkdirSync('public/ranking-images/trends', { recursive: true });
for (const asset of Object.values(manifest)) {
  const path = `public/ranking-images/trends/${asset.file}`;
  if (fs.existsSync(path)) continue;
  const raw = execFileSync('curl', ['--fail', '--silent', '--show-error', '--location', '--max-time', '30', asset.url], { maxBuffer: 15 * 1024 * 1024 });
  const image = await sharp(raw).rotate().resize({ width: 960, withoutEnlargement: true }).jpeg({ quality: 85 }).toBuffer();
  fs.writeFileSync(path, image);
  console.log(asset.file);
}
