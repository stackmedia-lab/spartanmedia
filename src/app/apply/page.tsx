'use client';
import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const steps = [
  { num: '01', label: 'Apply', desc: 'Complete this form with details about your brand and goals.' },
  { num: '02', label: 'Audit', desc: 'We review your ad accounts and prepare a detailed audit report.' },
  { num: '03', label: 'Strategy Call', desc: '60-minute strategy session to review findings and recommendations.' },
  { num: '04', label: 'Proposal', desc: 'Receive a custom engagement proposal tailored to your needs.' },
];

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', website: '', role: '',
    budget: '', channels: [] as string[], revenue: '', goals: '', timeline: '', extra: '',
  });

  const channelOptions = ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Snapchat Ads', 'Pinterest Ads', 'YouTube Ads', 'Amazon Ads', 'Programmatic', 'Other'];

  const toggleChannel = (c: string) => {
    setForm(f => ({
      ...f,
      channels: f.channels.includes(c) ? f.channels.filter(x => x !== c) : [...f.channels, c],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium">// Apply Now</p>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Apply for a<br />
              <span className="italic font-light">free account audit.</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Complete the form below and we'll perform a comprehensive audit of your existing ad accounts — completely free, no strings attached.
            </p>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <div className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-7 h-7 rounded-sm flex-shrink-0 flex items-center justify-center text-xs font-semibold ${i === 0 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                {i === 0 ? <Check size={12} /> : s.num.replace('0', '')}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider">{s.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed hidden sm:block">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="border border-gray-100 rounded-sm p-16 text-center">
              <div className="w-14 h-14 bg-black rounded-sm flex items-center justify-center mx-auto mb-8">
                <Check size={20} className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Application received.</h2>
              <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed mb-8">
                Thank you for applying. Our team will review your details and reach out within 1–2 business days with next steps.
              </p>
              <div className="border border-gray-100 rounded-sm p-6 text-left max-w-xs mx-auto">
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-medium">What happens next?</p>
                <ul className="space-y-2">
                  {['Team reviews your application', 'We audit your ad accounts', 'Book a strategy call', 'Receive your custom proposal'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="text-black font-mono">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1 */}
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium border-b border-gray-100 pb-4">About You</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Jane Smith', required: true },
                    { label: 'Work Email', key: 'email', type: 'email', placeholder: 'jane@company.com', required: true },
                    { label: 'Company Name', key: 'company', type: 'text', placeholder: 'Acme Inc.', required: true },
                    { label: 'Website', key: 'website', type: 'url', placeholder: 'https://acme.com', required: false },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">
                        {field.label} {field.required && '*'}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form] as string}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors placeholder:text-gray-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium border-b border-gray-100 pb-4">Your Advertising</p>
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Monthly Ad Budget *</label>
                      <select
                        required
                        value={form.budget}
                        onChange={e => setForm({ ...form, budget: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors text-gray-600 bg-white"
                      >
                        <option value="">Select range</option>
                        <option>Under $10K/mo</option>
                        <option>$10K – $50K/mo</option>
                        <option>$50K – $200K/mo</option>
                        <option>$200K – $1M/mo</option>
                        <option>$1M+/mo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Monthly Revenue</label>
                      <select
                        value={form.revenue}
                        onChange={e => setForm({ ...form, revenue: e.target.value })}
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors text-gray-600 bg-white"
                      >
                        <option value="">Select range</option>
                        <option>Under $50K/mo</option>
                        <option>$50K – $250K/mo</option>
                        <option>$250K – $1M/mo</option>
                        <option>$1M – $10M/mo</option>
                        <option>$10M+/mo</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-3">Active Channels (select all that apply)</label>
                    <div className="flex flex-wrap gap-2">
                      {channelOptions.map(c => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => toggleChannel(c)}
                          className={`px-3 py-2 text-xs rounded-sm border transition-colors font-medium ${
                            form.channels.includes(c)
                              ? 'bg-black text-white border-black'
                              : 'border-gray-200 text-gray-500 hover:border-gray-400'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium border-b border-gray-100 pb-4">Your Goals</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Primary Growth Goals *</label>
                    <textarea
                      required
                      rows={3}
                      value={form.goals}
                      onChange={e => setForm({ ...form, goals: e.target.value })}
                      placeholder="e.g. We want to scale from $50K to $200K/mo in ad spend while maintaining a 5x ROAS. Currently our CAC is too high on Meta..."
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Ideal Start Timeline</label>
                    <select
                      value={form.timeline}
                      onChange={e => setForm({ ...form, timeline: e.target.value })}
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors text-gray-600 bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option>ASAP — within 2 weeks</option>
                      <option>1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-gray-400 font-medium mb-2">Anything else we should know?</label>
                    <textarea
                      rows={3}
                      value={form.extra}
                      onChange={e => setForm({ ...form, extra: e.target.value })}
                      placeholder="Any context about your business, competitors, past agency experience, or specific challenges..."
                      className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none placeholder:text-gray-300"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group w-full bg-black text-white text-xs tracking-widest uppercase font-semibold py-4 rounded-sm hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                Submit Application <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <p className="text-xs text-gray-400 text-center">
                By submitting, you agree to our privacy policy. We'll respond within 1–2 business days.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
