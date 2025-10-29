import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Import & Wholesale Distribution
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Professional import/export of décor, confectionery, and hospitality goods
        </p>
        <Link href="/contact">
          <button className="btn-primary text-lg px-8 py-4">
            Get Your Quote Today
          </button>
        </Link>
      </div>
    </section>
  );
}
