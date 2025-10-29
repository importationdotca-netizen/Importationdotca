import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  return (
    <>
      <Head>
        <title>Our Brands | ImportationDotCA Inc.</title>
        <meta name="description" content="Discover the trusted brands we import and distribute across Canada and USA." />
        <link rel="canonical" href="https://importationdot.ca/brands/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Whitelabel Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We represent and distribute products from leading international brands across North America.
            </p>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-slate-800 border border-white/10 hover:border-accent-500 transition-colors">
                  <img 
                    src={brand} 
                    alt={`Brand ${index + 1}`}
                    className="max-w-full max-h-32 object-contain"
                  />
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
