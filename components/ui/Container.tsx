import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  narrow?: boolean
  style?: React.CSSProperties
}

export default function Container({ children, narrow, style }: ContainerProps) {
  return (
    <div style={{ maxWidth: narrow ? 880 : 1200, margin: '0 auto', padding: '0 28px', ...style }}>
      {children}
    </div>
  )
}
