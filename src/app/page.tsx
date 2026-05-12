'use client';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Target, Zap, BarChart3, Users, DollarSign } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatBlock({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="border-l border-gray-200 pl-8">
      <p className="text-4xl lg:text-5xl font-semibold tracking-tight text-black">
        {count}{suffix}
      </p>
      <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{label}</p>
    </div>
  );
}

const clients = ['Meta', 'Google', 'TikTok', 'Snapchat', 'LinkedIn', 'Pinterest', 'YouTube', 'Amazon', 'Meta', 'Google', 'TikTok', 'Snapchat', 'LinkedIn', 'Pinterest', 'YouTube', 'Amazon'];

const services = [
  { icon: Target, label: 'Paid Social', desc: 'Meta, TikTok, Snapchat, Pinterest — full-funnel campaigns built to convert.' },
  { icon: BarChart3, label: 'Paid Search', desc: 'Google & Bing campaigns engineered for intent-driven performance at scale.' },
  { icon: TrendingUp, label: 'Programmatic', desc: 'DSP-powered display and video buying with precision audience targeting.' },
  { icon: Zap, label: 'Creative Strategy', desc: 'Ad creative that stops the scroll and drives measurable action.' },
];

const caseStudies = [
  { tag: 'E-Commerce', title: 'Fashion brand scaled to $2.4M/mo', roas: '6.8x', cac: '-42%', spend: '$180K/mo' },
  { tag: 'SaaS', title: 'B2B platform cut CAC by 61%', roas: '4.2x', cac: '-61%', spend: '$95K/mo' },
  { tag: 'DTC', title: 'Supplement brand 3x\'d revenue in 90 days', roas: '8.1x', cac: '-38%', spend: '$210K/mo' },
];

export default function HomePage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  // Scroll animate
  useEffect(() => {
    const els = document.querySelectorAll('.animate-in');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col justify-center pt-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-6 font-medium">
                // Performance Media Buying
              </p>
              <h1 className="text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-black mb-6">
                Scale your<br />
                <span className="italic font-light">ad spend.</span><br />
                Build with data.
              </h1>
              <p className="text-base text-gray-500 leading-relaxed max-w-md mb-10">
                Deploy precision media buying across every major platform. We turn advertising budgets into measurable revenue for ambitious brands.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/apply"
                  className="group bg-black text-white text-xs tracking-widest uppercase font-semibold px-7 py-4 rounded-sm hover:bg-gray-900 transition-colors flex items-center gap-2"
                >
                  Apply Now <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/case-studies"
                  className="text-xs tracking-widest uppercase font-medium text-gray-400 hover:text-black transition-colors flex items-center gap-1.5"
                >
                  See Results →
                </Link>
              </div>
            </div>

            {/* Right panel */}
            <div className="hidden lg:block">
              <div className="bg-[#0A0A0A] rounded-sm p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, white 20px, white 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, white 20px, white 21px)'}} />
                </div>
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-8 relative z-10">Live Campaign Snapshot</p>
                <div className="space-y-5 relative z-10">
                  {[
                    { label: 'Meta Ads', roas: '7.2x', trend: '+12%', color: 'bg-blue-500' },
                    { label: 'Google Search', roas: '5.8x', trend: '+8%', color: 'bg-yellow-500' },
                    { label: 'TikTok Ads', roas: '9.1x', trend: '+31%', color: 'bg-red-500' },
                  ].map(item => (
                    <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-8 ${item.color} rounded-full`} />
                        <div>
                          <p className="text-white text-sm font-medium">{item.label}</p>
                          <p className="text-gray-500 text-xs">{item.trend} this week</p>
                        </div>
                      </div>
                      <p className="text-white text-xl font-semibold">{item.roas}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Avg ROAS</p>
                      <p className="text-white text-2xl font-semibold mt-0.5">7.4x</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Ad Spend</p>
                      <p className="text-white text-2xl font-semibold mt-0.5">$2.1M</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Revenue</p>
                      <p className="text-white text-2xl font-semibold mt-0.5">$15.5M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-y border-gray-100 py-4 overflow-hidden bg-[#0A0A0A]">
        <div className="marquee-track">
          {[...clients, ...clients].map((c, i) => (
            <span key={i} className="text-xs tracking-widest uppercase text-gray-400 mx-8 font-medium whitespace-nowrap">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section ref={statsRef} className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-12 font-medium">By the numbers</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <StatBlock value={180} suffix="M+" label="Ad Spend Managed" start={statsVisible} />
            <StatBlock value={7} suffix=".4x" label="Average ROAS" start={statsVisible} />
            <StatBlock value={120} suffix="+" label="Brands Scaled" start={statsVisible} />
            <StatBlock value={94} suffix="%" label="Client Retention" start={statsVisible} />
          </div>
        </div>
      </section>

      {/* ── MARQUEE TEXT ── */}
      <div className="py-6 border-y border-gray-100 overflow-hidden">
        <div className="marquee-track">
          {Array(8).fill(0).map((_, i) => (
            <span key={i} className="text-3xl lg:text-5xl font-semibold tracking-tight text-black/5 mx-8 whitespace-nowrap uppercase">
              Performance · Precision · Scale ·
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-28 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium">Capabilities</p>
              <h2 className="text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
                Tailored media buying for modern brands.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed max-w-md mb-8">
                We bridge the gap between ad spend and business outcomes through data-driven strategy, precise targeting, and relentless optimization.
              </p>
              <Link
                href="/our-services"
                className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-black hover:gap-3 transition-all"
              >
                View All Services <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="animate-in border border-gray-100 p-6 rounded-sm hover:border-gray-300 transition-colors group">
                  <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon size={15} className="text-white" />
                  </div>
                  <p className="font-semibold text-sm mb-2">{label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES PREVIEW ── */}
      <section className="py-28 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-3 font-medium">Our Works</p>
              <h2 className="text-4xl font-semibold tracking-tight">Results that speak.</h2>
            </div>
            <Link href="/case-studies" className="hidden sm:flex items-center gap-1.5 text-xs tracking-widest uppercase font-medium text-gray-400 hover:text-black transition-colors">
              All Case Studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs, i) => (
              <Link key={i} href="/case-studies" className="animate-in group bg-white border border-gray-100 rounded-sm p-8 hover:border-gray-300 hover:shadow-sm transition-all">
                <p className="text-xs tracking-widest uppercase text-gray-400 font-medium mb-4">{cs.tag}</p>
                <h3 className="text-base font-semibold mb-6 leading-snug">{cs.title}</h3>
                <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xl font-semibold">{cs.roas}</p>
                    <p className="text-xs text-gray-400 tracking-wide uppercase mt-0.5">ROAS</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-green-600">{cs.cac}</p>
                    <p className="text-xs text-gray-400 tracking-wide uppercase mt-0.5">CAC</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{cs.spend}</p>
                    <p className="text-xs text-gray-400 tracking-wide uppercase mt-0.5">Spend</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS TEASER ── */}
      <section className="py-28 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium">Our Process</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-xl">
              From audit to scale. Our iterative growth cycle.
            </h2>
            <Link href="/workflow" className="text-xs tracking-widest uppercase font-medium text-gray-400 hover:text-black transition-colors whitespace-nowrap">
              Full Workflow →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', label: 'Strategic Audit', desc: 'Deep-layer analysis of your current ad account, funnel, and competitors.' },
              { num: '02', label: 'Account Architecture', desc: 'Custom campaign structure built for your goals and budget.' },
              { num: '03', label: 'Rapid Testing', desc: 'Systematic creative and audience testing to find winners fast.' },
              { num: '04', label: 'Scale & Optimize', desc: 'Aggressive scaling of winning campaigns with daily optimization.' },
            ].map(step => (
              <div key={step.num} className="animate-in border-t-2 border-black pt-6">
                <p className="text-xs tracking-widest text-gray-300 font-mono mb-4">// {step.num}</p>
                <p className="font-semibold text-sm mb-2">{step.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-12 font-medium">Experiences</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Marcus Chen', role: 'CMO, HealthBrands', quote: 'Spartan Media reduced our CAC by 52% within the first 60 days. Their systematic approach to media buying is unlike anything we\'ve seen.' },
              { name: 'Sarah Williams', role: 'Founder, DTC Apparel Co.', quote: 'From $50K to $300K monthly ad spend with 7x ROAS maintained. The team genuinely understands performance marketing at scale.' },
              { name: 'David Kim', role: 'VP Growth, SaaS Platform', quote: 'They rebuilt our entire paid acquisition engine. Pipeline quality improved dramatically alongside the volume increase.' },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-white/20 transition-colors">
                <p className="text-gray-300 text-sm leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <p className="text-white text-xs font-semibold tracking-wide uppercase">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-28 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-4 font-medium">Get Started</p>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
            We don't just manage ads.<br />
            <span className="italic font-light">We engineer growth.</span>
          </h2>
          <p className="text-gray-500 text-base mb-10 max-w-lg mx-auto leading-relaxed">
            Apply to work with Spartan Media and we'll audit your current ad account for free.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/apply" className="bg-black text-white text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-sm hover:bg-gray-900 transition-colors">
              Apply Now — It's Free
            </Link>
            <Link href="/prices" className="text-xs tracking-widest uppercase font-medium text-gray-400 hover:text-black transition-colors">
              View Pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
