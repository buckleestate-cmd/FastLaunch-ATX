'use client'
import { usePathname } from 'next/navigation'
import { Nav, Footer } from '@/components/Nav'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideFooter = pathname === '/contact'

  return (
    <>
      <Nav />
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  )
}
