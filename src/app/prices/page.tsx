'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    tier: 'Core',
    monthly: 2500,
    annual: 2000,
    desc: 'Ideal for brands spending $10K–$50K/mo ready to build a professional media buying operation.',
    features: ['1 paid channel managed', 'Campaign setup & structure', 'Monthly creative briefs (3)', 'Bi-weekly performance reports', 'Shared account manager', 'Email support'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    tier: 'Growth',
    monthly: 5500,
    annual: 4400,
    desc: 'For brands spending $50K–$200K/mo who need a full-service performance partner across channels.',
    features: ['3 paid channels managed', 'Full account architecture', 'Monthly creative briefs (8)', 'Weekly performance reports', 'Dedicated account manager', 'Analytics & attribution setup', 'Priority Slack support', 'Monthly strategy sessions'],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    tier: 'Pro',
    monthly: 10500,
    annual: 8400,
    desc: 'For brands spending $200K–$1M/mo who need enterprise-grade media management and creative strategy.',
    features: ['All channels managed', 'Custom creative strategy', 'Unlimited creative briefs', 'Daily performance reports', 'Senior dedicated team', 'Custom attribution model', '24/7 Slack support', 'Weekly strategy sessions', 'Quarterly roadmap reviews'],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    tier: 'Scale',
    monthly: null,
    annual: null,
    desc: 'For brands spending $1M+/mo who need a fully embedded media buying partner.',
    features: ['Full media buying team', 'Bespoke creative studio', 'Real-time reporting dashboard', 'Dedicated Head of Media', 'Custom SLA & contracts', 'On-site strategy sessions', 'Board-level reporting', 'Equity & performance deals available'],
    cta: 'Contact Us',
    highlighted: false,
  },
];

const faqs = [
  { q: 'How do you charge — retainer or percentage of spend?', a: 'We charge a flat monthly management fee. This keeps our incentives aligned with performance rather than spend volume. No hidden percentages or performance bonuses.' },
  { q: 'Is there a minimum ad spend requirement?', a: 'Yes. For Core we recommend a minimum of $10K/mo in ad spend. Growth requires $50K+, Pro requires $200K+, and Scale is for $1M+ budgets.' },
  { q: 'Do you require long-term contracts?', a: 'All plans are billed monthly. We offer a 20% discount for annual commitments paid upfront. We do not lock clients in — our retention comes from performance.' },
  { q: 'What is included in the free audit?', a: 'The free audit covers your ad account structure, creative performance, audience strategy, attribution setup, and competitor positioning. You will receive a detailed report with specific recommendations regardless of whether you proceed.' },
  { q: 'How quickly can you onboard?', a: 'Onboarding typically takes 5–10 business days from signed agreement, including account access, strategy sessions, and campaign architecture before any spend goes live.' },
  { q: 'Do you provide ad creative?', a: 'We provide creative strategy, briefs, and copy on all plans. Full creative production is available as an add-on or we can manage your existing creative team.' },
];

export default function PricesPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <section className="pt-40 pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium">// Pricing</p>
          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6">
            Flexible tiers<br />
            <span className="italic font-light">built to scale with you.</span>
          </h1>
          <p className="text-base text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
            No hidden costs, no percentage-of-spend fees. Just high-performance media buying at a flat monthly rate.
          </p>
          <div className="inline-flex items-center gap-0 border border-gray-200 rounded-sm p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase font-medium rounded-sm transition-colors ${!annual ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 text-xs tracking-widest uppercase font-medium rounded-sm transition-colors ${annual ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
            >
              Annual <span className={`text-[10px] ml-1 ${annual ? 'text-white/70' : 'text-green-600'}`}>-20%</span>
            </button>
          </div>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan) => (
            <div key={plan.tier} className={`rounded-sm flex flex-col transition-all ${plan.highlighted ? 'bg-[#0A0A0A] text-white border border-black' : 'bg-white border border-gray-100 hover:border-gray-300'}`}>
              <div className="p-8 flex-1">
                <p className="text-xs tracking-widest uppercase font-medium mb-6 text-gray-400">{plan.tier}</p>
                {plan.monthly ? (
                  <div className="mb-2">
                    <span className="text-4xl font-semibold tracking-tight">
                      ${(annual ? plan.annual : plan.monthly)!.toLocaleString()}
                    </span>
                    <span className={`text-sm ml-1 ${plan.highlighted ? 'text-gray-400' : 'text-gray-400'}`}>/mo</span>
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="text-4xl font-semibold tracking-tight">Custom</span>
                  </div>
                )}
                <p className={`text-xs mb-1 ${plan.highlighted ? 'text-gray-500' : 'text-gray-400'}`}>
                  {annual && plan.annual ? 'Billed Annually' : plan.monthly ? 'Billed Monthly' : 'Contact for pricing'}
                </p>
                <p className={`text-sm mb-6 mt-4 leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check size={12} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-black'}`} />
                      <span className={`text-xs leading-relaxed ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <Link
                  href={plan.cta === 'Contact Us' ? '/contact' : '/apply'}
                  className={`w-full block text-center text-xs tracking-widest uppercase font-semibold px-5 py-3.5 rounded-sm transition-colors ${plan.highlighted ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-8">
          <div className="border border-gray-100 rounded-sm p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold mb-1">Need add-on services?</p>
              <p className="text-xs text-gray-500">Creative production, landing page builds, email marketing, and influencer sourcing available as add-ons on any plan.</p>
            </div>
            <Link href="/contact" className="text-xs tracking-widest uppercase font-medium text-black hover:text-gray-600 transition-colors whitespace-nowrap flex items-center gap-1">
              Ask us <ArrowUpRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium text-center">Common Questions</p>
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Everything you need to know.</h2>
          <div className="space-y-0 border border-gray-200 rounded-sm overflow-hidden bg-white">
            {faqs.map((faq, i) => (
              <details key={i} className={`group ${i > 0 ? 'border-t border-gray-100' : ''}`}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <p className="text-sm font-medium pr-4">{faq.q}</p>
                  <span className="text-gray-400 text-lg flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">Not sure which plan fits?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">Apply for a free account audit. We will recommend the right plan based on your goals and budget.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-black text-xs tracking-widest uppercase font-semibold px-7 py-4 rounded-sm hover:bg-gray-100 transition-colors">
            Get Free Audit <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
