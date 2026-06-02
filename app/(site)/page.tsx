import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, MonitorX, Smartphone, SearchX, CircleSlash, BadgeDollarSign, Zap, TrendingUp, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const INDUSTRIES = ['Gyms', 'Contractors', 'Restaurants', 'Event Companies', 'Barbershops', 'Podcasts', 'Real Estate', 'Consultants', 'Nonprofits']

const PROBLEMS = [
  { icon: MonitorX, title: 'Their website looks outdated', desc: 'A dated site quietly tells customers you might be out of business.' },
  { icon: Smartphone, title: "It doesn't work on mobile", desc: 'Most visitors are on a phone. A broken mobile site loses them in seconds.' },
  { icon: SearchX, title: "Customers can't find key info", desc: 'Hours, location, services, contact — buried or missing entirely.' },
  { icon: CircleSlash, title: 'Nobody ever finishes it', desc: 'The project stalls for months and never actually launches.' },
]

const BENEFITS = [
  { icon: BadgeDollarSign, title: 'Flat-Fee Pricing', desc: 'One price of $800. No hidden fees, ever.' },
  { icon: Zap, title: '5-Day Delivery', desc: 'Live in days, not months of back-and-forth.' },
  { icon: Smartphone, title: 'Mobile Friendly', desc: 'Looks sharp on every phone and screen.' },
  { icon: TrendingUp, title: 'SEO Ready', desc: 'Built so customers can actually find you.' },
  { icon: MapPin, title: 'Austin Based', desc: 'Local, responsive, and easy to reach.' },
  { icon: ShieldCheck, title: 'No Hidden Fees', desc: 'What we quote is what you pay. Period.' },
]

const STEPS = [
  { n: '01', title: 'Book a free consultation', desc: 'A quick 30-minute call to understand your business and goals.' },
  { n: '02', title: 'Provide your business info', desc: 'Send us your details, photos, and content — we guide you through it.' },
  { n: '03', title: 'Review your draft', desc: 'We build your site and you review a live draft, with revisions.' },
  { n: '04', title: 'Launch your website', desc: 'We connect your domain and put your business online.' },
]

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <Section bg="var(--ink-800)" pad="118px 0 128px" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(1100px 520px at 78% -8%, rgba(198,93,30,0.30), transparent 60%), radial-gradient(700px 400px at 6% 110%, rgba(122,139,117,0.18), transparent 60%)' }}></div>
        <Container style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 56, alignItems: 'center' }} className="hero-grid">
            <div>
              <Reveal>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '7px 15px', borderRadius: 999, background: 'rgba(250,250,250,0.06)', border: '1px solid rgba(250,250,250,0.14)', marginBottom: 26 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--sage-500)' }}></span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--fg-on-dark-2)', letterSpacing: '0.02em' }}>Now booking Austin small businesses</span>
                </div>
              </Reveal>
              <Reveal delay={60}>
                <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.6rem, 1.4rem + 4vw, 4.4rem)', lineHeight: 1.03, letterSpacing: '-0.022em', color: 'var(--paper-50)' }}>
                  Austin small business websites delivered in <span style={{ color: 'var(--orange-400)' }}>5 days</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p style={{ marginTop: 22, maxWidth: 520, fontSize: 'clamp(1.05rem, 1rem + 0.5vw, 1.3rem)', lineHeight: 1.55, color: 'var(--fg-on-dark-2)' }}>
                  A modern website built for your business — without agency pricing, hidden fees, or months of waiting.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div style={{ marginTop: 34, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <Button size="lg">Book Free Consultation <ArrowRight size={18} /></Button>
                  </Link>
                  <Link href="/explore" style={{ textDecoration: 'none' }}>
                    <Button size="lg" variant="ghost-light">See Examples</Button>
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div style={{ marginTop: 38, display: 'flex', gap: 28, flexWrap: 'wrap', color: 'var(--fg-on-dark-3)', fontSize: 14.5 }}>
                  {['$800 flat fee', '3–5 day turnaround', 'No hidden fees'].map(s => (
                    <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                      <Check size={16} color="var(--orange-400)" />{s}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,93,30,0.35), transparent 70%)', filter: 'blur(8px)' }}></div>
                <Image src="/austin-emblem.png" alt="Austin skyline"
                  width={340} height={340}
                  style={{ position: 'relative', borderRadius: '50%', boxShadow: '0 40px 80px -30px rgba(0,0,0,0.7)' }} />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* TRUST BAR */}
      <Section bg="var(--bg-cream)" pad="40px 0">
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 22 }}>
            <Eyebrow>Perfect for</Eyebrow>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {INDUSTRIES.map((it, idx) => (
              <span key={it} style={{
                fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600, padding: '9px 18px', borderRadius: 999,
                background: idx % 3 === 0 ? 'var(--orange-500)' : idx % 3 === 1 ? 'var(--sage-100)' : '#fff',
                color: idx % 3 === 0 ? '#fff' : idx % 3 === 1 ? 'var(--sage-700)' : 'var(--fg-2)',
                border: idx % 3 === 2 ? '1px solid var(--line-strong)' : 'none',
              }}>{it}</span>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROBLEM */}
      <Section bg="var(--bg-light)">
        <Container>
          <Reveal>
            <div style={{ maxWidth: 720 }}>
              <Eyebrow>The real problem</Eyebrow>
              <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--ink-800)' }}>
                Most business owners lose customers before they ever say hello.
              </h2>
            </div>
          </Reveal>
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 18 }} className="grid-2">
            {PROBLEMS.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 70}>
                <div style={{ display: 'flex', gap: 18, padding: 26, background: '#fff', borderRadius: 'var(--r-lg)', border: '1px solid var(--line-light)', boxShadow: 'var(--shadow-sm)', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ flex: 'none', width: 46, height: 46, borderRadius: 13, background: 'var(--orange-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange-600)' }}>
                    <p.icon size={23} />
                  </div>
                  <div>
                    <h4 style={{ margin: '2px 0 6px', fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink-800)' }}>{p.title}</h4>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--fg-3)' }}>{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 12, padding: '20px 26px', borderRadius: 'var(--r-lg)', background: 'var(--sage-100)', color: 'var(--sage-700)' }}>
              <CheckCircle2 size={24} color="var(--sage-700)" />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, letterSpacing: '-0.01em' }}>FastLaunch ATX fixes all of that.</span>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* BENEFITS */}
      <Section bg="var(--bg-cream)">
        <Container>
          <Reveal>
            <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <Eyebrow>What you get</Eyebrow>
              <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', letterSpacing: '-0.02em', color: 'var(--ink-800)' }}>
                Everything handled. Nothing to figure out.
              </h2>
            </div>
          </Reveal>
          <div style={{ marginTop: 52, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }} className="grid-3">
            {BENEFITS.map((b, idx) => (
              <Reveal key={b.title} delay={idx * 55}>
                <div style={{ padding: 28, background: '#fff', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-sm)', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: 'var(--orange-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange-600)', marginBottom: 18 }}>
                    <b.icon size={25} />
                  </div>
                  <h4 style={{ margin: '0 0 7px', fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--ink-800)' }}>{b.title}</h4>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--fg-3)' }}>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section bg="var(--ink-800)">
        <Container>
          <Reveal>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow color="var(--orange-400)">How it works</Eyebrow>
              <h2 style={{ margin: '14px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', letterSpacing: '-0.02em', color: 'var(--paper-50)' }}>
                Four simple steps to launch.
              </h2>
            </div>
          </Reveal>
          <div style={{ marginTop: 52, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="grid-4">
            {STEPS.map((s, idx) => (
              <Reveal key={s.n} delay={idx * 70}>
                <div style={{ padding: 26, background: 'var(--ink-700)', border: '1px solid rgba(250,250,250,0.10)', borderRadius: 'var(--r-lg)', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', color: 'var(--orange-400)' }}>STEP {s.n}</div>
                  <h4 style={{ margin: '14px 0 8px', fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--paper-50)' }}>{s.title}</h4>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'var(--fg-on-dark-3)' }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA BAND */}
      <Section bg="var(--orange-500)" pad="84px 0">
        <Container>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)', letterSpacing: '-0.02em', color: '#fff' }}>
                Stop waiting. Start launching.
              </h2>
              <p style={{ margin: '12px 0 0', fontSize: 18, color: 'rgba(255,255,255,0.92)', maxWidth: 520, lineHeight: 1.5 }}>
                Book a free 30-minute consultation. We&apos;ll handle the rest.
              </p>
            </div>
            <Link href="/contact" style={{ textDecoration: 'none', flex: 'none' }}>
              <Button size="lg" variant="secondary">Book Free Consultation <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </Container>
      </Section>
    </div>
  )
}
