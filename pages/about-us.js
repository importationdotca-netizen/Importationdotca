import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | ImportationDotCA Inc.</title>
        <meta name="description" content="Learn about ImportationDotCA, your trusted wholesale import partner serving Canada and USA with premium products." />
        <link rel="canonical" href="https://importationdot.ca/about-us/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About ImportationDotCA
            </h1>
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
                  across Canada and the United States. Our mission is to bridge the gap between international suppliers and North American 
                  businesses, providing access to premium quality products while handling all complexities of international trade.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Experience</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With years of experience in international trade and logistics, we have established strong relationships with 
                  authorized suppliers and manufacturers across Europe, Asia, and other key markets. Our team specializes in 
                  navigating customs regulations, managing documentation requirements, and ensuring compliance with Canadian and 
                  American import standards for food products, consumer goods, and hospitality supplies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Distribution Scope</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We serve businesses of all sizes, from small specialty retailers to large distribution networks. Our services 
                  span across all Canadian provinces and US states, with reliable shipping options tailored to your business needs. 
                  Whether you need bulk imports for wholesale distribution or smaller quantities for specialty retail, we provide 
                  flexible solutions with competitive pricing that helps your business thrive.
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

              <div className="text-center mt-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Work Together?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Contact us today to discuss your wholesale import needs and discover how we can help grow your business.
                </p>
                <a href="/contact">
                  <button className="btn-primary text-lg px-8 py-4">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

