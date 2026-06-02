'use client'
import React, { useState } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: Variant
  size?: Size
  onClick?: () => void
  style?: React.CSSProperties
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ children, variant = 'primary', size = 'md', onClick, style, disabled, type = 'button' }: ButtonProps) {
  const [hover, setHover] = useState(false)
  const [press, setPress] = useState(false)

  const pads = size === 'lg' ? '17px 32px' : size === 'sm' ? '10px 18px' : '14px 26px'
  const fs = size === 'lg' ? 17 : size === 'sm' ? 14.5 : 16

  const variants: Record<Variant, React.CSSProperties> = {
    primary: {
      background: hover ? 'var(--orange-600)' : 'var(--orange-500)',
      color: '#fff',
      boxShadow: hover ? 'var(--shadow-orange)' : '0 8px 20px -12px rgba(198,93,30,0.5)',
      border: 'none',
    },
    secondary: {
      background: hover ? '#1B2436' : 'var(--ink-800)',
      color: 'var(--paper-50)',
      border: 'none',
      boxShadow: 'var(--shadow-sm)',
    },
    ghost: {
      background: hover ? 'rgba(15,23,42,0.04)' : 'transparent',
      color: 'var(--ink-800)',
      border: '1.5px solid var(--line-strong)',
      boxShadow: 'none',
    },
    'ghost-light': {
      background: hover ? 'rgba(250,250,250,0.10)' : 'transparent',
      color: 'var(--paper-50)',
      border: '1.5px solid rgba(250,250,250,0.28)',
      boxShadow: 'none',
    },
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false) }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        cursor: disabled ? 'default' : 'pointer',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: fs,
        letterSpacing: '-0.01em',
        borderRadius: 999,
        padding: pads,
        transition: 'all 180ms var(--ease-out)',
        whiteSpace: 'nowrap',
        transform: press ? 'scale(0.97)' : `translateY(${hover ? '-1px' : '0'})`,
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  )
}
