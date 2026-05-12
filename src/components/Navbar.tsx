'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'Workflow', href: '/workflow' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Prices', href: '/prices' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-black rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-wider">S</span>
          </div>
          <span className="font-semibold text-sm tracking-widest uppercase text-black">
            Spartan<span className="font-light">Media</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-xs tracking-widest uppercase font-medium transition-colors duration-200 hover:text-black ${
                  pathname === link.href ? 'text-black' : 'text-gray-400'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/apply"
            className="bg-black text-white text-xs tracking-widest uppercase font-medium px-5 py-2.5 rounded-sm hover:bg-gray-900 transition-colors duration-200"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-1 text-black"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <ul className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                    pathname === link.href ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-100">
              <Link
                href="/apply"
                className="inline-block bg-black text-white text-xs tracking-widest uppercase font-medium px-5 py-3 rounded-sm w-full text-center"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
