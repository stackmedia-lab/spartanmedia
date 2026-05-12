'use client';
import Link from 'next/link';
import { Twitter, Linkedin, Youtube, Instagram, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const quickLinks = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Our Services', href: '/our-services' },
  { label: 'Workflow', href: '/workflow' },
  { label: 'Case Studies', href: '/case-studies' },
];

const companyLinks = [
  { label: 'Prices', href: '/prices' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Apply Now', href: '/apply' },
];

const policyLinks = [
  { label: 'Terms & Conditions', href: '/policies/terms' },
  { label: 'Privacy Policy', href: '/policies/privacy' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white mt-32">
      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">// SPARTAN MEDIA</p>
            <h2 className="text-2xl lg:text-3xl font-semibold leading-tight max-w-md">
              Ready to scale your ad spend into real revenue?
            </h2>
          </div>
          <Link
            href="/apply"
            className="group flex items-center gap-2 bg-white text-black text-xs tracking-widest uppercase font-semibold px-6 py-3.5 rounded-sm hover:bg-gray-100 transition-colors"
          >
            Apply Now <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black text-xs font-bold">S</span>
            </div>
            <span className="font-semibold text-sm tracking-widest uppercase">
              Spartan<span className="font-light">Media</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
            Performance media buying agency scaling ambitious brands through precision advertising.
          </p>
          {/* Subscribe */}
          {subscribed ? (
            <p className="text-xs text-gray-400 tracking-wide">✓ You're subscribed.</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-500 text-xs px-3 py-2.5 rounded-l-sm flex-1 outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="bg-white text-black text-xs font-semibold px-4 py-2.5 rounded-r-sm hover:bg-gray-200 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[
              { icon: Twitter, href: 'https://twitter.com' },
              { icon: Linkedin, href: 'https://linkedin.com' },
              { icon: Youtube, href: 'https://youtube.com' },
              { icon: Instagram, href: 'https://instagram.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-colors"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-5 font-medium">Quick Links</p>
          <ul className="space-y-3">
            {quickLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-5 font-medium">Company</p>
          <ul className="space-y-3">
            {companyLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-5 font-medium">Policies</p>
          <ul className="space-y-3">
            {policyLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Spartan Media. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            Performance · Precision · Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
