import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies — Spartan Media',
  description: 'Real results from real brands. See how Spartan Media scales ad spend into revenue.',
};

const caseStudies = [
  {
    tag: 'E-Commerce · Fashion',
    title: 'DTC Fashion Brand Scaled to $2.4M/mo Revenue',
    description: 'A direct-to-consumer fashion brand came to us spending $30K/mo on Meta with a 2.1x ROAS and rising CAC. Within 90 days we rebuilt their account architecture, launched a systematic creative testing program, and expanded to TikTok. Today they\'re spending $180K/mo at a sustained 6.8x ROAS.',
    stats: [
      { label: 'ROAS', value: '6.8x', change: 'from 2.1x' },
      { label: 'CAC Reduction', value: '-42%', change: 'in 90 days' },
      { label: 'Monthly Spend', value: '$180K', change: 'from $30K' },
      { label: 'Revenue', value: '$2.4M', change: 'per month' },
    ],
    channels: ['Meta Ads', 'TikTok Ads', 'Google Shopping'],
    duration: '6 months',
  },
  {
    tag: 'SaaS · B2B',
    title: 'B2B SaaS Platform Cut Customer Acquisition Cost by 61%',
    description: 'A Series B SaaS company was spending $95K/mo across LinkedIn and Google with a $480 blended CAC that made their unit economics unviable. We rebuilt their LinkedIn campaign structure, optimised their Google search campaigns, and introduced a retargeting program. CAC dropped to $187 while pipeline volume doubled.',
    stats: [
      { label: 'CAC', value: '-61%', change: '$480 → $187' },
      { label: 'Pipeline Volume', value: '2x', change: 'increase' },
      { label: 'ROAS', value: '4.2x', change: 'blended' },
      { label: 'Monthly Spend', value: '$95K', change: 'maintained' },
    ],
    channels: ['LinkedIn Ads', 'Google Ads', 'Retargeting'],
    duration: '4 months',
  },
  {
    tag: 'DTC · Health & Wellness',
    title: 'Supplement Brand 3x\'d Revenue in 90 Days',
    description: 'A health supplement brand with strong organic traction but minimal paid presence. We built a full paid social program from scratch — Meta, TikTok, and YouTube — with a creative strategy built around UGC and testimonials. Revenue tripled in 90 days and the brand raised a $12M Series A.',
    stats: [
      { label: 'Revenue Growth', value: '3x', change: 'in 90 days' },
      { label: 'ROAS', value: '8.1x', change: 'Meta average' },
      { label: 'CAC Reduction', value: '-38%', change: 'vs. baseline' },
      { label: 'Monthly Spend', value: '$210K', change: 'at peak' },
    ],
    channels: ['Meta Ads', 'TikTok Ads', 'YouTube Ads'],
    duration: '5 months',
  },
  {
    tag: 'Retail · CPG',
    title: 'CPG Brand Launched Nationally on $59K/mo Ad Budget',
    description: 'A consumer goods brand entering the US market with no digital advertising history. We built a launch strategy across Meta and Google Shopping, developed their first performance creative, and scaled from zero to national distribution awareness in under 6 months.',
    stats: [
      { label: 'ROAS', value: '5.3x', change: 'at launch' },
      { label: 'Revenue', value: '$1.8M', change: 'first 6 months' },
      { label: 'Monthly Spend', value: '$59K', change: 'launch budget' },
      { label: 'Partnerships', value: '28', change: 'retail doors' },
    ],
    channels: ['Meta Ads', 'Google Shopping', 'Display'],
    duration: '6 months',
  },
  {
    tag: 'Cybersecurity · Enterprise',
    title: 'Enterprise Security Firm Generated $94M in Pipeline',
    description: 'An enterprise cybersecurity company with a long sales cycle needed to build a digital pipeline at scale. We developed a full-funnel LinkedIn and Google Ads strategy, built targeted ABM programs for key verticals, and created a remarketing infrastructure that nurtured prospects over a 90-day window.',
    stats: [
      { label: 'Pipeline Generated', value: '$94M', change: 'in 12 months' },
      { label: 'ROAS', value: '12x', change: 'pipeline to spend' },
      { label: 'CAC', value: '-66%', change: 'vs. previous agency' },
      { label: 'Partnerships', value: '12', change: 'enterprise deals' },
    ],
    channels: ['LinkedIn Ads', 'Google Ads', 'Programmatic'],
    duration: '12 months',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium">// Case Studies</p>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
              Results that<br />
              <span className="italic font-light">speak for themselves.</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              Real numbers. Real brands. Real growth. Every case study below represents a systematic approach to performance media buying that moved the needle.
            </p>
          </div>
        </div>
      </section>

      {/* Aggregate stats */}
      <div className="border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { val: '$180M+', label: 'Total Ad Spend Managed' },
            { val: '7.4x', label: 'Average Client ROAS' },
            { val: '120+', label: 'Successful Campaigns' },
            { val: '-48%', label: 'Avg CAC Reduction' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-semibold tracking-tight">{s.val}</p>
              <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Case studies list */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-6">
          {caseStudies.map((cs, i) => (
            <div key={i} className="border border-gray-100 rounded-sm hover:border-gray-300 transition-colors overflow-hidden">
              <div className="p-8 lg:p-12">
                <p className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-4">{cs.tag}</p>
                <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5">
                    <h2 className="text-xl lg:text-2xl font-semibold mb-4 leading-snug">{cs.title}</h2>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">{cs.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.channels.map(c => (
                        <span key={c} className="border border-gray-200 rounded-sm px-3 py-1 text-xs text-gray-500">{c}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">Engagement duration: <span className="font-medium text-gray-600">{cs.duration}</span></p>
                  </div>
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-2 gap-4">
                      {cs.stats.map((stat, j) => (
                        <div key={j} className="bg-gray-50 rounded-sm p-5">
                          <p className="text-3xl font-semibold tracking-tight mb-1">{stat.value}</p>
                          <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">{stat.label}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{stat.change}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">Your brand could be next.</h2>
            <p className="text-gray-400 text-sm">Apply for a free audit and see what's possible for your ad accounts.</p>
          </div>
          <Link href="/apply" className="group flex items-center gap-2 bg-white text-black text-xs tracking-widest uppercase font-semibold px-6 py-3.5 rounded-sm hover:bg-gray-100 transition-colors">
            Apply Now <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
