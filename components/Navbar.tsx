"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '@/lib/logo.png'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' }
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
      <div className="container-section flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-brand-200 bg-white shadow-sm">
            <Image src={logo} alt="Paulittty International Services Ltd logo" fill className="object-contain p-1" />
          </div>
          <span className="text-base font-bold text-brand-800">Paulittty</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-slate-700 hover:text-brand-700">
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-md bg-brand-700 text-white px-4 py-2 text-sm hover:bg-brand-800">Get in touch</Link>
        </nav>
        <button className="md:hidden" aria-label="Toggle Menu" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={cn('md:hidden transition-all', open ? 'max-h-64' : 'max-h-0 overflow-hidden')}>
        <div className="container-section grid gap-4 py-4">
          {nav.map(n => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-md bg-brand-700 text-white px-4 py-2 text-sm" onClick={() => setOpen(false)}>Get in touch</Link>
        </div>
      </div>
    </header>
  )
}



