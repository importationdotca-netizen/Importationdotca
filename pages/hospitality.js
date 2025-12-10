import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../lib/schema';

export default function Hospitality() {
  const hospitalityFaqs = [
    {
      question: 'What types of hospitality products do you import?',
      answer:
        'We import a comprehensive range of hospitality supplies including professional cleaning chemicals and janitorial equipment, commercial kitchen equipment and cookware, lighting fixtures for hotels and restaurants, and premium textiles and linens. All products meet hospitality industry standards for quality and durability.',
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
        'Minimum order quantities vary by product category and item. We work with hotels, restaurants, and commercial facilities of all sizes. Contact us with your requirements and we will provide customized pricing based on your volume needs and product specifications.',
    },
    {
      question: 'Do you ship to remote locations in Canada?',
      answer:
        'Yes, we ship throughout Canada including remote locations. We coordinate with trusted carriers to ensure reliable delivery to your facility or warehouse. Shipping costs and timelines vary by location and will be included in your quote.',
    },
    {
      question: 'How long does international delivery take?',
      answer:
        'Delivery times vary by region. Typically 2-4 weeks from order confirmation, depending on product availability, shipping method, and destination. Contact us for estimated timelines specific to your location.',
    },
    {
      question: 'What is your delivery timeframe?',
      answer:
        'Delivery typically takes 2-4 weeks from order confirmation, depending on product availability, shipping method, and destination. We provide tracking information and keep you updated throughout the shipping process. Rush orders may be available for urgent needs.',
    },
    {
      question: 'Are the products compliant with Canadian regulations?',
      answer:
        'Yes, all products meet Canadian regulatory standards including health and safety requirements. Cleaning chemicals meet Health Canada standards, kitchen equipment meets commercial safety standards, and textiles meet hospitality industry specifications. We handle all compliance documentation.',
    },
  ];

  const structuredData = [
    webPageSchema({
      name: 'Hospitality Supplies & Direct Import Solutions | Wholesale Hotel Products',
      description:
        'Professional hospitality supplies delivered efficiently and safely. Direct import solutions for hotels, restaurants, and commercial facilities worldwide. Based in Hawkesbury, ON.',
      url: 'https://importationdot.ca/hospitality/',
      primaryImage: 'https://importationdot.ca/media/hospitality/lighting/01-modern-nordic-table-desk-lamp.webp',
      type: 'CollectionPage',
    }),
    serviceSchema({
      name: 'Hospitality Supplies & Direct Import Solutions',
      description:
        'ImportationDotCA sources and distributes hospitality essentials including cleaning chemicals, kitchen equipment, textiles, and lighting solutions for hotels, restaurants, and commercial facilities worldwide.',
      url: 'https://importationdot.ca/hospitality/',
      serviceType: 'Hospitality supply distribution',
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://importationdot.ca/' },
      { name: 'Hospitality Products', item: 'https://importationdot.ca/hospitality/' },
    ]),
    faqSchema(hospitalityFaqs),
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>Hospitality Supplies & Direct Import Solutions | Wholesale Hotel Products</title>
        <meta name="description" content="Professional hospitality supplies delivered efficiently and safely. Direct import solutions for hotels, restaurants, and commercial facilities worldwide. Based in Hawkesbury, ON – request your quote today!" />
        <link rel="canonical" href="https://importationdot.ca/hospitality/" />
        <meta property="og:title" content="Hospitality Supplies Import Canada | Wholesale Hotel Products" />
        <meta property="og:description" content="Wholesale hospitality supplies in Canada. Professional cleaning products, kitchen equipment, lighting fixtures, and textiles for hotels and restaurants." />
      </Head>

      <StructuredData data={structuredData} />

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hospitality Supplies & Direct Import Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Professional hospitality supplies delivered efficiently and safely. Direct import solutions for hotels, restaurants, and commercial facilities worldwide.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              ImportationDotCA provides comprehensive wholesale hospitality supplies including professional cleaning products, commercial kitchen equipment, lighting fixtures, and premium textiles. All products meet hospitality industry standards for quality, durability, and compliance.
            </p>
          </div>
        </section>

        {/* Cleaning Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Cleaning & Maintenance Supplies
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Professional-grade cleaning and maintenance supplies designed for hotel housekeeping, commercial facilities, 
                and large-scale property management. Our comprehensive product range includes industrial cleaning chemicals, 
                janitorial equipment, housekeeping carts, and maintenance toolkits that meet hospitality industry standards 
                for hygiene and durability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Industrial Cleaning Chemicals</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Professional-grade cleaning solutions for all hospitality surfaces, including floor cleaners, 
                    disinfectants, glass cleaners, and specialized sanitizers that meet health and safety regulations.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Janitorial Equipment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Complete range of cleaning tools including mops, buckets, vacuum cleaners, floor scrubbers, 
                    and maintenance carts designed for efficient hotel housekeeping operations.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Housekeeping Carts</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Professional housekeeping carts with multiple compartments for organized storage of cleaning supplies, 
                    linens, and amenities for efficient room service operations.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Maintenance Toolkits</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive maintenance toolkits for property upkeep, including basic repair tools, 
                    replacement parts, and equipment necessary for ongoing facility maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Kitchen Equipment & Supplies
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Commercial-grade kitchen equipment including professional stainless steel cookware, cutlery sets, and 
                commercial-grade appliances. Perfect for restaurant kitchens, hotel dining facilities, and large catering operations. 
                All products meet industry standards for durability, hygiene, and performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Professional Cookware</h3>
                  <p className="text-gray-300 leading-relaxed">
                    High-quality stainless steel cookware sets, pots, pans, and professional-grade kitchen tools 
                    designed for commercial kitchens and high-volume food service operations.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Cutlery & Silverware</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Professional cutlery sets and silverware collections suitable for restaurant dining rooms, 
                    hotel restaurants, and banquet facilities with elegant designs and durable construction.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Commercial Appliances</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Commercial-grade blenders, coffee makers, food processors, and other kitchen appliances 
                    built for heavy-duty use in professional hospitality environments.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Kitchen Accessories</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Essential kitchen accessories including storage containers, prep tools, serving equipment, 
                    and organizational solutions for efficient kitchen operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lighting Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Lighting Fixtures
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Modern and stylish lighting solutions for hospitality spaces including LED chandeliers, modern table lamps, 
                tripod floor lamps, and ambient mood lighting. Ideal for hotel lobbies, restaurants, guest rooms, and common areas. 
                Our lighting fixtures combine elegant design with energy-efficient LED technology.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">LED Chandeliers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Elegant LED chandeliers and pendant lighting fixtures perfect for hotel lobbies, 
                    restaurant dining areas, and grand entrance spaces with energy-efficient LED technology.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Table & Desk Lamps</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Modern table lamps and desk lighting solutions for guest rooms, reception areas, 
                    and workspaces with contemporary designs and adjustable brightness features.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Ambient Mood Lighting</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Decorative ambient lighting solutions including wall sconces, accent lights, 
                    and mood lighting fixtures that create welcoming atmospheres in hospitality spaces.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Outdoor & Pathway Lighting</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Weather-resistant outdoor lighting fixtures for hotel exteriors, pathways, 
                    patios, and outdoor dining areas with durable construction and energy efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose ImportationDotCA for Hospitality Supplies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Industry Standards</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All products meet hospitality industry standards for quality, durability, and compliance with health and safety regulations.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Bulk Pricing</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Competitive wholesale pricing for hotels, restaurants, and commercial facilities with flexible volume options.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Complete Solutions</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  One-stop sourcing for all hospitality needs from cleaning supplies to kitchen equipment, lighting, and textiles.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Reliable Delivery</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Timely delivery with real-time tracking. Products arrive ready for immediate use in your facility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              How Our Hospitality Import Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Request Quote</h3>
                <p className="text-gray-400 text-sm">Share your product requirements and quantities. We provide transparent pricing and availability.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Order Confirmation</h3>
                <p className="text-gray-400 text-sm">Once approved, we confirm inventory, coordinate sourcing, and prepare your order for shipping.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Shipping & Logistics</h3>
                <p className="text-gray-400 text-sm">We handle customs clearance, documentation, and coordinate shipping with trusted carriers.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Delivery</h3>
                <p className="text-gray-400 text-sm">Products arrive at your facility ready for immediate use. Track your shipment in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Hotels & Resorts</h3>
                <p className="text-gray-300 text-sm">
                  Complete supply solutions for hotels, resorts, and accommodation facilities including guest room amenities, housekeeping supplies, and facility maintenance products.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Restaurants & Cafes</h3>
                <p className="text-gray-300 text-sm">
                  Commercial kitchen equipment, cookware, cutlery, and dining supplies for restaurants, cafes, and food service establishments.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Event Venues</h3>
                <p className="text-gray-300 text-sm">
                  Lighting fixtures, textiles, and equipment for banquet halls, event spaces, and conference facilities.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Commercial Facilities</h3>
                <p className="text-gray-300 text-sm">
                  Professional cleaning supplies, maintenance equipment, and facility management products for office buildings and commercial properties.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Healthcare Facilities</h3>
                <p className="text-gray-300 text-sm">
                  Specialized cleaning chemicals, textiles, and maintenance supplies meeting healthcare industry standards and regulations.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Educational Institutions</h3>
                <p className="text-gray-300 text-sm">
                  Hospitality supplies for schools, universities, and educational facilities including dining services and facility maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Textiles Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Textiles & Linens
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Luxurious hotel-quality bedding sets, premium white bedsheets, Turkish towel collections, and professional hotel linens. 
                Available in bulk quantities for hotels, bed and breakfasts, and hospitality properties. All textiles are 
                durable, easy-care, and meet hospitality industry standards for comfort and longevity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Bedding Sets</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Premium hotel-quality bedding sets including duvet covers, pillowcases, and sheet sets 
                    in various sizes with luxurious fabrics and elegant designs for guest room comfort.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Premium Bedsheets</h3>
                  <p className="text-gray-300 leading-relaxed">
                    High-quality white and colored bedsheets in multiple thread counts and fabric types, 
                    designed for durability, easy care, and guest comfort in hospitality settings.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Turkish Towel Collections</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Luxurious Turkish towel sets including bath towels, hand towels, and washcloths 
                    with premium absorbency and softness for spa-like guest experiences.
                  </p>
                </div>
                <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Professional Hotel Linens</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Complete hotel linen collections including table linens, napkins, and specialty textiles 
                    for restaurants, banquet facilities, and dining areas with professional-grade quality.
                  </p>
                </div>
              </div>
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
                ImportationDotCA manages complete logistics for your hospitality supply imports:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Customs clearance</strong> and documentation handled on your behalf</span>
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
                  <span><strong className="text-white">Delivery to your facility</strong> or warehouse, ready for immediate use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Bulk order consolidation</strong> for cost-effective shipping</span>
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
              {hospitalityFaqs.map((faq) => (
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
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Wholesale Hospitality Products?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              <strong className="text-white">ImportationDotCA Inc.</strong> is based in Hawkesbury, Ontario, Canada, 
              specializing in hospitality supply imports and wholesale distribution. Contact us at{' '}
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
              Looking for other import services? Check out our <a href="/luxury-chocolate-imports" className="text-accent-500 hover:text-accent-400">luxury chocolate imports</a> and <a href="/wholesale-unlocked-phones" className="text-accent-500 hover:text-accent-400">wholesale phones</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
