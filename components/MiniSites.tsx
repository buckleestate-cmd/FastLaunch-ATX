'use client'
import React, { useRef, useState, useEffect } from 'react'

const BASE_W = 920
const BASE_H = 560

function FitScale({ children, baseW = BASE_W, baseH = BASE_H }: { children: React.ReactNode; baseW?: number; baseH?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.6)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setScale(el.clientWidth / baseW)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [baseW])

  return (
    <div ref={ref} style={{ width: '100%', height: baseH * scale, overflow: 'hidden', position: 'relative' }}>
      <div style={{ width: baseW, height: baseH, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
        {children}
      </div>
    </div>
  )
}

function Photo({ id, grad, radius = 10, pos = 'center', scrim, children, style }: {
  id: string; grad: string; radius?: number; pos?: string;
  scrim?: string; children?: React.ReactNode; style?: React.CSSProperties
}) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: radius, background: grad, ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`}
        alt="" referrerPolicy="no-referrer"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: pos }}
      />
      {scrim && <div style={{ position: 'absolute', inset: 0, background: scrim }}></div>}
      {children}
    </div>
  )
}

function MiniHeader({ name, links, cta, color, accent, ctaText = '#fff' }: {
  name: string; links: string[]; cta: string; color: string; accent: string; ctaText?: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '0.02em', color }}>{name}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
        {links.map(l => <span key={l} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 500, color, opacity: 0.72 }}>{l}</span>)}
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: ctaText, background: accent, padding: '9px 18px', borderRadius: 999, whiteSpace: 'nowrap' }}>{cta}</span>
      </div>
    </div>
  )
}

function GymSite() {
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#0E0F12', color: '#fff', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="IRON FORGE" links={['Classes', 'Memberships', 'Trainers']} cta="Start Free Trial" color="#fff" accent="#F0531C" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 30, padding: '26px 40px 0' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', color: '#F0531C' }}>AUSTIN · EAST SIDE</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 58, lineHeight: 0.98, letterSpacing: '-0.02em', marginTop: 16 }}>TRAIN HARDER.<br />GET STRONGER.</div>
          <div style={{ fontSize: 16, lineHeight: 1.5, color: '#A7ABB3', marginTop: 18, maxWidth: 360 }}>Strength training, HIIT, and open gym — built for real people getting real results.</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: '#F0531C', color: '#fff', padding: '13px 24px', borderRadius: 999, whiteSpace: 'nowrap' }}>Join Now — $0 to Start</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, border: '1.5px solid #33363D', color: '#fff', padding: '13px 24px', borderRadius: 999 }}>View Classes</span>
          </div>
        </div>
        <Photo id="photo-1534438327276-14e5300c3a48" grad="linear-gradient(150deg,#3A2418,#1A1C20)" pos="center"
          scrim="linear-gradient(180deg,rgba(14,15,18,0.05),rgba(14,15,18,0.55))" style={{ height: 250 }}>
          <div style={{ position: 'absolute', left: 20, bottom: 18, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#fff' }}>24/7 ACCESS</div>
        </Photo>
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '26px 40px' }}>
        {[['30+', 'Weekly classes'], ['5', 'Expert trainers'], ['24/7', 'Member access']].map(s => (
          <div key={s[1]} style={{ flex: 1, background: '#16181D', borderRadius: 12, padding: '16px 18px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#F0531C' }}>{s[0]}</div>
            <div style={{ fontSize: 13.5, color: '#8A8E96', marginTop: 2 }}>{s[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function RestaurantSite() {
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#FBF6EF', color: '#2A1D15', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="SALT & SMOKE" links={['Menu', 'Reservations', 'About']} cta="Book a Table" color="#2A1D15" accent="#B8462A" />
      <div style={{ display: 'grid', gridTemplateColumns: '0.95fr 1.05fr', gap: 30, padding: '20px 40px 0', alignItems: 'center' }}>
        <Photo id="photo-1544025162-d76694265947" grad="linear-gradient(150deg,#D98B4A,#7A3318)" pos="center" style={{ height: 260 }} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', color: '#B8462A' }}>WOOD-FIRED · AUSTIN, TX</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 54, lineHeight: 1.0, letterSpacing: '-0.02em', marginTop: 14 }}>Texas barbecue,<br />done right.</div>
          <div style={{ fontSize: 16, lineHeight: 1.5, color: '#6B5848', marginTop: 16, maxWidth: 380 }}>Brisket smoked 14 hours over post oak. Open Wed–Sun until we sell out.</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: '#B8462A', color: '#fff', padding: '13px 24px', borderRadius: 999 }}>View Menu</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, border: '1.5px solid #DDD0C0', color: '#2A1D15', padding: '13px 24px', borderRadius: 999 }}>Reserve</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '24px 40px' }}>
        {[['Brisket Plate', '$18'], ['Pork Ribs', '$22'], ['Smoked Sides', '$6']].map(m => (
          <div key={m[0]} style={{ flex: 1, background: '#fff', borderRadius: 12, padding: '14px 16px', boxShadow: '0 6px 16px -10px rgba(80,40,20,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15.5 }}>{m[0]}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#B8462A' }}>{m[1]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventsSite() {
  const imgs: [string, string][] = [
    ['photo-1519225421980-715cb0215aed', '#6E8266'],
    ['photo-1511795409834-ef04bbd61622', '#9C8569'],
    ['photo-1464366400600-7168b8af9bc3', '#4E5C66'],
    ['photo-1505236858219-8359eb29e329', '#8A7A66'],
  ]
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#F3F1EC', color: '#23291F', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="ATX EVENTS CO." links={['Weddings', 'Corporate', 'Gallery']} cta="Start Planning" color="#23291F" accent="#6E8266" />
      <div style={{ textAlign: 'center', padding: '24px 40px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.2em', color: '#6E8266' }}>FULL-SERVICE EVENT PLANNING</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.02, letterSpacing: '-0.02em', marginTop: 12 }}>Unforgettable Austin events.</div>
        <div style={{ fontSize: 16, color: '#5C6356', marginTop: 12 }}>From hill-country weddings to downtown galas — we handle every detail.</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, padding: '26px 40px' }}>
        {imgs.map((g, i) => (
          <Photo key={i} id={g[0]} grad={`linear-gradient(150deg,${g[1]},${g[1]}AA)`} pos="center" style={{ height: 150 }} />
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: '#23291F', color: '#fff', padding: '13px 26px', borderRadius: 999 }}>See Our Portfolio</span>
      </div>
    </div>
  )
}

function BarbershopSite() {
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#13161E', color: '#F2EEE4', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="FADE THEORY" links={['Services', 'Gallery', 'Hours']} cta="Book Your Cut" color="#F2EEE4" accent="#C9A24B" ctaText="#13161E" />
      <div style={{ display: 'grid', gridTemplateColumns: '0.62fr 0.78fr', gap: 22, padding: '24px 40px 0' }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.18em', color: '#C9A24B' }}>EST. 2019 · SOUTH CONGRESS</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, lineHeight: 0.98, letterSpacing: '-0.02em', marginTop: 14 }}>Sharp cuts.<br />Every time.</div>
          <div style={{ fontSize: 15, lineHeight: 1.5, color: '#A6A294', marginTop: 14 }}>Master barbers, hot-towel shaves, and a clean chair waiting for you.</div>
          <div style={{ marginTop: 20 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: '#C9A24B', color: '#13161E', padding: '13px 24px', borderRadius: 999 }}>Book Online</span>
          </div>
        </div>
        <Photo id="photo-1503951914875-452162b0f3f1" grad="linear-gradient(150deg,#2A2E3A,#14161D)" pos="center" style={{ height: 232 }} />
      </div>
      <div style={{ display: 'flex', gap: 12, padding: '20px 40px' }}>
        {[['Signature Cut', '$35'], ['Skin Fade', '$40'], ['Beard Trim', '$20'], ['Hot Towel Shave', '$45']].map(s => (
          <div key={s[0]} style={{ flex: 1, background: '#1A1E28', borderRadius: 10, padding: '12px 14px' }}>
            <div style={{ fontSize: 13.5, color: '#A6A294' }}>{s[0]}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#C9A24B', marginTop: 3 }}>{s[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PodcastSite() {
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#15101C', color: '#F3EEF6', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="THE LONG GAME" links={['Episodes', 'About', 'Subscribe']} cta="Listen Now" color="#F3EEF6" accent="#E0662E" />
      <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 28, padding: '24px 40px 0' }}>
        <Photo id="photo-1590602847861-f357a9332bbc" grad="linear-gradient(150deg,#E0662E,#7A2D52)" pos="center"
          scrim="linear-gradient(180deg,rgba(21,16,28,0.15),rgba(21,16,28,0.55))" style={{ height: 230 }}>
          <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 64, height: 64, borderRadius: 99, background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '12px solid transparent', borderBottom: '12px solid transparent', borderLeft: '20px solid #15101C', marginLeft: 5 }}></div>
          </div>
          <div style={{ position: 'absolute', left: 18, bottom: 16, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18 }}>EP. 47 — Playing Long</div>
        </Photo>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#E0662E' }}>A PODCAST ABOUT BUILDING</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, lineHeight: 1.04, letterSpacing: '-0.02em', marginTop: 12, marginBottom: 12 }}>Conversations with people who play the long game.</div>
          {[['48', 'How to Stay Patient', '52 min'], ['47', 'Building in Public', '38 min'], ['46', 'The Compounding Effect', '44 min']].map(e => (
            <div key={e[0]} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', borderTop: '1px solid #2A2233' }}>
              <span style={{ width: 30, height: 30, borderRadius: 99, border: '1.5px solid #E0662E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 0, height: 0, borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '8px solid #E0662E', marginLeft: 2 }}></div>
              </span>
              <span style={{ flex: 1, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15 }}>{e[1]}</span>
              <span style={{ fontSize: 13, color: '#9A8FA6' }}>{e[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContractorSite() {
  const gallery = ['photo-1503387762-592deb58ef4e', 'photo-1416879595882-3373a0480b5b', 'photo-1504307651254-35680f356dfd']
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#F5F3EF', color: '#1A2230', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="LONE STAR BUILD" links={['Projects', 'Services', 'About']} cta="Get a Quote" color="#1A2230" accent="#D5642A" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 28, padding: '24px 40px 0' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#D5642A' }}>LICENSED & INSURED · AUSTIN</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, lineHeight: 1.0, letterSpacing: '-0.02em', marginTop: 14 }}>Built to last.<br />Done on time.</div>
          <div style={{ fontSize: 16, lineHeight: 1.5, color: '#5B6573', marginTop: 16, maxWidth: 360 }}>Custom homes, remodels, and additions across Central Texas.</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: '#D5642A', color: '#fff', padding: '13px 24px', borderRadius: 999 }}>Get a Free Quote</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, border: '1.5px solid #CFC9BF', color: '#1A2230', padding: '13px 24px', borderRadius: 999 }}>Our Work</span>
          </div>
        </div>
        <Photo id="photo-1541888946425-d81bb19240f5" grad="linear-gradient(150deg,#5B6573,#252D3A)" pos="center" style={{ height: 240 }} />
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '24px 40px' }}>
        {gallery.map((id, i) => (
          <Photo key={i} id={id} grad="linear-gradient(150deg,#B0A290,#7A6E5C)" pos="center" style={{ flex: 1, height: 96 }} />
        ))}
      </div>
    </div>
  )
}

function RealEstateSite() {
  const listings: [string, string, string][] = [
    ['$685K', 'Westlake · 3bd 2ba', 'photo-1568605114967-8130f3a36994'],
    ['$1.2M', 'Barton Hills · 4bd 3ba', 'photo-1570129477492-45c003edd2be'],
    ['$540K', 'Mueller · 3bd 2ba', 'photo-1576941089067-2de3c901e126'],
  ]
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#FAFAF7', color: '#222820', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="HILL COUNTRY HOMES" links={['Listings', 'Sell', 'About']} cta="Book a Tour" color="#222820" accent="#6E8266" />
      <div style={{ padding: '22px 40px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#6E8266' }}>AUSTIN & THE HILL COUNTRY</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, lineHeight: 1.02, letterSpacing: '-0.02em', marginTop: 12 }}>Find your place in the hills.</div>
        <div style={{ display: 'flex', gap: 10, marginTop: 18, background: '#fff', border: '1px solid #E4E2DA', borderRadius: 999, padding: 7, maxWidth: 460, boxShadow: '0 8px 20px -14px rgba(40,60,40,0.4)' }}>
          <span style={{ flex: 1, fontSize: 14.5, color: '#8A9082', padding: '8px 16px' }}>Search by city, ZIP, or address…</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, background: '#6E8266', color: '#fff', padding: '10px 22px', borderRadius: 999 }}>Search</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, padding: '24px 40px' }}>
        {listings.map(p => (
          <div key={p[1]} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', boxShadow: '0 8px 20px -14px rgba(40,60,40,0.35)' }}>
            <Photo id={p[2]} grad="linear-gradient(150deg,#A7B6A0,#7E8E78)" radius={0} pos="center" style={{ height: 96 }} />
            <div style={{ padding: '12px 14px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, color: '#222820' }}>{p[0]}</div>
              <div style={{ fontSize: 13.5, color: '#7A8072', marginTop: 2 }}>{p[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsultingSite() {
  return (
    <div style={{ width: BASE_W, height: BASE_H, background: '#0F1A2A', color: '#EAF0F7', fontFamily: 'var(--font-body)' }}>
      <MiniHeader name="REYES ADVISORY" links={['Services', 'Case Studies', 'Insights']} cta="Book a Call" color="#EAF0F7" accent="#D5642A" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 28, padding: '28px 40px 0' }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.18em', color: '#D5642A' }}>STRATEGY & OPERATIONS</div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 50, lineHeight: 1.0, letterSpacing: '-0.02em', marginTop: 14 }}>Strategy that compounds.</div>
          <div style={{ fontSize: 16, lineHeight: 1.5, color: '#9FB0C2', marginTop: 16, maxWidth: 380 }}>We help founders and operators make the few decisions that actually move the business.</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, background: '#D5642A', color: '#fff', padding: '13px 24px', borderRadius: 999, whiteSpace: 'nowrap' }}>Book a Discovery Call</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, border: '1.5px solid #2A3A4E', color: '#EAF0F7', padding: '13px 24px', borderRadius: 999 }}>Case Studies</span>
          </div>
        </div>
        <Photo id="photo-1521737604893-d14cc237f11d" grad="linear-gradient(150deg,#1E3350,#16243A)" pos="center" style={{ height: 220 }} />
      </div>
      <div style={{ display: 'flex', gap: 14, padding: '26px 40px' }}>
        {[['$2B+', 'Advised'], ['120+', 'Clients served'], ['15 yrs', 'Operating experience']].map(s => (
          <div key={s[1]} style={{ flex: 1, background: '#16243A', border: '1px solid #213149', borderRadius: 12, padding: '16px 18px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: '#fff' }}>{s[0]}</div>
            <div style={{ fontSize: 13.5, color: '#8B9CB0', marginTop: 2 }}>{s[1]}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SITES: Record<string, React.ComponentType> = {
  gym: GymSite,
  restaurant: RestaurantSite,
  events: EventsSite,
  barbershop: BarbershopSite,
  podcast: PodcastSite,
  contractor: ContractorSite,
  realestate: RealEstateSite,
  consulting: ConsultingSite,
}

export function SiteFrame({ kind, domain }: { kind: string; domain: string }) {
  const Site = SITES[kind] || GymSite
  return (
    <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--line-light)', boxShadow: 'var(--shadow-md)', background: '#fff' }}>
      <div style={{ height: 34, display: 'flex', alignItems: 'center', gap: 7, padding: '0 14px', background: '#EEEAE3', borderBottom: '1px solid var(--line-light)' }}>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: '#E08A6B' }}></span>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: '#E8C07A' }}></span>
        <span style={{ width: 10, height: 10, borderRadius: 99, background: '#9DB295' }}></span>
        <span style={{ marginLeft: 12, flex: 1, background: '#fff', borderRadius: 999, padding: '4px 14px', fontSize: 11, color: '#A39A8B', fontFamily: 'var(--font-body)' }}>{domain}</span>
      </div>
      <FitScale><Site /></FitScale>
    </div>
  )
}
