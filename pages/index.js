import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../lib/schema';

export default function Home() {

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

  const homeFaqs = [
    {
      question: 'What import services do you provide?',
      answer:
        'We provide comprehensive import brokerage, freight forwarding, and last-mile delivery services for businesses worldwide. Our services include customs clearance, documentation handling, international shipping coordination, and end-to-end logistics management for luxury chocolates, wholesale electronics, and hospitality supplies.',
    },
    {
      question: 'Which countries do you serve?',
      answer:
        'We serve clients globally including Canada, United States, United Kingdom, Israel, Australia, Japan, South Korea, India, Mexico, European Union countries, South America, and Africa. We do not ship to Palestinian Territories, North Korea, or Iran due to international regulations.',
    },
    {
      question: 'How long does international shipping take?',
      answer:
        'Shipping times vary by destination and product type. Typically, delivery takes 2-4 weeks from order confirmation. We provide real-time tracking and keep you updated throughout the shipping process. Express shipping options are available for urgent orders.',
    },
    {
      question: 'Do you handle customs clearance?',
      answer:
        'Yes, we handle all customs clearance and documentation requirements on your behalf. Our experienced team navigates international regulations, manages compliance documentation, and ensures smooth customs processing for all shipments.',
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We serve retailers, distributors, hospitality businesses, corporate buyers, and e-commerce companies. Our specialties include luxury confectionery distribution, wholesale electronics, hospitality supplies, and general import/export services for various consumer goods.',
    },
    {
      question: 'How do I get started with your import services?',
      answer:
        'Getting started is simple. Contact us via our contact form, email, or phone with your import requirements. We will provide a transparent quote, discuss your needs, and guide you through the entire import process from pickup to delivery.',
    },
  ];

  const structuredData = [
    webPageSchema({
      name: 'International Import & Wholesale Services – ImportationDot',
      description:
        'Fast, reliable import/export services with worldwide coverage. Premium products delivered efficiently and safely. Based in Hawkesbury, ON – serving clients globally with professional import brokerage, freight forwarding, and last-mile delivery.',
      url: 'https://importationdot.ca/',
      primaryImage: 'https://importationdot.ca/media/social-preview.jpg',
    }),
    serviceSchema({
      name: 'International Import & Wholesale Services',
      description:
        'ImportationDotCA provides professional import brokerage, freight forwarding, and last-mile delivery services worldwide. We handle pickup, customs clearance, and delivery for businesses and individuals, shipping globally with end-to-end tracking and support.',
      url: 'https://importationdot.ca/',
      serviceType: 'Import, Delivery, and International Shipping Services',
    }),
    faqSchema(homeFaqs),
  ];

  return (
    <>
      <Head>
        <title>International Import & Wholesale Services – ImportationDot</title>
        <meta name="description" content="Fast, reliable import/export services with worldwide coverage. Premium products delivered efficiently and safely. Based in Hawkesbury, ON – serving clients globally. Request your quote today!" />
        <link rel="canonical" href="https://importationdot.ca/" />
        <link rel="alternate" href="https://importationdot.ca/" hreflang="en-ca" />
        <link rel="alternate" href="https://importationdot.ca/" hreflang="en-us" />
        <link rel="alternate" href="https://importationdot.ca/" hreflang="en-il" />
        <link rel="alternate" href="https://importationdot.ca/" hreflang="x-default" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Worldwide Import & Delivery Services | ImportationDotCA" />
        <meta property="og:description" content="Professional worldwide import & delivery services. Fast, reliable international shipping with customs clearance. Serving businesses globally." />
        <meta property="og:image" content="/media/social-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <StructuredData data={structuredData} />

      <Header />
      
      <main>
        <Hero />

        {/* About Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              International Import & Wholesale Services
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Fast, reliable import/export services with worldwide coverage. Premium products delivered efficiently and safely.
            </p>
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg text-gray-300 leading-relaxed">
                We provide professional import brokerage, freight forwarding, and last-mile delivery for businesses and personal shipments. 
                From pickup to customs and final delivery, we manage the entire logistics chain so you can focus on growing your business.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our process is simple: request a pickup or dropoff, we arrange transport and customs handling, and provide tracking until delivery. 
                We partner with trusted carriers and brokers to ensure timely, compliant shipments worldwide.
              </p>
              <div className="text-left max-w-3xl mx-auto mt-8">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3">•</span>
                    <span><strong className="text-white">End-to-end service and tracking</strong> — Complete visibility from pickup to delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3">•</span>
                    <span><strong className="text-white">Customs brokerage handled on your behalf</strong> — We navigate regulations and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3">•</span>
                    <span><strong className="text-white">Competitive rates and transparent fees</strong> — No hidden costs, clear pricing upfront</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-300 mt-6 leading-relaxed">
                  Simple pricing, dedicated support, and secure handling for every shipment.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  <a href="/luxury-chocolate-imports/" className="hover:text-accent-500 transition-colors">
                    Luxury Chocolate Imports
                  </a>
                </h3>
                <p className="text-gray-400">
                  Premium imported chocolates and confectionery from European and international brands, 
                  delivered in bulk quantities for retailers and distributors. 
                  <a href="/luxury-chocolate-imports/" className="text-accent-500 hover:text-accent-400 ml-1">Learn more →</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  <a href="/wholesale-unlocked-phones/" className="hover:text-accent-500 transition-colors">
                    Wholesale Unlocked Phones
                  </a>
                </h3>
                <p className="text-gray-400">
                  Factory-sealed unlocked smartphones, tablets, and mobility electronics for distributors, 
                  retailers, and enterprise buyers with verified supply chains. 
                  <a href="/wholesale-unlocked-phones/" className="text-accent-500 hover:text-accent-400 ml-1">Learn more →</a>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  <a href="/hospitality/" className="hover:text-accent-500 transition-colors">
                    Hospitality Products
                  </a>
                </h3>
                <p className="text-gray-400">
                  Comprehensive range of professional hospitality supplies including kitchen equipment, lighting fixtures, 
                  textiles, and cleaning supplies for hotels and commercial facilities. 
                  <a href="/hospitality/" className="text-accent-500 hover:text-accent-400 ml-1">Learn more →</a>
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <strong className="text-white">ImportationDotCA Inc.</strong> is based in Hawkesbury, Ontario, Canada, 
                serving businesses worldwide with professional import brokerage, freight forwarding, and last-mile delivery services. 
                We specialize in luxury chocolates, wholesale electronics, and hospitality supplies with end-to-end logistics support.
              </p>
            </div>
            <div className="mt-8 max-w-3xl mx-auto bg-slate-800/50 p-6 border border-white/10 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Worldwide Service Coverage</h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-center">
                ImportationDotCA proudly serves clients across North America, Europe, Asia, Africa, and South America. 
                We operate globally with reliable international logistics.
              </p>
              <div className="text-center">
                <p className="text-gray-300 font-semibold mb-2">Shipping Restrictions:</p>
                <p className="text-gray-400 text-sm">
                  Due to international regulations, we currently do not ship to: North Korea, Iran, and the Palestinian Territories.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Request a Quote</h3>
                <p className="text-gray-400">Contact us with your shipment details and receive a transparent quote for your import needs.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Pickup & Documentation</h3>
                <p className="text-gray-400">We arrange pickup or accept dropoff, handle all required documentation, and prepare your shipment.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Customs Clearance & Transit</h3>
                <p className="text-gray-400">Our team manages customs clearance and coordinates transit with trusted carriers worldwide.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Delivery & Confirmation</h3>
                <p className="text-gray-400">Track your shipment in real-time and receive confirmation upon successful delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose ImportationDotCA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Expert Logistics</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Years of experience in international trade with established relationships with trusted carriers and suppliers worldwide.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Compliance Guaranteed</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All shipments meet regulatory requirements with proper documentation, bilingual labeling, and customs compliance handled for you.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Transparent Pricing</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Competitive rates with no hidden fees. Clear, upfront pricing so you know exactly what to expect.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Dedicated Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Personal account management and responsive customer service. We're here to help at every step of your import journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Retail & E-commerce</h3>
                <p className="text-gray-300 text-sm">
                  Wholesale distribution for retail stores, online retailers, and e-commerce platforms seeking premium imported products.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Hospitality & Tourism</h3>
                <p className="text-gray-300 text-sm">
                  Complete supply solutions for hotels, restaurants, and hospitality facilities including equipment, textiles, and amenities.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Corporate & Enterprise</h3>
                <p className="text-gray-300 text-sm">
                  Bulk procurement and distribution services for corporate buyers, fleet management, and enterprise deployments.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Specialty Retailers</h3>
                <p className="text-gray-300 text-sm">
                  Curated product imports for specialty stores, gift shops, duty-free retailers, and boutique businesses.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Distributors & Wholesalers</h3>
                <p className="text-gray-300 text-sm">
                  Large-scale import and distribution services for regional distributors and wholesale operations.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Food & Beverage</h3>
                <p className="text-gray-300 text-sm">
                  Premium confectionery and specialty food imports with regulatory compliance and temperature-controlled logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Certifications Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Compliance & Certifications
            </h2>
            <div className="bg-slate-800/60 border border-white/10 rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                ImportationDotCA ensures all shipments meet international regulatory standards and compliance requirements. We handle:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Canadian Food Inspection Agency (CFIA)</strong> compliance for food products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Bilingual labeling</strong> and regulatory documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">IMEI/serial documentation</strong> for electronics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Customs clearance</strong> and duty payment handling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Health and safety standards</strong> for all product categories</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question} className="bg-slate-800/60 border border-white/10 rounded-xl p-6 shadow-lg shadow-black/20 hover:border-accent-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Import Brokerage</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Professional import/export services for businesses worldwide with end-to-end support. We handle all documentation, customs clearance, and regulatory compliance.
                </p>
                <a href="/about-us" className="text-accent-500 hover:text-accent-400 text-sm font-semibold">
                  Learn more →
                </a>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Freight Forwarding</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Efficient freight forwarding network for décor, confectionery, and hospitality goods globally. Coordinated shipping with trusted carriers worldwide.
                </p>
                <a href="/contact" className="text-accent-500 hover:text-accent-400 text-sm font-semibold">
                  Get a quote →
                </a>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">International Procurement</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Tailored import solutions to meet your specific business needs with personalized service. From sourcing to delivery, we manage it all.
                </p>
                <a href="/contact" className="text-accent-500 hover:text-accent-400 text-sm font-semibold">
                  Contact us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Global Chocolate & Grocery Brands We Distribute
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mt-8">
              {brands.map((brand) => (
                <div key={brand.file} className="flex items-center justify-center p-6 bg-slate-800 border border-white/10 hover:border-accent-500 transition-colors">
                  <div className="relative w-full h-16">
                    <Image
                      src={`/media/brands/${brand.file}`}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Ready to streamline your import process? Contact us today for a transparent quote on worldwide import and delivery services. 
              Based in Hawkesbury, ON – serving clients worldwide.
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
