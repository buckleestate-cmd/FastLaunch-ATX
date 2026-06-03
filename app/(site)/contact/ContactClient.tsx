'use client'
import React, { useState } from 'react'
import { Clock, BadgeDollarSign, Phone, Check, ArrowRight, AlertCircle } from 'lucide-react'
import Section from '@/components/ui/Section'
import Eyebrow from '@/components/ui/Eyebrow'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykagvdk'

const TRUST = [
  { icon: Clock, title: '3–5 day delivery', desc: 'From kickoff to launch.' },
  { icon: BadgeDollarSign, title: '$800 flat fee', desc: 'No hidden costs.' },
  { icon: Phone, title: 'Free 30-min call', desc: 'No pressure, no deposit.' },
]

interface FormState {
  name: string; email: string; phone: string; biz: string; project: string
}

function Field({ label, value, onChange, placeholder, type = 'text', textarea, required }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
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
        ? <textarea rows={4} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={base} />
        : <input type={type} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={base} />
      }
    </label>
  )
}

export default function ContactClient() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', biz: '', project: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const set = (k: keyof FormState) => (v: string) => setForm(s => ({ ...s, [k]: v }))
  const valid = form.name.trim() && form.email.trim() && form.biz.trim()

  async function handleSubmit() {
    if (!valid || status === 'submitting') return
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          business: form.biz,
          message: form.project,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section bg="var(--ink-800)" pad="0" style={{ minHeight: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', minHeight: 'calc(100vh - 76px)' }} className="contact-grid">
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

        <div style={{ background: 'var(--bg-cream)', padding: 'clamp(40px,5vw,72px) clamp(28px,5vw,64px)', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: 520, margin: '0 auto' }}>
            {status === 'success' ? (
              <Reveal>
                <div style={{ textAlign: 'center', background: '#fff', borderRadius: 'var(--r-xl)', padding: '56px 36px', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 99, background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 22px' }}>
                    <Check size={32} color="var(--sage-700)" />
                  </div>
                  <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--ink-800)' }}>
                    Thanks, {form.name.split(' ')[0] || 'friend'}!
                  </h2>
                  <p style={{ margin: '12px 0 24px', fontSize: 16, lineHeight: 1.6, color: 'var(--fg-3)' }}>
                    We got your request and we&apos;ll reach out within one business day to schedule your free consultation.
                  </p>
                  <Button variant="ghost" onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', biz: '', project: '' }) }}>
                    Submit another
                  </Button>
                </div>
              </Reveal>
            ) : (
              <div style={{ background: '#fff', borderRadius: 'var(--r-xl)', padding: 'clamp(26px,3vw,40px)', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ display: 'grid', gap: 18 }}>
                  <Field label="Full name" value={form.name} onChange={set('name')} placeholder="Jordan Reyes" required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="grid-2">
                    <Field label="Email" type="email" value={form.email} onChange={set('email')} placeholder="you@business.com" required />
                    <Field label="Phone number" value={form.phone} onChange={set('phone')} placeholder="(512) 555-0123" />
                  </div>
                  <Field label="Business name" value={form.biz} onChange={set('biz')} placeholder="Eastside Barbershop" required />
                  <Field label="Tell us about your project" textarea value={form.project} onChange={set('project')} placeholder="What does your business do, and what do you need?" />
                  {status === 'error' && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '13px 16px', borderRadius: 'var(--r-sm)', background: '#FEF2F2', border: '1px solid #FECACA' }}>
                      <AlertCircle size={16} color="#DC2626" />
                      <span style={{ fontSize: 14, color: '#DC2626' }}>Something went wrong. Please try again or email us directly.</span>
                    </div>
                  )}
                  <Button
                    size="lg"
                    onClick={handleSubmit}
                    style={{ width: '100%', justifyContent: 'center', opacity: valid && status !== 'submitting' ? 1 : 0.55, pointerEvents: valid && status !== 'submitting' ? 'auto' : 'none' }}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Schedule My Free Consultation'} {status !== 'submitting' && <ArrowRight size={18} />}
                  </Button>
                  <p style={{ margin: 0, textAlign: 'center', fontSize: 13, color: 'var(--fg-3)' }}>
                    We&apos;ll never share your info.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
