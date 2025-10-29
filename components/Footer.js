import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <img 
                src="/media/logo.png" 
                alt="ImportationDotCA Logo" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-white">
                ImportationDotCA Inc.
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Professional import/export of décor, confectionery, and hospitality goods
              serving Canada & USA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chocolate-candy" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/hospitality" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-accent-500 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@importationdot.ca" className="hover:text-accent-500 transition-colors">
                  info@importationdot.ca
                </a>
              </li>
              <li>
                <a href="tel:18002262488" className="hover:text-accent-500 transition-colors">
                  1-800-226-2488
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} ImportationDotCA Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
