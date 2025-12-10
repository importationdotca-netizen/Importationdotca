import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../lib/schema';

const mobilityBrands = [
  { name: 'Apple', file: 'apple.jpg' },
  { name: 'Samsung', file: 'samsung-logo.png' },
  { name: 'Google Pixel', file: 'google-pixel-logo.jpg' },
  { name: 'Motorola', file: 'motorola-logo.png' },
  { name: 'Xiaomi', file: 'xiaomi-logo.jpg' },
];

const distributionHighlights = [
  'Compliant IMEI documentation and customs-cleared import paperwork',
  'Factory warranties honoured through authorized OEM service networks',
  'Drop-ship and cross-dock options from bonded warehouses worldwide',
  'Accessory kitting, protective packaging, and serialized packing lists for channel partners',
];

export default function WholesaleUnlockedPhones() {
const phoneFaqs = [
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
    question: 'How quickly can unlocked smartphone orders ship?',
    answer:
      'Inventory is confirmed on a rolling 24-hour basis. Standard deployments ship within 5–7 business days from our bonded warehouses once payment and compliance checks are complete. Express shipping options are available for urgent orders.',
  },
  {
    question: 'How long does international delivery take?',
    answer:
      'Delivery times vary by region. Typically 5-7 business days for standard orders, depending on product availability, shipping method, and destination. Contact us for estimated timelines specific to your location.',
  },
  {
    question: 'Do you support enterprise configuration services?',
    answer:
      'Yes. We preload software builds, install language packs, enroll devices into MDM profiles, and provide serialized packing lists tailored to your deployment requirements. Enterprise configuration services are available for bulk orders.',
  },
  {
    question: 'What certifications accompany the devices?',
    answer:
      'All units arrive factory sealed with OEM warranties, IMEI/serial documentation, and region-appropriate power accessories, with bilingual packaging available on request. Devices meet Canadian regulatory standards and include all necessary compliance documentation.',
  },
  {
    question: 'Can you source entry-level and rugged devices?',
    answer:
      'Alongside flagship 5G models, we carry value-tier LTE smartphones, hospitality handhelds, and ruggedized devices suitable for field teams or corporate fleets. We can source specific models based on your requirements.',
  },
  {
    question: 'What are your minimum order quantities?',
    answer:
      'Minimum order quantities vary by device model and brand. We work with distributors, retailers, and enterprise buyers of all sizes. Contact us with your requirements and we will provide customized pricing based on your volume needs.',
  },
  {
    question: 'Do you ship to remote locations in Canada?',
    answer:
      'Yes, we ship throughout Canada including remote locations. We coordinate with trusted carriers to ensure reliable delivery to your warehouse or distribution center. Shipping costs and timelines vary by location and will be included in your quote.',
  },
];

  const structuredData = [
    webPageSchema({
      name: 'Wholesale Factory-Unlocked Phones | Bulk Smartphone Distribution',
      description:
        'Factory-unlocked smartphones delivered efficiently and safely. Bulk smartphone distribution for retailers, distributors, and enterprise buyers worldwide. Based in Hawkesbury, ON.',
      url: 'https://importationdot.ca/wholesale-unlocked-phones/',
      primaryImage: 'https://importationdot.ca/media/Phones/apple-iphone17-pro-69-angle1.webp',
    }),
    serviceSchema({
      name: 'Wholesale Factory-Unlocked Smartphone Distribution',
      description:
        'ImportationDotCA sources multi-band 5G smartphones, entry-level devices, and OEM accessories with serialization tracking and international compliance standards. Factory-sealed unlocked devices for distributors, VARs, retailers, and enterprise buyers worldwide.',
      url: 'https://importationdot.ca/wholesale-unlocked-phones/',
      serviceType: 'Wholesale unlocked devices',
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://importationdot.ca/' },
      { name: 'Wholesale Unlocked Devices & Mobility Electronics', item: 'https://importationdot.ca/wholesale-unlocked-phones/' },
  ]),
  faqSchema(phoneFaqs),
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>Wholesale Factory-Unlocked Phones | Bulk Smartphone Distribution</title>
        <meta
          name="description"
          content="Factory-unlocked smartphones delivered efficiently and safely. Bulk smartphone distribution for retailers, distributors, and enterprise buyers worldwide. Based in Hawkesbury, ON – request your quote today!"
        />
        <link rel="canonical" href="https://importationdot.ca/wholesale-unlocked-phones/" />
        <meta property="og:title" content="Wholesale Unlocked Phones Canada | Bulk Smartphone Distribution" />
        <meta property="og:description" content="Wholesale unlocked smartphones and tablets in Canada. Factory-sealed devices for distributors, retailers, and enterprise buyers." />
      </Head>

      <StructuredData data={structuredData} />

      <Header />

      <main className="min-h-screen bg-slate-950">
        <section className="w-full bg-amber-500 text-slate-900 text-center py-3 font-semibold tracking-wide">
          Currently in stock for the next 24 hours — Reserve your allocation today.
        </section>

        <section className="w-full section-padding bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="section-container text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-accent-500/10 text-accent-300 uppercase tracking-widest text-xs font-semibold mb-6">
              Electronics Distribution
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wholesale Factory-Unlocked Phones
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
              Factory-unlocked smartphones delivered efficiently and safely. Bulk smartphone distribution for retailers, distributors, and enterprise buyers worldwide.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              ImportationDotCA delivers factory-sealed smartphones, tablets, wearables, and mobility accessories directly from tier-one
              manufacturers and authorized master distributors. All units are unlocked, inventory is serialization-tracked, and shipments are
              prepared for professional import/export programs serving resellers, VARs, retail groups, and enterprise buyers.
            </p>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Global Electronics Brands We Distribute
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 max-w-5xl mx-auto">
              {mobilityBrands.map((brand) => (
                <div
                  key={brand.file}
                  className="flex items-center justify-center p-6 bg-slate-800 border border-white/10 hover:border-accent-500 transition-colors"
                >
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

        {/* Why Choose Us Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Why Choose ImportationDotCA for Wholesale Phones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Verified Supply Chains</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Direct relationships with tier-one manufacturers and authorized distributors ensure authentic, factory-sealed devices.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Serialization Tracking</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Complete IMEI and serial number documentation for compliance, inventory management, and warranty tracking.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Enterprise Services</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  MDM enrollment, software preloading, and custom configuration services for corporate deployments.
                </p>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Fast Turnaround</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Inventory confirmed within 24 hours. Standard shipping in 5-7 business days with express options available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Process Works */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              How Our Phone Import Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Submit Requirements</h3>
                <p className="text-gray-400 text-sm">Share your device models, quantities, and configuration needs. We confirm availability and pricing.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Allocation & Payment</h3>
                <p className="text-gray-400 text-sm">We reserve inventory, process payment, and begin allocation. IMEI lists provided within 24 hours.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Configuration & Shipping</h3>
                <p className="text-gray-400 text-sm">Enterprise configuration applied if needed, then devices ship from bonded warehouses with full documentation.</p>
              </div>
              <div className="text-center">
                <div className="bg-accent-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-500">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Delivery & Support</h3>
                <p className="text-gray-400 text-sm">Track your shipment in real-time. Devices arrive factory-sealed with OEM warranties and compliance documentation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Mobile Device Categories
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Flagship 5G Smartphones</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Latest generation unlocked smartphones from leading OEMs with multi-band 5G support, 
                    premium features, and OEM accessories. Perfect for high-end retail and enterprise deployments.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Multi-band 5G connectivity</li>
                    <li>• Premium build quality</li>
                    <li>• OEM accessories included</li>
                    <li>• Region-appropriate power adapters</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Entry-Level Value Lines</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Cost-effective LTE devices ideal for corporate fleets, hospitality programs, education rollouts, 
                    and value retail channels with bilingual packaging options available.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Budget-friendly pricing</li>
                    <li>• Reliable LTE connectivity</li>
                    <li>• Corporate fleet ready</li>
                    <li>• Bilingual packaging options</li>
                  </ul>
                </div>
                <div className="bg-slate-900/60 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Accessories & Bundles</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    OEM-certified chargers, cables, power banks, and protective cases bundled per device family 
                    for streamlined merchandising and complete product solutions.
                  </p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• OEM-certified accessories</li>
                    <li>• Complete bundle options</li>
                    <li>• Protective cases included</li>
                    <li>• Streamlined merchandising</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping & Logistics Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Shipping & Logistics Details
            </h2>
            <div className="bg-slate-800/60 border border-white/10 rounded-lg p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                ImportationDotCA manages complete logistics for your smartphone imports:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Bonded warehouse shipping</strong> from secure facilities with inventory tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Customs clearance</strong> and compliance documentation handled on your behalf</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">IMEI/serial documentation</strong> provided for all devices for regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Real-time tracking</strong> throughout the shipping process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Express shipping options</strong> available for urgent orders</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm mt-6">
                Based in Hawkesbury, ON, Canada – serving clients worldwide. We ship to Canada, USA, EU, UK, Israel, Australia, Japan, South Korea, India, Mexico, and throughout South America and Africa.
              </p>
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
                All devices meet international regulatory standards and compliance requirements:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Factory-sealed units</strong> with original OEM packaging and accessories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">OEM warranties</strong> honored through authorized service networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">IMEI/serial documentation</strong> for customs and regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Region-appropriate power adapters</strong> and bilingual packaging available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">•</span>
                  <span><strong className="text-white">Canadian regulatory standards</strong> met for all imported devices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Mobile Categories We Support</h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li className="flex items-start space-x-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  <span>Unlocked 5G smartphones, rugged handhelds, enterprise tablets, and mobility IoT devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  <span>Preload services for software builds, language packs, or MDM enrollment profiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  <span>Retail-ready bundles with accessories, display hooks, and shelf talkers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                  <span>Corporate deployment packs with mobile device management onboarding</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Distribution Advantages</h2>
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                {distributionHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start space-x-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="w-full section-padding bg-slate-900">
          <div className="section-container max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Mobility Distribution FAQs</h2>
            <div className="space-y-6">
              {phoneFaqs.map((faq) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reserve Your Allocation</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Device inventory is confirmed on a rolling 24-hour basis. Share your SKU requirements, accessory needs, and delivery timelines so we can
              secure locked pricing and logistics windows for your program.
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              <strong className="text-white">ImportationDotCA Inc.</strong> is based in Hawkesbury, Ontario, Canada, 
              specializing in wholesale unlocked smartphone distribution. Contact us at{' '}
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
              Looking for other import services? Check out our <a href="/luxury-chocolate-imports" className="text-accent-500 hover:text-accent-400">luxury chocolate imports</a> and <a href="/hospitality" className="text-accent-500 hover:text-accent-400">hospitality supplies</a>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

