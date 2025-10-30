import { CLIENTS } from '@/lib/constants'

export const metadata = { title: 'Clients & Partners - Paulittty International Services Ltd' }

export default function ClientsPage() {
  return (
    <div className="section">
      <div className="container-section">
        <h1 className="text-3xl font-bold text-brand-900">Our Clients & Strategic Partners</h1>
        <p className="mt-2 max-w-2xl text-slate-700">We are proud to serve a wide range of clients across the Copperbelt and Zambia.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CLIENTS.map(c => (
            <div key={c} className="rounded-md border bg-white p-4 text-slate-800">{c}</div>
          ))}
        </div>
      </div>
    </div>
  )
}


