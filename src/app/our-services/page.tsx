import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, BarChart3, TrendingUp, Zap, LineChart, Globe, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services — Spartan Media',
  description: 'Full-service performance media buying: paid social, paid search, programmatic, creative strategy, analytics, and more.',
};

const services = [
  {
    icon: Target,
    num: '001',
    title: 'Paid Social',
    subtitle: 'Meta · TikTok · Snapchat · Pinterest · LinkedIn',
    desc: 'Full-funnel paid social campaigns engineered for measurable outcomes. We handle everything from account architecture and audience strategy to creative testing and daily optimisation across every major social platform.',
    features: ['Campaign architecture & structure', 'Audience research & segmentation', 'Creative testing frameworks', 'Funnel strategy (TOF / MOF / BOF)', 'Daily bid & budget optimisation', 'Monthly performance reporting'],
  },
  {
    icon: BarChart3,
    num: '002',
    title: 'Paid Search',
    subtitle: 'Google Ads · Microsoft Bing',
    desc: 'Intent-driven search campaigns built to capture demand and convert at scale. From keyword strategy to ad copy and landing page alignment, we engineer paid search programs that consistently deliver profitable growth.',
    features: ['Keyword research & mapping', 'Search & Shopping campaigns', 'Smart bidding strategy', 'Ad copy & extension optimisation', 'Quality Score improvement', 'Competitor conquest strategies'],
  },
  {
    icon: TrendingUp,
    num: '003',
    title: 'Programmatic Display',
    subtitle: 'DV360 · The Trade Desk · Amazon DSP',
    desc: 'DSP-powered display, video, and connected TV buying with precision audience targeting. We leverage first and third-party data to reach your ideal customer across the open web at scale.',
    features: ['DSP setup & management', 'Audience data strategy', 'Display & rich media creative', 'Video & CTV campaigns', 'Brand safety controls', 'Cross-channel attribution'],
  },
  {
    icon: Zap,
    num: '004',
    title: 'Creative Strategy',
    subtitle: 'Concepts · Scripts · Briefs · Testing',
    desc: 'Performance creative that stops the scroll and drives measurable action. We develop data-informed creative strategies, write production briefs, and run systematic testing to identify winning angles and formats.',
    features: ['Creative audit & gap analysis', 'Ad concept development', 'UGC & static ad briefs', 'Video script writing', 'A/B creative testing systems', 'Creative performance reporting'],
  },
  {
    icon: LineChart,
    num: '005',
    title: 'Analytics & Attribution',
    subtitle: 'GA4 · Triple Whale · Northbeam · Custom',
    desc: 'Robust measurement infrastructure so you always know what is working. We implement multi-touch attribution models, build live performance dashboards, and provide the data clarity needed to make confident scaling decisions.',
    features: ['Attribution model setup', 'GA4 & pixel implementation', 'Live reporting dashboards', 'LTV & cohort analysis', 'ROAS & CAC modelling', 'Weekly data reviews'],
  },
  {
    icon: Globe,
    num: '006',
    title: 'Growth Strategy',
    subtitle: 'Audit · Roadmap · Consulting',
    desc: 'For brands that need a strategic partner, not just a media buyer. We conduct deep account audits, build 90-day growth roadmaps, and provide ongoing strategic consultation to align paid media with your broader business goals.',
    features: ['Full account audit', '90-day growth roadmap', 'Budget allocation modelling', 'Channel expansion strategy', 'Competitor landscape analysis', 'Quarterly business reviews'],
  },
];

const platforms = ['Meta Ads', 'Google Ads', 'TikTok Ads', 'LinkedIn Ads', 'Snapchat Ads', 'Pinterest Ads', 'Microsoft Bing', 'Amazon DSP', 'DV360', 'The Trade Desk', 'YouTube Ads', 'Reddit Ads', 'Connected TV'];

export default function OurServicesPage() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium">// Our Services</p>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
              Everything you need<br />
              <span className="italic font-light">to scale paid media.</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-md">
              We offer the full stack of performance media buying services — from strategy and creative to execution and reporting. One team, every channel.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={i} className="border border-gray-100 rounded-sm hover:border-gray-300 transition-colors group">
                <div className="p-8 lg:p-10">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon size={16} className="text-white" />
                        </div>
                        <span className="text-xs tracking-widest text-gray-300 font-mono">// {service.num}</span>
                      </div>
                      <h2 className="text-2xl font-semibold mb-1">{service.title}</h2>
                      <p className="text-xs text-gray-400 tracking-wide">{service.subtitle}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <ul className="space-y-2">
                        {service.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-gray-500">
                            <span className="text-black mt-0.5 flex-shrink-0">—</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-12 font-medium">Platforms We Buy On</p>
          <div className="flex flex-wrap gap-3">
            {platforms.map(p => (
              <span key={p} className="border border-gray-200 rounded-sm px-4 py-2 text-xs font-medium text-gray-600 tracking-wide bg-white">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-2">Not sure which service you need?</h2>
            <p className="text-gray-400 text-sm max-w-lg">Apply for a free audit and we will map the right services to your growth goals.</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/apply" className="group flex items-center gap-2 bg-white text-black text-xs tracking-widest uppercase font-semibold px-6 py-3.5 rounded-sm hover:bg-gray-100 transition-colors">
              Get Free Audit <ArrowUpRight size={13} />
            </Link>
            <Link href="/prices" className="text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors font-medium">
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
