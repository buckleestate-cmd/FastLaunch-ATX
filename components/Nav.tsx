'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

function Logo({ light }: { light?: boolean }) {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
      <Image src="/austin-emblem.png" alt="FastLaunch ATX" width={42} height={42} style={{ borderRadius: '50%' }} />
      <span style={{ lineHeight: 1, textAlign: 'left' }}>
        <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em', color: light ? 'var(--paper-50)' : 'var(--ink-800)' }}>
          FastLaunch<span style={{ color: 'var(--orange-500)' }}> ATX</span>
        </span>
      </span>
    </Link>
  )
}

function NavLink({ href, active, label }: { href: string; active: boolean; label: string }) {
  const [hover, setHover] = React.useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '8px 14px',
        fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600,
        color: active ? 'var(--orange-400)' : hover ? 'var(--paper-50)' : 'rgba(250,250,250,0.78)',
        borderRadius: 8, transition: 'color 160ms', textDecoration: 'none',
      }}
    >
      {label}
    </Link>
  )
}

export function Nav() {
  const pathname = usePathname()
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--ink-900)', borderBottom: '1px solid rgba(250,250,250,0.10)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo light />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="nav-links">
          {NAV_LINKS.map(l => <NavLink key={l.href} href={l.href} active={pathname === l.href} label={l.label} />)}
        </nav>
        <div className="nav-cta">
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button size="sm">Book Free Consultation <ArrowRight size={15} /></Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

const FOOTER_COLS = [
  { h: 'Company', items: [{ label: 'Home', href: '/' }, { label: 'Explore', href: '/explore' }, { label: 'Solutions', href: '/solutions' }, { label: 'Pricing', href: '/pricing' }] },
  { h: 'Industries', items: [{ label: 'Restaurants', href: '/solutions' }, { label: 'Fitness', href: '/solutions' }, { label: 'Contractors', href: '/solutions' }, { label: 'Real Estate', href: '/solutions' }] },
  { h: 'Get started', items: [{ label: 'Contact', href: '/contact' }, { label: 'Book a call', href: '/contact' }, { label: 'Referral program', href: '/pricing' }] },
]

function FooterLink({ href, label }: { href: string; label: string }) {
  const [hover, setHover] = React.useState(false)
  return (
    <Link href={href} onMouseEnter={() => setHover(false)} onMouseLeave={() => setHover(false)}
      style={{ textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 15, color: hover ? 'var(--paper-50)' : 'var(--fg-on-dark-2)', transition: 'color 160ms' }}>
      {label}
    </Link>
  )
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--ink-900)', color: 'var(--fg-on-dark-2)', padding: '72px 0 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between' }}>
          <div style={{ maxWidth: 320 }}>
            <Logo light />
            <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.6, color: 'var(--fg-on-dark-3)' }}>
              Austin small-business websites delivered in 3–5 days. One flat fee. No surprises.
            </p>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--fg-on-dark-3)', fontSize: 14 }}>
              <MapPin size={16} color="var(--orange-400)" /> Austin, Texas
            </div>
          </div>
          {FOOTER_COLS.map(c => (
            <div key={c.h}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-on-dark-3)', marginBottom: 16 }}>{c.h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {c.items.map(it => <FooterLink key={it.label} href={it.href} label={it.label} />)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 56, paddingTop: 26, borderTop: '1px solid rgba(250,250,250,0.10)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13.5, color: 'var(--fg-on-dark-3)' }}>
          <span>© 2026 FastLaunch ATX · Launch Fast. Grow Faster.</span>
          <span>Built in Austin, TX</span>
        </div>
      </div>
    </footer>
  )
}
