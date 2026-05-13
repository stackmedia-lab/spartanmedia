'use client';
import { useState } from 'react';
import { Mail, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="pt-40 pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium">// Contact</p>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
              Let&apos;s talk<br />
              <span className="italic font-light">performance.</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Have a question or want to explore working together? Reach out and a member of our team will get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-8 font-medium">Get In Touch</p>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@spartanmedia.co' },
                  { icon: MapPin, label: 'Location', value: 'Remote-first · Global' },
                  { icon: MessageSquare, label: 'Response time', value: 'Within 1 business day' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-gray-400 font-medium">{label}</p>
                      <p className="text-sm font-medium mt-0.5">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium">Looking to work with us?</p>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                For new client enquiries, we recommend applying for a free audit through our Apply page.
              </p>
              <a href="/apply" className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-semibold text-black hover:text-gray-600 transition-colors">
                Apply for Free Audit <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium">Follow Us</p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
                  <a key={s} href="#" className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors font-medium">{s}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {sent ? (
              <div className="border border-gray-100 rounded-sm p-12 text-center">
                <div className="w-12 h-12 bg-black rounded-sm flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-lg">✓</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">Message received.</h2>
                <p className="text-sm text-gray-500">We will get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-gray-100 rounded-sm p-8 lg:p-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Full Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Smith" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Email *</label>
                    <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-300" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Company</label>
                    <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Acme Inc." className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-300" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Monthly Ad Budget</label>
                    <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors text-gray-600 bg-white">
                      <option value="">Select range</option>
                      <option>Under $10K</option>
                      <option>$10K – $50K</option>
                      <option>$50K – $200K</option>
                      <option>$200K – $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your goals, current challenges, or what you would like to discuss..." className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none placeholder:text-gray-300" />
                </div>
                <button type="submit" className="bg-black text-white text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-sm hover:bg-gray-900 transition-colors w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
