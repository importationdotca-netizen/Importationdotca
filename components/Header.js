import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/chocolate-candy', label: 'Products' },
    { href: '/hospitality', label: 'Hospitality' },
    { href: '/about-us', label: 'About' },
    { href: '/contact', label: 'Get Quote' },
  ];

  return (
    <header className="w-full sticky top-0 bg-slate-950/98 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/media/logo.png" 
              alt="ImportationDotCA Logo" 
              className="h-12 w-auto"
            />
            <span className="hidden md:block text-xl font-bold text-white">
              ImportationDotCA Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-accent-500 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {dropdownOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {dropdownOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-4 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-accent-500 transition-colors font-medium py-2"
                  onClick={() => setDropdownOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
