import React from 'react'

interface EyebrowProps {
  children: React.ReactNode
  color?: string
  style?: React.CSSProperties
}

export default function Eyebrow({ children, color = 'var(--orange-500)', style }: EyebrowProps) {
  return (
    <div style={{
      fontFamily: 'var(--font-display)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color,
      ...style,
    }}>
      {children}
    </div>
  )
}
