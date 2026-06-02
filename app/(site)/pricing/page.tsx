import Link from 'next/link'
import { ArrowRight, Check, ShieldCheck, Gift, X } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const INCLUDED = [
  'Up to 5 Pages', 'Mobile Responsive Design', 'Contact Forms',
  'Google Maps Integration', 'Basic SEO Setup', 'Custom Domain Connection',
  'Website Launch Support', 'Free 30-Minute Consultation',
]

const NOT_DOING = [
  'Custom Software', 'Mobile Apps', 'Custom CRMs', 'Marketplace Platforms',
  'Membership Platforms', 'Complex Ecommerce Stores', 'Large Enterprise Websites', 'Ongoing Software Development',
]

export default function PricingPage() {
  return (
    <div>
      <Section bg="var(--ink-800)" pad="100px 0 132px">
        <Container>
          <Reveal style={{ textAlign: 'center' }}>
            <Eyebrow color="var(--orange-400)">Pricing</Eyebrow>
            <h1 style={{ margin: '14px auto 0', maxWidth: 720, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', letterSpacing: '-0.022em', lineHeight: 1.05, color: 'var(--paper-50)' }}>
              One Price. No Surprises.
            </h1>
            <p style={{ margin: '18px auto 0', maxWidth: 520, fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--fg-on-dark-2)' }}>
              No tiers, no upsells, no hidden fees. Just one flat fee for a website that gets you online.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="var(--bg-cream)" pad="0 0 100px">
        <Container narrow>
          <Reveal>
            <div style={{ marginTop: -64, background: '#fff', borderRadius: 'var(--r-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="grid-2">
                <div style={{ padding: 'clamp(28px,4vw,44px)', borderRight: '1px solid var(--line-light)' }} className="price-left">
                  <Eyebrow>The complete website</Eyebrow>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18, whiteSpace: 'nowrap' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem, 2rem + 5vw, 4.6rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink-800)' }}>$800</span>
                    <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--fg-3)' }}>flat fee</span>
                  </div>
                  <p style={{ marginTop: 14, fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-3)' }}>
                    Everything you need to launch a professional website for your small business — delivered in 3–5 days.
                  </p>
                  <div style={{ marginTop: 26 }}>
                    <Link href="/contact" style={{ textDecoration: 'none', display: 'block' }}>
                      <Button size="lg" style={{ width: '100%', justifyContent: 'center' }}>
                        Book Free Consultation <ArrowRight size={18} />
                      </Button>
                    </Link>
                  </div>
                  <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 13.5, color: 'var(--fg-3)' }}>
                    <ShieldCheck size={16} color="var(--sage-500)" /> No deposit to book a call
                  </div>
                </div>
                <div style={{ padding: 'clamp(28px,4vw,44px)', background: 'var(--paper-100)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 18 }}>
                    {"What's included"}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                    {INCLUDED.map(it => (
                      <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15.5, fontWeight: 500, color: 'var(--fg-1)' }}>
                        <span style={{ width: 22, height: 22, borderRadius: 99, background: 'var(--orange-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                          <Check size={13} color="var(--orange-600)" />
                        </span>
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap', padding: '28px 32px', borderRadius: 'var(--r-xl)', background: 'var(--sage-500)', color: '#fff' }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <Gift size={28} />
              </div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 700, letterSpacing: '-0.01em' }}>Referral program</h3>
                <p style={{ margin: '6px 0 0', fontSize: 15.5, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)' }}>
                  Refer a business. If they become a customer, <strong>you get $100</strong> and <strong>they get $100 off.</strong>
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section bg="var(--bg-light)" pad="0 0 112px">
        <Container>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
              <Eyebrow>Honest scope</Eyebrow>
              <h2 style={{ margin: '14px 0 12px', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', letterSpacing: '-0.02em', color: 'var(--ink-800)' }}>
                What we don&apos;t do
              </h2>
              <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: 'var(--fg-3)' }}>
                We specialize in fast, professional websites for small businesses. If you need any of these, we&apos;ll happily point you elsewhere.
              </p>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, maxWidth: 920, margin: '0 auto' }} className="grid-4">
            {NOT_DOING.map((n, idx) => (
              <Reveal key={n} delay={(idx % 4) * 50}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '15px 16px', borderRadius: 'var(--r-md)', background: '#fff', border: '1px solid var(--line-light)', height: '100%', boxSizing: 'border-box' }}>
                  <X size={16} color="var(--stone-400)" />
                  <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--fg-2)' }}>{n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
