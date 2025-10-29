import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import GallerySwiper from '../components/GallerySwiper';

export default function Home() {
  // Featured products from organized folders
  const candyImages = [
    { src: '/media/candy/Ferrero_Rocher_T16_200g_X_20_02.png', alt: 'Ferrero Rocher Chocolate' },
    { src: '/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.png', alt: 'Cadbury Dairy Milk' },
    { src: '/media/candy/Lindor_Cornet_Assorted_200g_X_12_02.png', alt: 'Lindor Assorted Chocolate' },
    { src: '/media/candy/Kinder_Bueno_10s_215g_X_14_02.png', alt: 'Kinder Bueno' },
    { src: '/media/candy/Kit_Kat_2f_Milk_20_7g_X_9s_X_25_04.png', alt: 'Kit Kat' },
    { src: '/media/candy/Milka_Alpine_Milk_100g_X_24_02.png', alt: 'Milka Alpine Milk' },
  ];

  // Brand logos
  const brands = [
    { name: 'Pringles', file: 'brand1.png' },
    { name: 'Mars', file: 'brand2.png' },
    { name: 'evian', file: 'brand3.png' },
    { name: 'Nestlé', file: 'brand4.png' },
    { name: 'P&G', file: 'brand5.png' },
    { name: 'Nescafé', file: 'brand6.png' },
    { name: 'Ferrero', file: 'brand7.png' },
    { name: 'Lotus', file: 'brand8.png' },
    { name: 'Toblerone', file: 'brand9.png' },
    { name: "Kellogg's", file: 'brand10.png' },
    { name: 'Unilever', file: 'brand11.png' },
    { name: 'Red Bull', file: 'brand12.png' },
  ];

  return (
    <>
      <Head>
        <title>ImportationDotCA Inc. | Wholesale Decor & Confectionery Importers</title>
        <meta name="description" content="Professional import/export of décor, confectionery, and hospitality goods — serving Canada & USA." />
        <link rel="canonical" href="https://importationdot.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ImportationDotCA Inc. | Wholesale Importers" />
        <meta property="og:description" content="Professional import/export of décor, confectionery, and hospitality goods — serving Canada & USA." />
        <meta property="og:image" content="/media/social-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Schema JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ImportationDotCA Inc.",
        "url": "https://importationdot.ca",
        "logo": "https://importationdot.ca/media/logo.png",
        "contactPoint": [{
          "@type": "ContactPoint",
          "email": "info@importationdot.ca",
          "contactType": "customer service"
        }]
      })}} />

      <Header />
      
      <main>
        <Hero />

        {/* About Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Welcome to ImportationDotCA
            </h2>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are a leading wholesale import and distribution company serving businesses across Canada and the United States. 
              With extensive expertise in international trade, we specialize in sourcing premium décor, confectionery, and hospitality goods 
              from trusted suppliers worldwide. Our commitment to quality, competitive pricing, and reliable service has made us a preferred 
              partner for retailers, restaurants, and businesses seeking high-quality imported products.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Chocolate & Candy</h3>
                <p className="text-gray-400">
                  Premium imported chocolates and confectionery from European and international brands, 
                  delivered in bulk quantities for retailers and distributors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Home Décor</h3>
                <p className="text-gray-400">
                  Curated selection of stylish home décor items including premium chocolates, gourmet spreads, 
                  and quality decorative products sourced from renowned international suppliers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Hospitality Products</h3>
                <p className="text-gray-400">
                  Comprehensive range of professional hospitality supplies including kitchen equipment, lighting fixtures, 
                  textiles, and cleaning supplies for hotels and commercial facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Wholesale Import</h3>
                <p className="text-gray-400">Professional import/export services for businesses across Canada and USA.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Product Distribution</h3>
                <p className="text-gray-400">Efficient distribution network for décor, confectionery, and hospitality goods.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
                <p className="text-gray-400">Tailored import solutions to meet your specific business needs.</p>
              </div>
            </div>
          </div>
        </section>

        <GallerySwiper title="Featured Products - Chocolate & Candy" images={candyImages} swiperId="candy" />

        {/* Brands Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Trusted International Brands
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-slate-800 border border-white/10 hover:border-accent-500 transition-colors">
                  <img 
                    src={`/media/brands/${brand.file}`} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-16 object-contain grayscale hover:grayscale-0 transition-all"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center mt-6">
              Logos are trademarks of their respective owners; shown only with permission.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a quote on wholesale imports
            </p>
            <a href="/contact">
              <button className="btn-primary text-lg px-8 py-4">
                Get Your Quote
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
