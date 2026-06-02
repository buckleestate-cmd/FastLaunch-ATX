import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { SiteFrame } from '@/components/MiniSites'

const EXAMPLES = [
  {
    label: 'Iron Forge Gym', kind: 'Gym Website', site: 'gym', domain: 'ironforgegym.com',
    desc: 'Membership-driven sites that turn first-time visitors into trial sign-ups.',
    feats: ['Class schedule', 'Membership tiers', 'Trial sign-up form', 'Trainer bios'],
  },
  {
    label: 'Salt & Smoke', kind: 'Restaurant Website', site: 'restaurant', domain: 'saltandsmoke.com',
    desc: 'Mouth-watering menus, hours, and reservations — all on mobile.',
    feats: ['Menu pages', 'Online reservations', 'Hours & map', 'Photo gallery'],
  },
  {
    label: 'ATX Events Co.', kind: 'Event Company', site: 'events', domain: 'atxevents.co',
    desc: 'Showcase past events and capture booking inquiries fast.',
    feats: ['Event portfolio', 'Inquiry form', 'Packages', 'Testimonials'],
  },
  {
    label: 'Fade Theory', kind: 'Barbershop Website', site: 'barbershop', domain: 'fadetheory.com',
    desc: 'Clean, modern sites with one-tap booking and a sharp gallery.',
    feats: ['Online booking', 'Service menu', 'Cut gallery', 'Hours & location'],
  },
  {
    label: 'The Long Game', kind: 'Podcast Website', site: 'podcast', domain: 'thelonggame.fm',
    desc: 'A home base for every episode with one-click links to listen.',
    feats: ['Episode list', 'Listen links', 'Newsletter', 'About / hosts'],
  },
  {
    label: 'Lone Star Build', kind: 'Contractor Website', site: 'contractor', domain: 'lonestarbuild.com',
    desc: 'Project galleries and quote requests that win bigger jobs.',
    feats: ['Project gallery', 'Quote request', 'Service areas', 'Reviews'],
  },
  {
    label: 'Hill Country Homes', kind: 'Real Estate Website', site: 'realestate', domain: 'hillcountryhomes.com',
    desc: 'Polished agent sites that build trust and capture leads.',
    feats: ['Listings', 'Agent profile', 'Lead capture', 'Neighborhood guides'],
  },
  {
    label: 'Reyes Advisory', kind: 'Consulting Website', site: 'consulting', domain: 'reyesadvisory.com',
    desc: 'Authority-building sites that book more discovery calls.',
    feats: ['Services', 'Case studies', 'Booking', 'Contact'],
  },
]

export default function ExplorePage() {
  return (
    <div>
      <Section bg="var(--ink-800)" pad="92px 0 72px">
        <Container>
          <Reveal>
            <Eyebrow color="var(--orange-400)">Explore</Eyebrow>
            <h1 style={{ margin: '14px 0 0', maxWidth: 760, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h1)', letterSpacing: '-0.022em', lineHeight: 1.06, color: 'var(--paper-50)' }}>
              See what your website could look like.
            </h1>
            <p style={{ marginTop: 18, maxWidth: 560, fontSize: 'var(--fs-lead)', lineHeight: 1.5, color: 'var(--fg-on-dark-2)' }}>
              Real layouts built for real Austin businesses. Find your industry and picture your own site.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section bg="var(--bg-cream)" pad="64px 0 112px">
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 26 }} className="grid-2">
            {EXAMPLES.map((ex, idx) => (
              <Reveal key={ex.label} delay={(idx % 2) * 80}>
                <div style={{ background: '#fff', borderRadius: 'var(--r-xl)', padding: 18, boxShadow: 'var(--shadow-md)', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  <SiteFrame kind={ex.site} domain={ex.domain} />
                  <div style={{ padding: '22px 12px 12px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Eyebrow style={{ fontSize: 12 }}>{ex.kind}</Eyebrow>
                    <h3 style={{ margin: '10px 0 8px', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, letterSpacing: '-0.015em', color: 'var(--ink-800)' }}>{ex.label}</h3>
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--fg-3)' }}>{ex.desc}</p>
                    <div style={{ margin: '16px 0 20px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                      {ex.feats.map(f => (
                        <span key={f} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, padding: '6px 12px', borderRadius: 999, background: 'var(--paper-100)', color: 'var(--fg-2)' }}>
                          <Check size={13} color="var(--orange-500)" />{f}
                        </span>
                      ))}
                    </div>
                    <div style={{ marginTop: 'auto' }}>
                      <Link href="/contact" style={{ textDecoration: 'none' }}>
                        <Button variant="ghost">Build Something Similar <ArrowRight size={16} /></Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
