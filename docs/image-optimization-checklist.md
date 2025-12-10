## Image Optimization Checklist — November 2025

This log tracks media still served as heavy PNG/JPG assets after the first optimization pass. Use it when batch-converting to WebP/AVIF or when sourcing lighter replacements.

### High Priority (Homepage + Hero feeds)
- ✅ `/media/candy/Ferrero_Rocher_T16_200g_X_20_02.webp` (converted Nov 11 2025)
- ✅ `/media/candy/Lindor_Cornet_Assorted_200g_X_12_02.webp` (converted Nov 11 2025)
- ✅ `/media/social-preview.webp` (poster fallback, Nov 11 2025) — keep JPG variant for social sharing

### Hospitality Catalogue (PNG/JPG still referenced)
- ✅ `/media/hospitality/cleaning/02-commercial-mop-bucket-janitorial-supplies.webp`
- ✅ `/media/hospitality/cleaning/05-professional-cleaning-supplies.webp`
- ✅ `/media/hospitality/cleaning/06-housekeeping-cart-maintenance-supplies.webp`
- ✅ `/media/hospitality/kitchen/05-small-kitchen-appliance-blender-grinder.webp`
- ✅ `/media/hospitality/kitchen/06-professional-blender-appliance.webp`
- ✅ `/media/hospitality/textiles/01-luxury-hotel-bedding-set-duvet-covers.webp`
- ✅ `/media/hospitality/textiles/04-professional-hotel-linens-pillowcases-sheets.webp`

### Decor & Chocolate PNGs
These assets power `/home-decor` and chocolate landing pages.
- ✅ `/media/decor/Godiva_Signature_Bars_Milk_Chocolate_90g_X_20_02.webp`
- ✅ `/media/decor/Lotus_Spread_400g_01.webp`
- ✅ `/media/decor/Ritter_Sport_Alpine_Milk_100g_X_12_03.webp`
- ✅ `/media/decor/Ritter_Sport_Marzipan_100g_X_12_04.webp`
- ✅ `/media/decor/Lindt_Hello_Tafel_Crunchy_Coconut_100g_X_12_04.webp`
- ✅ `/media/decor/Lindt_Hello_Tafel_Salted_Caramel_100g_X_12_04.webp`
- ✅ `/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.webp`
- ✅ `/media/candy/Milka_Alpine_Milk_100g_X_24_02.webp`
- ✅ `/media/candy/Kinder_Bueno_10s_215g_X_14_02.webp`
- ✅ `/media/candy/M_M_Peanut_Pouch_250g_X_27_01.webp`
- ✅ `/media/candy/Twix_Minis_227g_X_22_02.webp`
- ✅ `/media/candy/Celebrations_600g_04.webp`
- ✅ `/media/candy/Mars_45g_10Pack_04.webp`
- ✅ `/media/candy/Snickers_5_Pack_50g_X_5_X_17_02.webp`
- ✅ `/media/candy/Kit_Kat_2f_Milk_20_7g_X_9s_X_25_04.webp`
- ✅ `/media/candy/Trolli_Gummies_02.webp`
- ✅ `/media/candy/Skittles_Fruits_38g_X_14_03.webp`
- ✅ `/media/candy/Merci_Chocolate_Red_250g_X_10_02.webp`
- ✅ `/media/candy/Nutella_350g_02.webp`
- ✅ `/media/candy/Bounty_Milk_228g_28_5g_X_2s_X_4_X_12_02.webp`
- ✅ `/media/candy/Werthers_Candy_Original_120g_X_15_03.webp`
- ✅ `/media/candy/Hanuta_Hazelnut_Wafers_10_1_242g_X_20_02.webp`

Remaining PNG backlog: none in the candy catalog; keep PNG originals for archival/print use only.

### Next Steps
1. Batch convert the above PNG/JPG files to WebP (retain originals for print collateral).
2. Update the import pages to reference the new WebP variants, keeping descriptive alt text.
3. Re-run `npm run build` and Lighthouse to confirm LCP/CLS improvements.

