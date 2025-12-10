import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GallerySwiper from '../components/GallerySwiper';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, faqSchema, productSchema, serviceSchema, webPageSchema } from '../lib/schema';

export default function LuxuryChocolateImports() {
  const chocolateShowcase = [
    { src: '/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.webp', alt: 'Cadbury Dairy Milk bulk chocolate bars' },
    { src: '/media/candy/Milka_Alpine_Milk_100g_X_24_02.webp', alt: 'Milka Alpine Milk chocolate tablets' },
    { src: '/media/candy/Kinder_Bueno_10s_215g_X_14_02.webp', alt: 'Kinder Bueno hazelnut bars multiples' },
    { src: '/media/candy/M_M_Peanut_Pouch_250g_X_27_01.webp', alt: 'M&M peanut sharing pouches for retail' },
    { src: '/media/candy/Twix_Minis_227g_X_22_02.webp', alt: 'Twix minis display ready bags' },
    { src: '/media/candy/Celebrations_600g_04.webp', alt: 'Celebrations assorted chocolates tin' },
  ];

  const keySegments = [
    {
      title: 'Duty-Paid European Imports',
      description:
        'We source directly from certified manufacturers in Belgium, Switzerland, Germany, Italy, and the United Kingdom, handling all customs paperwork and CFIA compliance so you receive ready-to-stock inventory.',
    },
    {
      title: 'Shelf-Ready Formats',
      description:
        'Order shippers, display-ready cases, and seasonal gift packaging tailored to grocery, specialty retail, airport duty-free, and hospitality gifting programs.',
    },
    {
      title: 'Flexible Volumes',
      description:
        'Consolidate mixed pallets, replenish high-velocity SKUs weekly, or arrange FCL/LCL containers with end-to-end temperature-controlled logistics.',
    },
  ];

  const brandHighlights = [
    'Ferrero Rocher, Raffaello, Kinder, and Nutella collections',
    'Lindt & Sprüngli, Lindor, and Excellence tablets',
    'Cadbury, Milka, Toblerone, and Nestlé global favorites',
    'Mars, Snickers, Twix, Celebrations, and Maltesers assortments',
    'Premium gifting: Godiva, Merci, and Ritter Sport prestige lines',
  ];

  const serviceHighlights = [
    'Regulatory-compliant bilingual labeling, GS1 barcodes, and nutrition facts',
    'Temperature-controlled warehousing and cross-border distribution',
    'Retail planogram support, seasonal allocations, and promo calendars',
    'Dedicated account management with weekly availability reports',
  ];

  const chocolateFaqs = [
    {
      question: 'What types of chocolates and flavours are available?',
      answer:
        'We import a wide range of premium European chocolates including Ferrero Rocher, Lindt, Cadbury, Milka, Toblerone, Kinder, Mars, Snickers, and many more. Available in various flavours, sizes, and packaging formats including bulk shippers, display-ready cases, and seasonal gift packaging.',
    },
    {
      question: 'Do you ship worldwide?',
      answer:
        'Yes, we ship globally from Hawkesbury, ON, Canada. We serve clients across North America, Europe, Asia, Africa, and South America with reliable international logistics.',
    },
    {
      question: 'Which countries do you not ship to?',
      answer:
        'We do not ship to North Korea, Iran, or the Palestinian Territories due to international regulations. All other regions are fully supported.',
    },
    {
      question: 'What are your minimum order quantities?',
      answer:
        'We offer flexible volume options from mixed pallets to full container loads (FCL). Minimum orders vary by product and brand. Contact us with your requirements and we will provide customized pricing based on your volume needs.',
    },
    {
      question: 'Do you ship to remote locations in Canada?',
      answer:
        'Yes, we ship throughout Canada including remote locations. We coordinate with trusted carriers to ensure reliable delivery to your warehouse or distribution center. Shipping costs and timelines vary by location and will be included in your quote.',
    },
    {
      question: 'How long does international delivery take?',
      answer:
        'Delivery times vary by region. Typically 2-4 weeks from order confirmation, depending on product availability, shipping method, and destination. Contact us for estimated timelines specific to your location.',
    },
    {
      question: 'What is your delivery timeframe?',
      answer:
        'Delivery typically takes 2-4 weeks from order confirmation, depending on product availability, shipping method, and destination. We provide tracking information and keep you updated throughout the shipping process. Seasonal items may require advance ordering.',
    },
    {
      question: 'Do you offer temperature-controlled shipping?',
      answer:
        'Yes, we provide temperature-controlled warehousing and shipping for chocolate products to ensure quality and freshness. Our logistics network includes climate-controlled facilities and refrigerated transport options for sensitive confectionery items.',
    },
    {
      question: 'Can I request custom packaging or private labeling?',
      answer:
        'Custom packaging and private labeling options are available for bulk orders. Contact us to discuss your specific requirements, minimum quantities, and timeline for custom packaging solutions.',
    },
    {
      question: 'Are the products compliant with Canadian regulations?',
      answer:
        'Yes, all products meet Canadian Food Inspection Agency (CFIA) requirements. We handle bilingual labeling, nutrition facts, GS1 barcodes, and all regulatory compliance documentation. Products arrive duty-paid and ready for retail.',
    },
  ];

  const structuredData = [
    webPageSchema({
      name: 'Luxury Chocolate Wholesale Imports | Premium European Confectionery',
      description:
        'Premium imported chocolates delivered efficiently and safely. Wholesale European confectionery for retailers, hospitality, and duty-free partners worldwide. Based in Hawkesbury, ON.',
      url: 'https://importationdot.ca/luxury-chocolate-imports/',
      primaryImage: 'https://importationdot.ca/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.webp',
      type: 'CollectionPage',
    }),
    productSchema({
      name: 'Imported Luxury Chocolate',
      description:
        'Premium imported chocolates from European brands including Ferrero Rocher, Lindt, Cadbury, Milka, Toblerone, and more. Wholesale and retail shipments across Canada with regulatory compliance and bilingual labeling.',
      image: 'https://importationdot.ca/media/candy/Cadbury_Dairy_Milk_180g_X_16_02.webp',
      category: 'Confectionery',
      url: 'https://importationdot.ca/luxury-chocolate-imports/',
      offers: {
        '@type': 'Offer',
        url: 'https://importationdot.ca/luxury-chocolate-imports/',
        priceCurrency: 'CAD',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          priceCurrency: 'CAD',
        },
      },
    }),
    serviceSchema({
      name: 'Luxury Chocolate Wholesale Import & Distribution',
      description:
        'ImportationDotCA sources and distributes premium European chocolates and confectionery for retailers, hospitality, and duty-free partners worldwide with regulatory compliance and temperature-controlled logistics.',
      url: 'https://importationdot.ca/luxury-chocolate-imports/',
      serviceType: 'Chocolate import and distribution',
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://importationdot.ca/' },
      { name: 'Luxury Chocolate Imports', item: 'https://importationdot.ca/luxury-chocolate-imports/' },
    ]),
    faqSchema(chocolateFaqs),
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>Luxury Chocolate Wholesale Imports | Premium European Confectionery</title>
        <meta
          name="description"
          content="Premium imported chocolates delivered efficiently and safely. Wholesale European confectionery for retailers, hospitality, and duty-free partners worldwide. Based in Hawkesbury, ON – request your quote today!"
        />
        <link rel="canonical" href="https://importationdot.ca/luxury-chocolate-imports/" />
        <meta property="og:title" content="Luxury Chocolate Imports Canada | Premium European Confectionery" />
        <meta property="og:description" content="Premium imported chocolates from European brands. Wholesale and retail shipments across Canada." />
      </Head>

      <StructuredData data={structuredData} />

      <Header />

      <main className="min-h-screen bg-slate-950">
        <section className="w-full section-padding bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="section-container text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-accent-500/10 text-accent-300 uppercase tracking-widest text-xs font-semibold mb-6">
              Premium Confectionery Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Luxury Chocolate Wholesale Imports
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Premium imported chocolates delivered efficiently and safely. Wholesale European confectionery for retailers, hospitality, and duty-free partners worldwide.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              ImportationDotCA curates a turnkey catalogue of European pralines, truffles, gifting tins, and seasonal confectionery
              for supermarkets, specialty retailers, corporate gifting, and hospitality amenities. We consolidate direct-from-factory stock,
              manage logistics, and deliver duty-paid pallets ready for your shelves.
            </p>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-950">
          <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
            {keySegments.map((segment) => (
              <div key={segment.title} className="p-6 border border-white/10 rounded-xl bg-slate-900/60">
                <h2 className="text-2xl font-semibold text-white mb-3">{segment.title}</h2>
                <p className="text-gray-400 leading-relaxed">{segment.description}</p>
              </div>
            ))}
          </div>
        </section>

        <GallerySwiper title="European Chocolate Portfolio" images={chocolateShowcase} swiperId="luxury-chocolate" />

        {/* Why Choose Us Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose ImportationDotCA for Chocolate Imports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Direct Factory Sourcing</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We source directly from certified European manufacturers, ensuring authentic products and competitive pricing.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All products meet CFIA requirements with bilingual labeling, nutrition facts, and proper documentation handled for you.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Temperature Control</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Climate-controlled warehousing and shipping ensure product quality and freshness from factory to your shelves.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Flexible Volumes</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  From mixed pallets to full container loads, we accommodate orders of all sizes with competitive wholesale pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              How Our Chocolate Import Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Request Quote</h3>
                <p className="text-gray-400 text-sm">Share your product requirements, quantities, and timeline. We provide transparent pricing and availability.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Order Confirmation</h3>
                <p className="text-gray-400 text-sm">Once approved, we confirm inventory, reserve production slots, and coordinate factory releases.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Shipping & Logistics</h3>
                <p className="text-gray-400 text-sm">We handle customs clearance, temperature-controlled shipping, and provide real-time tracking.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Delivery</h3>
                <p className="text-gray-400 text-sm">Products arrive duty-paid, shelf-ready, and compliant. Ready for immediate retail or distribution.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Global Brands Your Customers Expect</h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                {brandHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Wholesale Program Advantages</h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                {serviceHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Shipping & Logistics Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Shipping & Logistics Details
            </h2>
            <div className="bg-slate-800/60 border border-white/10 rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                ImportationDotCA manages the complete logistics chain for your chocolate imports:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Temperature-controlled shipping</strong> from European factories to your warehouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Customs clearance</strong> and duty payment handled on your behalf</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Real-time tracking</strong> throughout the shipping process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Flexible shipping options</strong> including air freight, sea freight, and express delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Delivery to your warehouse</strong> or distribution center, ready for immediate use</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-6">
                Based in Hawkesbury, ON, Canada – serving clients worldwide. We ship to Canada, USA, EU, UK, Israel, Australia, Japan, South Korea, India, Mexico, and throughout South America and Africa.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {chocolateFaqs.map((faq) => (
                <div key={faq.question} className="bg-slate-900/60 border border-white/10 rounded-xl p-6 shadow-lg shadow-black/20 hover:border-accent-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Plan Your Next Seasonal Buy</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Share your allocation targets, preferred brands, and in-store timelines. Our team will reserve production slots,
              coordinate factory releases, and deliver a tailored assortment that aligns with your promotional calendar.
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              <strong className="text-white">ImportationDotCA Inc.</strong> is based in Hawkesbury, Ontario, Canada, 
              specializing in luxury chocolate imports and wholesale distribution. Contact us at{' '}
              <a href="mailto:info@importationdot.ca" className="text-accent-500 hover:text-accent-400">info@importationdot.ca</a> or{' '}
              <a href="/contact" className="text-accent-500 hover:text-accent-400">visit our contact page</a> for pricing and availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact">
                <button className="btn-primary text-lg px-8 py-4">
                  Request a Quote
                </button>
              </a>
              <a href="mailto:info@importationdot.ca" className="text-accent-500 hover:text-accent-400 font-semibold">
                Email us for immediate assistance
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto">
              Looking for other import services? Check out our <a href="/wholesale-unlocked-phones" className="text-accent-500 hover:text-accent-400">wholesale phones</a> and <a href="/hospitality" className="text-accent-500 hover:text-accent-400">hospitality supplies</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

