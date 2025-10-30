import Link from 'next/link'
import { COMPANY } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t bg-slate-50">
      <div className="container-section py-8 text-sm text-slate-600">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-slate-800">{COMPANY.name}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        <p className="mt-4">{COMPANY.address}</p>
        <p className="mt-1">Email: {COMPANY.email}</p>
        <p className="mt-6">© {year} {COMPANY.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}



