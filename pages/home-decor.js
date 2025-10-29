import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GallerySwiper from '../components/GallerySwiper';

export default function HomeDecor() {
  const decorImages = [
    { src: '/media/decor/Godiva_Signature_Bars_Milk_Chocolate_90g_X_20_02.png', alt: 'Godiva Chocolate' },
    { src: '/media/decor/Lotus_Spread_400g_01.png', alt: 'Lotus Spread' },
    { src: '/media/decor/Ritter_Sport_Alpine_Milk_100g_X_12_03.png', alt: 'Ritter Sport Alpine Milk' },
    { src: '/media/decor/Ritter_Sport_Marzipan_100g_X_12_04.png', alt: 'Ritter Sport Marzipan' },
    { src: '/media/decor/Lindt_Hello_Tafel_Crunchy_Coconut_100g_X_12_04.png', alt: 'Lindt Hello Tafel' },
    { src: '/media/decor/Lindt_Hello_Tafel_Salted_Caramel_100g_X_12_04.png', alt: 'Lindt Salted Caramel' },
  ];

  return (
    <>
      <Head>
        <title>Home Décor | ImportationDotCA Inc.</title>
        <meta name="description" content="Browse our wholesale home décor collection." />
        <link rel="canonical" href="https://importationdot.ca/home-decor/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Home Décor Collection
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover our exclusive wholesale home décor collection, featuring premium quality products sourced from leading international brands.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                ImportationDotCA offers a carefully curated selection of gourmet home décor products perfect for retail stores, specialty shops, 
                and gift stores. Our collection includes premium Belgian and European chocolates like Godiva signature bars, Lotus spread products, 
                Ritter Sport varieties, and Lindt specialty items. Each product is sourced from authentic manufacturers, ensuring exceptional quality 
                and authentic taste that customers trust.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                All items are available for wholesale purchase in various case quantities, suitable for both small retail operations and large 
                distribution networks. We handle all import logistics, customs clearance, and bilingual labeling compliance to ensure hassle-free 
                delivery to your business. Our competitive wholesale pricing makes it easy for you to maintain healthy profit margins while offering 
                customers premium quality products.
              </p>
            </div>
          </div>
        </section>

        <GallerySwiper title="Featured Products" images={decorImages} swiperId="decor" />

        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Wholesale Orders?
            </h2>
            <a href="/contact">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Us for Pricing
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
