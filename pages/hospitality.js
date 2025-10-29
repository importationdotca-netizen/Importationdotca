import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GallerySwiper from '../components/GallerySwiper';

export default function Hospitality() {
  const cleaningImages = [
    { src: '/media/hospitality/cleaning/01-professional-cleaning-products-commercial.webp', alt: 'Professional Cleaning Products' },
    { src: '/media/hospitality/cleaning/02-commercial-mop-bucket-janitorial-supplies.jpg', alt: 'Commercial Mop Bucket' },
    { src: '/media/hospitality/cleaning/03-building-maintenance-toolkit-equipment.jpeg', alt: 'Building Maintenance Toolkit' },
    { src: '/media/hospitality/cleaning/04-hospitality-cleaning-solutions-chemicals.webp', alt: 'Hospitality Cleaning Chemicals' },
    { src: '/media/hospitality/cleaning/05-professional-cleaning-supplies.jpg', alt: 'Professional Cleaning Supplies' },
    { src: '/media/hospitality/cleaning/06-housekeeping-cart-maintenance-supplies.jpg', alt: 'Housekeeping Cart' },
  ];

  const kitchenImages = [
    { src: '/media/hospitality/kitchen/01-professional-stainless-steel-cookware-set.avif', alt: 'Stainless Steel Cookware' },
    { src: '/media/hospitality/kitchen/02-professional-cookware-pots-pans.jpeg', alt: 'Professional Cookware Set' },
    { src: '/media/hospitality/kitchen/03-professional-cutlery-silverware-set.webp', alt: 'Professional Cutlery Set' },
    { src: '/media/hospitality/kitchen/04-commercial-blender-coffee-maker-appliance.avif', alt: 'Commercial Blender & Coffee Maker' },
    { src: '/media/hospitality/kitchen/05-small-kitchen-appliance-blender-grinder.jpg', alt: 'Blender Grinder Appliance' },
    { src: '/media/hospitality/kitchen/06-professional-blender-appliance.jpg', alt: 'Professional Blender' },
  ];

  const lightingImages = [
    { src: '/media/hospitality/lighting/01-modern-nordic-table-desk-lamp.webp', alt: 'Nordic Table Desk Lamp' },
    { src: '/media/hospitality/lighting/02-modern-tripod-floor-standing-lamp.webp', alt: 'Tripod Floor Lamp' },
    { src: '/media/hospitality/lighting/03-modern-led-chandelier-ceiling-fixture.webp', alt: 'Modern LED Chandelier' },
    { src: '/media/hospitality/lighting/04-decorative-ambient-mood-lighting.webp', alt: 'Ambient Mood Lighting' },
    { src: '/media/hospitality/lighting/05-poldina-table-lamp-indoor-outdoor.webp', alt: 'Poldina Table Lamp' },
    { src: '/media/hospitality/lighting/06-hotel-lobby-pendant-lamp-chandelier.avif', alt: 'Hotel Lobby Chandelier' },
  ];

  const textilesImages = [
    { src: '/media/hospitality/textiles/01-luxury-hotel-bedding-set-duvet-covers.jpg', alt: 'Luxury Hotel Bedding Set' },
    { src: '/media/hospitality/textiles/02-premium-white-bedsheets-hotel-quality.webp', alt: 'Premium White Bedsheets' },
    { src: '/media/hospitality/textiles/03-luxury-turkish-towel-set-bath-hand-washcloths.jpeg', alt: 'Luxury Turkish Towel Set' },
    { src: '/media/hospitality/textiles/04-professional-hotel-linens-pillowcases-sheets.jpg', alt: 'Professional Hotel Linens' },
    { src: '/media/hospitality/textiles/05-luxury-bedding-sets-duvet-covers.avif', alt: 'Luxury Bedding Sets' },
    { src: '/media/hospitality/textiles/06-crisp-white-bedsheets-full-bed.webp', alt: 'Crisp White Bedsheets' },
  ];

  return (
    <>
      <Head>
        <title>Hospitality Products | ImportationDotCA Inc.</title>
        <meta name="description" content="Browse our wholesale hospitality products including cleaning supplies, kitchen equipment, lighting, and textiles." />
        <link rel="canonical" href="https://importationdot.ca/hospitality/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hospitality Products
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional wholesale hospitality products for hotels, restaurants, and commercial facilities.
            </p>
          </div>
        </section>

        {/* Cleaning Section with Description */}
        <section className="w-full section-padding bg-slate-900">
          <div classNameواء="section-container mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Cleaning & Maintenance Supplies
            </h2>
            <p className="text-lg text-gray-400 max-w elke xl mx-auto text-center leading-relaxed">
              Professional-grade cleaning and maintenance supplies designed for hotel housekeeping, commercial facilities, 
              and large-scale property management. Our products include industrial cleaning chemicals, janitorial equipment, 
              housekeeping carts, and maintenance toolkits that meet hospitality industry standards for hygiene and durability.
            </p>
          </div>
        </section>
        <GallerySwiper title="Cleaning & Maintenance" images={cleaningImages} swiperId="cleaning" />

        {/* Kitchen Section with Description */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Kitchen Equipment & Supplies
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
              Commercial-grade kitchen equipment including professional stainless steel cookware, cutlery sets, and 
              commercial-grade appliances. Perfect for restaurant kitchens, hotel dining facilities, and large catering operations. 
              All products meet industry standards for durability, hygiene, and performance.
            </p>
          </div>
        </section>
        <GallerySwiper title="Kitchen Equipment" images={kitchenImages} swiperId="kitchen" />

        {/* Lighting Section with Description */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Lighting Fixtures
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
              Modern and stylish lighting solutions for hospitality spaces including LED chandeliers, modern table lamps, 
              tripod floor lamps, and ambient mood lighting. Ideal for hotel lobbies, restaurants, guest rooms, and common areas. 
              Our lighting fixtures combine elegant design with energy-efficient LED technology.
            </p>
          </div>
        </section>
        <GallerySwiper title="Lighting Fixtures" images={lightingImages} swiperId="lighting" />

        {/* Textiles Section with Description */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Textiles & Linens
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
              Luxurious hotel-quality bedding sets, premium white bedsheets, Turkish towel collections, and professional hotel linens. 
              Available in bulk quantities for hotels, bed and breakfasts, and hospitality properties. All textiles are 
              durable, easy-care, and meet hospitality industry standards for comfort and longevity.
            </p>
          </div>
        </section>
        <GallerySwiper title="Textiles & Linens" images={textilesImages} swiperId="textiles" />

        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Wholesale Hospitality Products?
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
