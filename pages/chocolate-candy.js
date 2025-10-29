import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GallerySwiper from '../components/GallerySwiper';

export default function ChocolateCandy() {
  const candyImages = [
    { src: '/media/candy/Ferrero_Rocher_T16_200g_X_20_02.png', alt: 'Ferrero Rocher Chocolate' },
    { src: '/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.png', alt: 'Cadbury Dairy Milk' },
    { src: '/media/candy/Lindor_Cornet_Assorted_200g_X_12_02.png', alt: 'Lindor Assorted Chocolate' },
    { src: '/media/candy/Kinder_Bueno_10s_215g_X_14_02.png', alt: 'Kinder Bueno' },
    { src: '/media/candy/Kit_Kat_2f_Milk_20_7g_X_9s_X_25_04.png', alt: 'Kit Kat' },
    { src: '/media/candy/Milka_Alpine_Milk_100g_X_24_02.png', alt: 'Milka Alpine Milk' },
    { src: '/media/candy/Mars_45g_10Pack_04.png', alt: 'Mars Chocolate' },
    { src: '/media/candy/Snickers_5_Pack_50g_X_5_X_17_02.png', alt: 'Snickers Chocolate' },
    { src: '/media/candy/Twix_Minis_227g_X_22_02.png', alt: 'Twix Chocolate' },
    { src: '/media/candy/Celebrations_600g_04.png', alt: 'Celebrations Chocolate' },
    { src: '/media/candy/M_M_Peanut_Pouch_250g_X_27_01.png', alt: 'M&M Peanut Pouch' },
    { src: '/media/candy/Trolli_Gummies_02.png', alt: 'Trolli Gummies' },
  ];

  return (
    <>
      <Head>
        <title>Chocolate & Candy | ImportationDotCA Inc.</title>
        <meta name="description" content="Browse our wholesale chocolate and candy collection." />
        <link rel="canonical" href="https://importationdot.ca/chocolate-candy/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chocolate & Candy Collection
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                Explore our premium wholesale confectionery selection, featuring high-quality chocolates and candies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                ImportationDotCA specializes in importing premium chocolates and confectionery from renowned European and international brands. 
                Our extensive collection includes exclusive products from Ferrero, Cadbury, Lindt, Kinder, Kit Kat, Milka, Mars, Toblerone, and other 
                prestigious manufacturers. We source directly from authorized suppliers, ensuring authenticity and maintaining the highest quality standards 
                for wholesale distribution.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                All products are imported in bulk quantities suitable for retail distribution, convenience stores, specialty shops, and hospitality businesses. 
                We offer competitive wholesale pricing, flexible order quantities, and reliable delivery across Canada and the United States. Our experienced team 
                handles all customs documentation, labeling compliance, and logistics to ensure seamless importation and timely delivery to your business.
              </p>
            </div>
          </div>
        </section>

        <GallerySwiper title="Featured Products" images={candyImages} swiperId="candy" />

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
