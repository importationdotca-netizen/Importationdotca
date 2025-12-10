import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import StructuredData from '../components/StructuredData';
import { breadcrumbSchema, localBusinessSchema, serviceSchema, webPageSchema } from '../lib/schema';

export default function Contact() {
  const structuredData = [
    webPageSchema({
      name: 'Contact ImportationDot – Worldwide Service',
      description: 'Contact ImportationDotCA for wholesale import quotes, partnerships, and customer support. Based in Hawkesbury, ON, Canada — serving businesses worldwide.',
      url: 'https://importationdot.ca/contact/',
      type: 'ContactPage',
    }),
    localBusinessSchema({
      name: 'ImportationDotCA Inc.',
      address: {
        addressLocality: 'Hawkesbury',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      telephone: '+1-800-226-2488',
      email: 'info@importationdot.ca',
      url: 'https://importationdot.ca/contact/',
      openingHours: 'Mo-Fr 09:00-17:00',
    }),
    serviceSchema({
      name: 'Wholesale Import Consultation',
      description: 'Request quotes and consultation for ImportationDotCA wholesale import, distribution, and sourcing programs.',
      url: 'https://importationdot.ca/contact/',
      serviceType: 'Consultation',
    }),
    breadcrumbSchema([
      { name: 'Home', item: 'https://importationdot.ca/' },
      { name: 'Contact', item: 'https://importationdot.ca/contact/' },
    ]),
  ].filter(Boolean);

  return (
    <>
      <Head>
        <title>Contact ImportationDot – Worldwide Service</title>
        <meta name="description" content="Contact ImportationDotCA for wholesale import quotes, partnerships, and customer support. Based in Hawkesbury, ON, Canada — serving businesses worldwide. Get your quote today!" />
        <link rel="canonical" href="https://importationdot.ca/contact/" />
        <meta property="og:title" content="Contact ImportationDotCA | Get Your Import Quote Today" />
        <meta property="og:description" content="Contact ImportationDotCA for wholesale import quotes, partnerships, and customer support. Based in Hawkesbury, ON, Canada." />
      </Head>

      <StructuredData data={structuredData} />

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Contact ImportationDot – Worldwide Service
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
              Get in touch with us for quotes, inquiries, or to learn more about our worldwide wholesale import and delivery services. 
              We support shipments worldwide. Our team typically responds within 24 hours during business hours.
            </p>

            <div className="max-w-3xl mx-auto mb-12 bg-slate-800/50 p-6 border border-white/10 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Our Location</h2>
              <p className="text-gray-300 text-center leading-relaxed">
                ImportationDotCA operates from Hawkesbury, Ontario, Canada, and provides worldwide import and sourcing services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-12 bg-slate-800/50 p-6 border border-white/10 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Worldwide Service Coverage</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                ImportationDotCA proudly serves clients across North America, Europe, Asia, Africa, and South America. 
                We operate globally with reliable international logistics.
              </p>
              <div className="mt-4">
                <p className="text-gray-300 font-semibold mb-2">Shipping Restrictions:</p>
                <p className="text-gray-400 text-sm">
                  Due to international regulations, we currently do not ship to: North Korea, Iran, and the Palestinian Territories.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-12 bg-slate-900/50 p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Why Partner With Us
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <h3 className="font-semibold text-white mb-2">Competitive Volume Pricing</h3>
                  <p className="text-sm">We offer wholesale pricing that allows you to maintain healthy profit margins while passing competitive prices to your customers.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Fast Turnaround Times</h3>
                  <p className="text-sm">Our streamlined import process ensures timely delivery, typically 2-4 weeks from order confirmation to your warehouse.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Custom Import Solutions</h3>
                  <p className="text-sm">We handle all customs documentation, bilingual labeling, and compliance requirements for hassle-free importation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Reliable Supply Chain</h3>
                  <p className="text-sm">Direct relationships with authorized suppliers ensure product authenticity and consistent availability for your business needs.</p>
                </div>
              </div>
            </div>

            <ContactForm />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Email Us</h3>
                <a href="mailto:info@importationdot.ca" className="text-accent-500 hover:text-accent-600 transition-colors">
                  info@importationdot.ca
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Call Us</h3>
                <a href="tel:18002262488" className="text-accent-500 hover:text-accent-600 transition-colors">
                  1-800-226-2488
                </a>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
