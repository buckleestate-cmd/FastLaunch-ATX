'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Utensils, Home, HeartPulse, ShoppingBag, Cpu, Dumbbell, Hammer, Briefcase, PartyPopper, Mic, HeartHandshake, AlertTriangle, Lightbulb, Check, Sparkles, ArrowRight, LucideIcon } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const SECTORS = [
  {
    id: 'food', name: 'Food, Beverage & Hospitality', icon: Utensils,
    problem: 'Customers decide where to eat on their phone — and a hard-to-read menu or missing hours sends them elsewhere.',
    matters: 'Your website is the new front window. It sets expectations before anyone walks in.',
    provides: ['Mobile-first menu pages', 'Hours, map & directions', 'Online reservation links', 'Photo-forward galleries'],
    benefit: 'Turn hungry searchers into walk-ins and bookings.',
  },
  {
    id: 'realestate', name: 'Real Estate', icon: Home,
    problem: 'Agents live and die by trust, but a generic profile page makes you blend in with everyone else.',
    matters: 'A polished site positions you as the local expert and captures leads while you sleep.',
    provides: ['Featured listings', 'Personal agent brand', 'Lead-capture forms', 'Neighborhood guides'],
    benefit: 'Look established, build trust, and book more showings.',
  },
  {
    id: 'wellness', name: 'Wellness & Healthcare', icon: HeartPulse,
    problem: 'Patients need to trust you instantly and find booking info without friction.',
    matters: 'A calm, professional site reassures patients and reduces no-shows.',
    provides: ['Services & specialties', 'Easy appointment booking', 'Insurance & FAQ', 'Practitioner bios'],
    benefit: 'Fill your calendar with the right patients.',
  },
  {
    id: 'retail', name: 'Retail & Artisanal Goods', icon: ShoppingBag,
    problem: 'Your products are beautiful in person but invisible online.',
    matters: 'A clean storefront site builds your brand and drives people in-store or to your shop.',
    provides: ['Product showcase', 'Story & brand pages', 'Stockist / hours info', 'Simple shop links'],
    benefit: 'Give your craft the storefront it deserves.',
  },
  {
    id: 'tech', name: 'Tech Services', icon: Cpu,
    problem: "You sell expertise, but a thin site makes prospects question your credibility.",
    matters: "A sharp, modern site signals you know what you're doing before the first call.",
    provides: ['Services & capabilities', 'Case studies', 'Clear contact path', 'Credibility markers'],
    benefit: 'Win bigger clients with a site that matches your skill.',
  },
  {
    id: 'fitness', name: 'Fitness', icon: Dumbbell,
    problem: 'Prospects shop around — without easy schedules and trial offers, they pick the competitor.',
    matters: 'Your site is the first rep. It should sell the trial and the transformation.',
    provides: ['Class schedules', 'Membership tiers', 'Free-trial sign-ups', 'Coach profiles'],
    benefit: 'Convert curious browsers into committed members.',
  },
  {
    id: 'construction', name: 'Construction', icon: Hammer,
    problem: 'Word of mouth only goes so far, and a missing site costs you the bigger jobs.',
    matters: 'A project gallery and easy quote form prove your work and capture serious leads.',
    provides: ['Project galleries', 'Quote-request forms', 'Service areas', 'Reviews & licenses'],
    benefit: 'Show off your work and land higher-value projects.',
  },
  {
    id: 'pro', name: 'Professional Services', icon: Briefcase,
    problem: 'Clients vet you online first — an outdated site quietly undermines your authority.',
    matters: 'A confident, clear site makes you the obvious, trustworthy choice.',
    provides: ['Service overview', 'Team & credentials', 'Consultation booking', 'Testimonials'],
    benefit: 'Book more discovery calls from qualified clients.',
  },
  {
    id: 'events', name: 'Events', icon: PartyPopper,
    problem: 'Couples and companies want proof you can deliver — and they want it fast.',
    matters: 'A vivid portfolio and quick inquiry path keep you in the running for every booking.',
    provides: ['Event portfolio', 'Inquiry forms', 'Packages & pricing', 'Client testimonials'],
    benefit: 'Capture inquiries while the excitement is high.',
  },
  {
    id: 'creators', name: 'Creators', icon: Mic,
    problem: 'Your audience is scattered across platforms with no home base you own.',
    matters: 'A hub site keeps every episode, link, and fan in one place you control.',
    provides: ['Content / episode hub', 'Listen & follow links', 'Newsletter capture', 'About & sponsorship'],
    benefit: 'Own your audience instead of renting it.',
  },
  {
    id: 'nonprofits', name: 'Nonprofits', icon: HeartHandshake,
    problem: "Great missions stall when supporters can't easily learn, give, or get involved.",
    matters: 'A clear, moving site turns visitors into donors and volunteers.',
    provides: ['Mission & impact', 'Donate / volunteer paths', 'Events & updates', 'Trust & transparency'],
    benefit: 'Grow support for the work that matters.',
  },
]

function Block({ icon: Icon, title, text, tone, toneBg }: {
  icon: LucideIcon; title: string; text: string; tone: string; toneBg: string
}) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: toneBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: tone }}>
          <Icon size={16} />
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 14.5, fontWeight: 700, color: 'var(--ink-800)' }}>{title}</span>
      </div>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--fg-3)' }}>{text}</p>
    </div>
  )
}

function SectorButton({ sector, active, onClick }: {
  sector: typeof SECTORS[0]; active: boolean; onClick: () => void
}) {
  const [hover, setHover] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', cursor: 'pointer',
        padding: '13px 16px', borderRadius: 'var(--r-sm)', border: 'none',
        background: active ? '#fff' : hover ? 'rgba(15,23,42,0.04)' : 'transparent',
        boxShadow: active ? 'var(--shadow-sm)' : 'none',
        transition: 'all 160ms var(--ease-out)',
      }}
    >
      <span style={{ flex: 'none', width: 34, height: 34, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', background: active ? 'var(--orange-50)' : 'rgba(15,23,42,0.04)', color: active ? 'var(--orange-600)' : 'var(--fg-3)' }}>
        <sector.icon size={18} />
      </span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, color: active ? 'var(--ink-800)' : 'var(--fg-2)' }}>
        {sector.name}
      </span>
    </button>
  )
}

export default function SolutionsClient() {
  const [active, setActive] = useState(SECTORS[0].id)
  const cur = SECTORS.find(s => s.id === active)!

  return (
    <div>
      <Section bg="var(--ink-800)" pad="92px 0 64px">
        <Container>
          <Reveal>
            <Eyebrow color="var(--orange-400)">Solutions by industry</Eyebrow>
            <h1 style={{ margin: '14px 0 0', maxWidth: 800, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', letterSpacing: '-0.022em', lineHeight: 1.06, color: 'var(--paper-50)' }}>
              A website built around how your business actually wins.
            </h1>
            <p style={{ marginTop: 18, maxWidth: 580, fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--fg-on-dark-2)' }}>
              Every industry has a different reason customers say yes. Pick yours and see how we build for it.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="var(--bg-cream)" pad="56px 0 112px">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 36, alignItems: 'start' }} className="sol-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }} className="sol-list">
              {SECTORS.map(s => (
                <SectorButton key={s.id} sector={s} active={active === s.id} onClick={() => setActive(s.id)} />
              ))}
            </div>

            <div key={cur.id} style={{ background: '#fff', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-md)', padding: 'clamp(28px, 4vw, 48px)', animation: 'fadeUp 420ms var(--ease-out)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 26 }}>
                <span style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <cur.icon size={28} />
                </span>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 1.1rem + 1.4vw, 2rem)', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink-800)' }}>{cur.name}</h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }} className="grid-2">
                <Block icon={AlertTriangle} title="The common problem" text={cur.problem} tone="var(--orange-600)" toneBg="var(--orange-50)" />
                <Block icon={Lightbulb} title="Why a website matters" text={cur.matters} tone="var(--sage-700)" toneBg="var(--sage-100)" />
              </div>

              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 16 }}>
                What FastLaunch ATX provides
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 30 }} className="grid-2">
                {cur.provides.map(p => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 16px', background: 'var(--paper-100)', borderRadius: 'var(--r-sm)', fontSize: 15, fontWeight: 600, color: 'var(--fg-2)' }}>
                    <span style={{ width: 22, height: 22, borderRadius: 99, background: 'var(--orange-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                      <Check size={13} color="#fff" />
                    </span>
                    {p}
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', padding: '22px 26px', borderRadius: 'var(--r-lg)', background: 'var(--ink-800)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Sparkles size={20} color="var(--orange-400)" />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--paper-50)', letterSpacing: '-0.01em' }}>{cur.benefit}</span>
                </div>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button size="sm">Book Free Consultation <ArrowRight size={15} /></Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
