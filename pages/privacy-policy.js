import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | ImportationDotCA Inc.</title>
        <meta name="description" content="Privacy Policy for ImportationDotCA - Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://importationdot.ca/privacy-policy/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Privacy Policy
              </h1>
              <p className="text-gray-400 text-center mb-12">
                Last Updated: October 2025
              </p>

              <div className="space-y-8 text-gray-300">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="leading-relaxed">
                    When you contact us or request a quote through our website, we may collect the following information:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Company name and business details</li>
                    <li>Any information you provide in your message or inquiry</li>
                    <li>Website usage data through cookies and analytics tools</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>Respond to your inquiries and provide quotations</li>
                    <li>Process and fulfill your orders</li>
                    <li>Communicate with you about products and services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Data Protection and Security</h2>
                  <p className="leading-relaxed">
                    ImportationDotCA Inc. takes data security seriously. We implement appropriate technical and organizational 
                    measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
                  <p className="leading-relaxed">
                    Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable 
                    cookies through your browser settings, though this may affect certain website functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                  <p className="leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
                  </p>
                  <p className="mt-3 ml-4">
                    <strong>Email:</strong> <a href="mailto:info@importationdot.ca" className="text-accent-500 hover:text-accent-600">info@importationdot.ca</a>
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    This Privacy Policy may be updated periodically. We will notify you of any significant changes by posting the new policy on this page.
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

