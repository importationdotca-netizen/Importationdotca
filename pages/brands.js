import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, webPageSchema } from '../lib/schema';

export default function Brands() {
  const brands = [
    '/media/brands/brand1.png',
    '/media/brands/brand2.png',
    '/media/brands/brand3.png',
    '/media/brands/brand4.png',
    '/media/brands/brand5.png',
    '/media/brands/brand6.png',
    '/media/brands/brand7.png',
    '/media/brands/brand8.png',
    '/media/brands/brand9.png',
    '/media/brands/brand10.png',
    '/media/brands/brand11.png',
    '/media/brands/brand12.png',
  ];

  const structuredData = [
    webPageSchema({
      name: 'ImportationDotCA Brand Partners',
      description: 'Discover the international confectionery, grocery, décor, and mobility brands represented by ImportationDotCA.',
      url: 'https://importationdot.ca/brands/',
      type: 'CollectionPage',
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://importationdot.ca/' },
      { name: 'Brand Partners', item: 'https://importationdot.ca/brands/' },
    ]),
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>Our Brands | ImportationDotCA Inc.</title>
        <meta name="description" content="Discover the trusted brands we import and distribute worldwide." />
        <link rel="canonical" href="https://importationdot.ca/brands/" />
      </Head>

      <StructuredData data={structuredData} />

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Whitelabel Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We represent and distribute products from leading international brands worldwide.
            </p>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Global Chocolate & Grocery Brands We Distribute
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {brands.map((brand, index) => (
                <div key={brand} className="flex items-center justify-center p-6 bg-slate-800 border border-white/10 hover:border-accent-500 transition-colors">
                  <div className="relative w-full h-24">
                    <Image 
                      src={brand} 
                      alt={`Brand ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want to Learn More About Our Brands?
            </h2>
            <a href="/contact">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Us
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
