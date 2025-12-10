/**
 * Generate platform icons (PWA, Apple touch, favicons) from the base logo.
 * Run with: npm run icons:generate
 */
const { join } = require('path');
const { mkdir } = require('fs/promises');
const sharp = require('sharp');

const projectRoot = join(__dirname, '..');
const source = join(projectRoot, 'public', 'logo.png');
const outputDir = join(projectRoot, 'public', 'icons');

const targets = [
  { size: 32, file: 'icon-32.png' },
  { size: 192, file: 'icon-192.png' },
  { size: 512, file: 'icon-512.png' },
  { size: 512, file: 'icon-512-maskable.png', options: { extend: true } },
  { size: 180, file: 'apple-touch-icon.png' },
];

async function ensureDir() {
  await mkdir(outputDir, { recursive: true });
}

async function generateIcon(target) {
  const dest = join(outputDir, target.file);
  let pipeline = sharp(source).resize(target.size, target.size, {
    fit: target.options?.extend ? 'contain' : 'cover',
    background: target.options?.extend ? { r: 15, g: 23, b: 42, alpha: 1 } : undefined,
  });

  await pipeline.png({ compressionLevel: 9, adaptiveFiltering: false }).toFile(dest);
  console.log(`✅ Generated ${target.file}`);
}

async function run() {
  await ensureDir();
  for (const target of targets) {
    await generateIcon(target);
  }
}

run().catch((err) => {
  console.error('❌ Failed to generate icons', err);
  process.exit(1);
});

