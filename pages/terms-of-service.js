import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | ImportationDotCA Inc.</title>
        <meta name="description" content="Terms of Service for ImportationDotCA - Please read our terms and conditions before using our services." />
        <link rel="canonical" href="https://importationdot.ca/terms-of-service/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Terms of Service
              </h1>
              <p className="text-gray-400 text-center mb-12">
                Last Updated: October 2025
              </p>

              <div className="space-y-8 text-gray-300">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using the ImportationDotCA Inc. website, you accept and agree to be bound by these Terms of Service. 
                    If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Services Provided</h2>
                  <p className="leading-relaxed">
                    ImportationDotCA Inc. provides wholesale import and distribution services for products including but not limited to:
                    confectionery, home décor items, and hospitality supplies. All products are offered subject to availability and 
                    our standard terms and conditions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Quotations and Pricing</h2>
                  <p className="leading-relaxed">
                    All quotations provided are estimates and subject to change based on market conditions, exchange rates, 
                    and actual order quantities. Final pricing will be confirmed upon order placement. Prices are in Canadian 
                    dollars unless otherwise specified.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                  <p className="leading-relaxed">
                    Payment terms will be established based on your business relationship and order volume. Standard terms 
                    may require advance payment or deposits for first-time customers. We accept various payment methods 
                    including bank transfers and commercial payment instruments.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Shipping and Delivery</h2>
                  <p className="leading-relaxed">
                    Delivery timelines are estimates and may vary based on shipping methods, customs clearance, and other 
                    factors beyond our control. ImportationDotCA Inc. is not responsible for delays caused by customs, 
                    carriers, or other third parties. Risk of loss passes to buyer upon delivery to carrier.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Product Quality and Returns</h2>
                  <p className="leading-relaxed">
                    We strive to provide high-quality products from authorized suppliers. Returns and exchanges are subject 
                    to our return policy, which must be discussed and agreed upon before order placement. All products are 
                    sold "as-is" subject to inspection upon delivery.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                  <p className="leading-relaxed">
                    To the maximum extent permitted by law, ImportationDotCA Inc. shall not be liable for any indirect, 
                    incidental, special, or consequential damages arising from the use of our services or products. Our 
                    total liability shall not exceed the value of the specific order in question.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Intellectual Property</h2>
                  <p className="leading-relaxed">
                    All content on this website, including text, images, logos, and designs, are the property of 
                    ImportationDotCA Inc. and are protected by copyright and trademark laws. Unauthorized use is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                  <p className="leading-relaxed">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="mt-3 ml-4">
                    <strong>Email:</strong> <a href="mailto:info@importationdot.ca" className="text-accent-500 hover:text-accent-600">info@importationdot.ca</a>
                  </p>
                  <p className="mt-2 ml-4">
                    <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

