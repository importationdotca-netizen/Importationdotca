import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, webPageSchema } from '../lib/schema';

export default function AboutUs() {
  const structuredData = [
    webPageSchema({
      name: 'About ImportationDot – Global Import Specialists',
      description:
        'Learn about ImportationDotCA Inc., your trusted global import specialists. Professional import brokerage, freight forwarding, and delivery services worldwide. Based in Hawkesbury, ON – serving businesses globally.',
      url: 'https://importationdot.ca/about-us/',
      type: 'AboutPage',
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://importationdot.ca/' },
      { name: 'About ImportationDotCA', item: 'https://importationdot.ca/about-us/' },
    ]),
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>About ImportationDot – Global Import Specialists</title>
        <meta name="description" content="Learn about ImportationDotCA Inc., your trusted global import specialists. Professional import brokerage, freight forwarding, and delivery services worldwide. Based in Hawkesbury, ON – serving businesses globally." />
        <link rel="canonical" href="https://importationdot.ca/about-us/" />
        <meta property="og:title" content="About ImportationDotCA | Wholesale Import Partner Canada" />
        <meta property="og:description" content="Learn about ImportationDotCA Inc., your trusted wholesale import partner providing professional import brokerage and delivery services worldwide." />
      </Head>

      <StructuredData data={structuredData} />

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About ImportationDot – Global Import Specialists
            </h1>
            <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Your trusted global import specialists. Professional import brokerage, freight forwarding, and delivery services worldwide.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              ImportationDotCA Inc. is your trusted wholesale import partner, serving businesses worldwide with professional import brokerage, freight forwarding, and delivery services. Based in Hawkesbury, Ontario, Canada.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full section-padding bg-slate-900">
          <div className="section-container">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  ImportationDotCA Inc. is dedicated to being the premier wholesale import and distribution partner for businesses 
                  worldwide. Our mission is to bridge the gap between international suppliers and businesses globally, providing access 
                  to premium quality products while handling all complexities of international trade, customs clearance, and delivery.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Based in Hawkesbury, Ontario, Canada, we specialize in luxury chocolates, wholesale electronics, and hospitality supplies, 
                  serving clients worldwide with reliable, compliant, and cost-effective import solutions.
                </p>
                <div className="mt-6 bg-slate-800/50 p-6 border border-white/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-3">Our Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    ImportationDotCA operates from Hawkesbury, Ontario, Canada, and provides worldwide import and sourcing services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Experience</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With years of experience in international trade and logistics, we have established strong relationships with 
                  authorized suppliers and manufacturers across Europe, Asia, and other key markets worldwide. Our team specializes in 
                  navigating customs regulations, managing documentation requirements, and ensuring compliance with international import 
                  standards for food products, consumer goods, and hospitality supplies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  We work directly with certified manufacturers and authorized distributors to ensure product authenticity, quality, 
                  and regulatory compliance. Our expertise spans multiple product categories including confectionery, electronics, 
                  and commercial hospitality supplies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Distribution Scope</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We serve businesses of all sizes, from small specialty retailers to large distribution networks. Our services 
                  span worldwide, with reliable shipping options tailored to your business needs. Whether you need bulk imports for 
                  wholesale distribution or smaller quantities for specialty retail, we provide flexible solutions with competitive 
                  pricing that helps your business thrive.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-slate-800 p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">Authentic Products</h3>
                    <p className="text-gray-300">
                      We source exclusively from authorized suppliers and distributors, ensuring all products are genuine and meet 
                      manufacturer quality standards.
                    </p>
                  </div>
                  <div className="bg-slate-800 p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">Expert Logistics</h3>
                    <p className="text-gray-300">
                      Our experienced team handles customs clearance, documentation, bilingual labeling, and all compliance requirements 
                      for seamless importation.
                    </p>
                  </div>
                  <div className="bg-slate-800 p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">Competitive Pricing</h3>
                    <p className="text-gray-300">
                      Volume-based wholesale pricing and efficient supply chain management ensure you receive competitive rates while 
                      maintaining healthy profit margins.
                    </p>
                  </div>
                  <div className="bg-slate-800 p-6 border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-3">Reliable Service</h3>
                    <p className="text-gray-300">
                      Consistent availability, timely delivery, and responsive customer support make us a trusted partner for your 
                      business growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-3xl font-bold text-white mb-4">Worldwide Service Coverage</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  ImportationDotCA proudly serves clients across North America, Europe, Asia, Africa, and South America. 
                  We operate globally with reliable international logistics.
                </p>
                <div className="bg-slate-800/50 p-6 border border-white/10 rounded-lg">
                  <p className="text-gray-300 font-semibold mb-2">Shipping Restrictions:</p>
                  <p className="text-gray-400">
                    Due to international regulations, we currently do not ship to: North Korea, Iran, and the Palestinian Territories.
                  </p>
                </div>
              </div>

              <div className="text-center mt-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Contact us today to discuss your wholesale import needs and discover how we can help grow your business.
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
                  Explore our services: <a href="/luxury-chocolate-imports" className="text-accent-500 hover:text-accent-400">Luxury Chocolate Imports</a>, <a href="/wholesale-unlocked-phones" className="text-accent-500 hover:text-accent-400">Wholesale Phones</a>, and <a href="/hospitality" className="text-accent-500 hover:text-accent-400">Hospitality Supplies</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

