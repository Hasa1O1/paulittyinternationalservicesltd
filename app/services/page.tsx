import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export const metadata = { title: 'Services - Paulittty International Services Ltd' }

export default function ServicesIndex() {
  return (
    <div className="section">
      <div className="container-section">
        <h1 className="text-3xl font-bold text-brand-900">Our Services</h1>
        <p className="mt-2 max-w-2xl text-slate-700">We provide professional commercial printing, personal protective equipment supply, and landscaping services suitable for organisations and projects of any size.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(s => (
            <Card key={s.slug}>
              <CardHeader>
                <h2 className="text-lg font-semibold">{s.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{s.summary}</p>
                <Link href={`/services/${s.slug}`} className="mt-4 inline-block font-medium text-brand-700 hover:underline">View details →</Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


