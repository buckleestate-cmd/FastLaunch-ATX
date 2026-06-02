'use client'
import React, { useState, useEffect } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
}

export default function Reveal({ children, delay = 0, style }: RevealProps) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    let raf2: number
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setShown(true))
    })
    const t = setTimeout(() => setShown(true), 400 + delay)
    return () => {
      cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
      clearTimeout(t)
    }
  }, [delay])

  return (
    <div style={{
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : 'translateY(22px)',
      transition: `opacity 620ms var(--ease-out) ${delay}ms, transform 620ms var(--ease-out) ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  )
}
