import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | ImportationDotCA Inc.</title>
        <meta name="description" content="Get in touch with ImportationDotCA for wholesale import/export quotes and inquiries." />
        <link rel="canonical" href="https://importationdot.ca/contact/" />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
              Get in touch with us for quotes, inquiries, or to learn more about our wholesale import services.
            </p>

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
