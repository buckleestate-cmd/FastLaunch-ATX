'use client'
import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Clock, BadgeDollarSign, Phone, Check, ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const TRUST = [
  { icon: Clock, title: '3–5 day delivery', desc: 'From kickoff to launch.' },
  { icon: BadgeDollarSign, title: '$800 flat fee', desc: 'No hidden costs.' },
  { icon: Phone, title: 'Free 30-min call', desc: 'No pressure, no deposit.' },
]

function Field({ label, value, onChange, placeholder, type = 'text', textarea, required, name }: {
  label: string; name: string; value: string; onChange: (v: string) => void; placeholder?: string;
  type?: string; textarea?: boolean; required?: boolean
}) {
  const [focus, setFocus] = useState(false)
  const base: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 16,
    padding: '14px 16px', borderRadius: 'var(--r-sm)',
    border: `1.5px solid ${focus ? 'var(--orange-500)' : 'var(--line-strong)'}`,
    boxShadow: focus ? '0 0 0 4px rgba(198,93,30,0.13)' : 'none',
    background: '#fff', color: 'var(--ink-800)', outline: 'none',
    transition: 'all 150ms var(--ease-out)', resize: 'none',
  }
  return (
    <label style={{ display: 'block' }}>
      <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: 'var(--fg-2)', marginBottom: 8 }}>
        {label}{required && <span style={{ color: 'var(--orange-500)' }}> *</span>}
      </span>
      {textarea
        ? <textarea rows={4} name={name} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={base} />
        : <input type={type} name={name} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={base} />
      }
    </label>
  )
}

export default function ContactClient() {
  const [state, handleSubmit] = useForm('mykagvdk')
  const [form, setForm] = useState({ name: '', email: '', phone: '', biz: '', project: '' })
  const set = (k: keyof typeof form) => (v: string) => setForm(s => ({ ...s, [k]: v }))
  const valid = form.name.trim() && form.email.trim() && form.biz.trim()

  return (
    <Section bg="var(--ink-800)" pad="0" style={{ minHeight: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', minHeight: 'calc(100vh - 76px)' }} className="contact-grid">

        {/* Left panel */}
        <div style={{ padding: 'clamp(48px,6vw,88px) clamp(28px,5vw,72px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(700px 400px at 10% 10%, rgba(198,93,30,0.22), transparent 60%)' }}></div>
          <div style={{ position: 'relative' }}>
            <Eyebrow color="var(--orange-400)">Contact</Eyebrow>
            <h1 style={{ margin: '16px 0 0', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.2rem, 1.4rem + 2.6vw, 3.4rem)', letterSpacing: '-0.022em', lineHeight: 1.04, color: 'var(--paper-50)' }}>
              Let&apos;s launch your website.
            </h1>
            <p style={{ margin: '20px 0 0', maxWidth: 420, fontSize: 'var(--fs-lead)', lineHeight: 1.55, color: 'var(--fg-on-dark-2)' }}>
              Tell us about your business and we&apos;ll schedule a free consultation. No pressure, no jargon.
            </p>
            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {TRUST.map(t => (
                <div key={t.title} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(250,250,250,0.06)', border: '1px solid rgba(250,250,250,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--orange-400)', flex: 'none' }}>
                    <t.icon size={21} />
                  </span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: 'var(--paper-50)' }}>{t.title}</div>
                    <div style={{ fontSize: 14, color: 'var(--fg-on-dark-3)' }}>{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div style={{ background: 'var(--bg-cream)', padding: 'clamp(40px,5vw,72px) clamp(28px,5vw,64px)', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: 520, margin: '0 auto' }}>
            {state.succeeded ? (
              <Reveal>
                <div style={{ textAlign: 'center', background: '#fff', borderRadius: 'var(--r-xl)', padding: '56px 36px', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 99, background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                    <Check size={32} color="var(--sage-700)" />
                  </div>
                  <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink-800)' }}>
                    Thanks, {form.name.split(' ')[0] || 'friend'}!
                  </h2>
                  <p style={{ margin: '12px 0 0', fontSize: 16, lineHeight: 1.6, color: 'var(--fg-3)' }}>
                    We got your request and we&apos;ll reach out within one business day to schedule your free consultation.
                  </p>
                </div>
              </Reveal>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 'var(--r-xl)', padding: 'clamp(26px,3vw,40px)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ display: 'grid', gap: 18 }}>
                  <Field label="Full name" name="name" value={form.name} onChange={set('name')} placeholder="Jordan Reyes" required />
                  <ValidationError field="name" errors={state.errors} />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-2">
                    <Field label="Email" name="email" type="email" value={form.email} onChange={set('email')} placeholder="you@business.com" required />
                    <Field label="Phone number" name="phone" value={form.phone} onChange={set('phone')} placeholder="(512) 555-0123" />
                  </div>
                  <ValidationError field="email" errors={state.errors} />

                  <Field label="Business name" name="business" value={form.biz} onChange={set('biz')} placeholder="Eastside Barbershop" required />
                  <Field label="Tell us about your project" name="message" textarea value={form.project} onChange={set('project')} placeholder="What does your business do, and what do you need?" />
                  <ValidationError field="message" errors={state.errors} />

                  <button
                    type="submit"
                    disabled={!valid || state.submitting}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 9,
                      width: '100%', cursor: valid && !state.submitting ? 'pointer' : 'default',
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em',
                      borderRadius: 999, padding: '17px 32px', border: 'none', whiteSpace: 'nowrap',
                      background: 'var(--orange-500)', color: '#fff',
                      boxShadow: '0 8px 20px -12px rgba(198,93,30,0.5)',
                      opacity: valid && !state.submitting ? 1 : 0.55,
                      transition: 'all 180ms var(--ease-out)',
                    }}
                  >
                    {state.submitting ? 'Sending…' : <> Schedule My Free Consultation <ArrowRight size={18} /></>}
                  </button>

                  <p style={{ margin: 0, textAlign: 'center', fontSize: 13, color: 'var(--fg-3)' }}>
                    We&apos;ll never share your info.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
