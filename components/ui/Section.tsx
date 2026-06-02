import React from 'react'

interface SectionProps {
  children: React.ReactNode
  bg?: string
  pad?: string
  id?: string
  style?: React.CSSProperties
}

export default function Section({ children, bg = 'transparent', pad = '112px 0', id, style }: SectionProps) {
  return (
    <section id={id} style={{ background: bg, padding: pad, ...style }}>
      {children}
    </section>
  )
}
