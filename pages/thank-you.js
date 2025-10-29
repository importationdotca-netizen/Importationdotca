import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | ImportationDotCA Inc.</title>
        <meta name="description" content="Thank you for contacting ImportationDotCA." />
      </Head>

      <Header />
      
      <main className="min-h-screen">
        <section className="w-full section-padding bg-slate-950">
          <div className="section-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We've received your message and will get back to you as soon as possible.
            </p>
            <Link href="/">
              <button className="btn-primary text-lg px-8 py-4">
                Return to Homepage
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
