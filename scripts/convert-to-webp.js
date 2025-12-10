/**
 * Batch convert selected PNG/JPG assets to WebP format using Sharp.
 * Run with: node scripts/convert-to-webp.js
 */

const { join, dirname } = require('path');
const { mkdir } = require('fs/promises');
const { access } = require('fs/promises');
const sharp = require('sharp');

const projectRoot = join(__dirname, '..');

const assets = [
  // Homepage + hero media
  {
    src: 'public/media/candy/Ferrero_Rocher_T16_200g_X_20_02.png',
    dest: 'public/media/candy/Ferrero_Rocher_T16_200g_X_20_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Lindor_Cornet_Assorted_200g_X_12_02.png',
    dest: 'public/media/candy/Lindor_Cornet_Assorted_200g_X_12_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/social-preview.jpg',
    dest: 'public/media/social-preview.webp',
    quality: 80,
  },

  // Hospitality imagery
  {
    src: 'public/media/hospitality/cleaning/02-commercial-mop-bucket-janitorial-supplies.jpg',
    dest: 'public/media/hospitality/cleaning/02-commercial-mop-bucket-janitorial-supplies.webp',
    quality: 78,
  },
  {
    src: 'public/media/hospitality/cleaning/05-professional-cleaning-supplies.jpg',
    dest: 'public/media/hospitality/cleaning/05-professional-cleaning-supplies.webp',
    quality: 78,
  },
  {
    src: 'public/media/hospitality/cleaning/06-housekeeping-cart-maintenance-supplies.jpg',
    dest: 'public/media/hospitality/cleaning/06-housekeeping-cart-maintenance-supplies.webp',
    quality: 78,
  },
  {
    src: 'public/media/hospitality/kitchen/05-small-kitchen-appliance-blender-grinder.jpg',
    dest: 'public/media/hospitality/kitchen/05-small-kitchen-appliance-blender-grinder.webp',
    quality: 80,
  },
  {
    src: 'public/media/hospitality/kitchen/06-professional-blender-appliance.jpg',
    dest: 'public/media/hospitality/kitchen/06-professional-blender-appliance.webp',
    quality: 80,
  },
  {
    src: 'public/media/hospitality/textiles/01-luxury-hotel-bedding-set-duvet-covers.jpg',
    dest: 'public/media/hospitality/textiles/01-luxury-hotel-bedding-set-duvet-covers.webp',
    quality: 80,
  },
  {
    src: 'public/media/hospitality/textiles/04-professional-hotel-linens-pillowcases-sheets.jpg',
    dest: 'public/media/hospitality/textiles/04-professional-hotel-linens-pillowcases-sheets.webp',
    quality: 80,
  },

  // Decor chocolates (used on secondary pages)
  {
    src: 'public/media/decor/Godiva_Signature_Bars_Milk_Chocolate_90g_X_20_02.png',
    dest: 'public/media/decor/Godiva_Signature_Bars_Milk_Chocolate_90g_X_20_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/decor/Lotus_Spread_400g_01.png',
    dest: 'public/media/decor/Lotus_Spread_400g_01.webp',
    quality: 82,
  },
  {
    src: 'public/media/decor/Ritter_Sport_Alpine_Milk_100g_X_12_03.png',
    dest: 'public/media/decor/Ritter_Sport_Alpine_Milk_100g_X_12_03.webp',
    quality: 82,
  },
  {
    src: 'public/media/decor/Ritter_Sport_Marzipan_100g_X_12_04.png',
    dest: 'public/media/decor/Ritter_Sport_Marzipan_100g_X_12_04.webp',
    quality: 82,
  },
  {
    src: 'public/media/decor/Lindt_Hello_Tafel_Crunchy_Coconut_100g_X_12_04.png',
    dest: 'public/media/decor/Lindt_Hello_Tafel_Crunchy_Coconut_100g_X_12_04.webp',
    quality: 82,
  },
  {
    src: 'public/media/decor/Lindt_Hello_Tafel_Salted_Caramel_100g_X_12_04.png',
    dest: 'public/media/decor/Lindt_Hello_Tafel_Salted_Caramel_100g_X_12_04.webp',
    quality: 82,
  },

  // Candy SKUs (remaining PNG set)
  {
    src: 'public/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.png',
    dest: 'public/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Milka_Alpine_Milk_100g_X_24_02.png',
    dest: 'public/media/candy/Milka_Alpine_Milk_100g_X_24_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Kinder_Bueno_10s_215g_X_14_02.png',
    dest: 'public/media/candy/Kinder_Bueno_10s_215g_X_14_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/M_M_Peanut_Pouch_250g_X_27_01.png',
    dest: 'public/media/candy/M_M_Peanut_Pouch_250g_X_27_01.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Twix_Minis_227g_X_22_02.png',
    dest: 'public/media/candy/Twix_Minis_227g_X_22_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Celebrations_600g_04.png',
    dest: 'public/media/candy/Celebrations_600g_04.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Mars_45g_10Pack_04.png',
    dest: 'public/media/candy/Mars_45g_10Pack_04.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Snickers_5_Pack_50g_X_5_X_17_02.png',
    dest: 'public/media/candy/Snickers_5_Pack_50g_X_5_X_17_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Kit_Kat_2f_Milk_20_7g_X_9s_X_25_04.png',
    dest: 'public/media/candy/Kit_Kat_2f_Milk_20_7g_X_9s_X_25_04.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Trolli_Gummies_02.png',
    dest: 'public/media/candy/Trolli_Gummies_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Skittles_Fruits_38g_X_14_03.png',
    dest: 'public/media/candy/Skittles_Fruits_38g_X_14_03.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Merci_Chocolate_Red_250g_X_10_02.png',
    dest: 'public/media/candy/Merci_Chocolate_Red_250g_X_10_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Nutella_350g_02.png',
    dest: 'public/media/candy/Nutella_350g_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Bounty_Milk_228g_28_5g_X_2s_X_4_X_12_02.png',
    dest: 'public/media/candy/Bounty_Milk_228g_28_5g_X_2s_X_4_X_12_02.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Werthers_Candy_Original_120g_X_15_03.png',
    dest: 'public/media/candy/Werthers_Candy_Original_120g_X_15_03.webp',
    quality: 82,
  },
  {
    src: 'public/media/candy/Hanuta_Hazelnut_Wafers_10_1_242g_X_20_02.png',
    dest: 'public/media/candy/Hanuta_Hazelnut_Wafers_10_1_242g_X_20_02.webp',
    quality: 82,
  },
];

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function convertAsset({ src, dest, quality }) {
  const srcPath = join(projectRoot, src);
  const destPath = join(projectRoot, dest);

  if (!(await fileExists(srcPath))) {
    console.warn(`⚠️  Source not found: ${src}`);
    return;
  }

  if (await fileExists(destPath)) {
    console.log(`⏭️  Skipping existing WebP: ${dest}`);
    return;
  }

  await mkdir(dirname(destPath), { recursive: true });

  await sharp(srcPath).webp({ quality }).toFile(destPath);
  console.log(`✅ Converted ${src} → ${dest}`);
}

async function run() {
  for (const asset of assets) {
    try {
      await convertAsset(asset);
    } catch (error) {
      console.error(`❌ Failed to convert ${asset.src}`, error);
    }
  }
}

run();

