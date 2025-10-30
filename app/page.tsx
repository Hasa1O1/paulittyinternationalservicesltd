import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SERVICES, CORE_VALUES, VISION, MISSION } from '@/lib/constants'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div>
      <section className="section bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900">Commercial Printing, PPE and Landscaping</h1>
            <p className="mt-4 text-slate-700">Paulittty International Services Ltd delivers professional printing solutions, reliable PPE supply, and quality landscaping services for organizations across Zambia.</p>
            <div className="mt-6 flex gap-4">
              <Button asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
            <Image alt="Printing press" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-section">
          <h2 className="text-2xl font-semibold text-brand-900">Our Services</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(s => (
              <Card key={s.slug}>
                <CardHeader>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.summary}</p>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                    <Image alt={s.title} src={s.image} fill className="object-cover" />
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <Link href={`/services/${s.slug}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-section grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-brand-900">Vision</h2>
            <p className="mt-2 text-slate-700">{VISION}</p>
            <h2 className="mt-8 text-2xl font-semibold text-brand-900">Mission</h2>
            <p className="mt-2 text-slate-700">{MISSION}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-brand-900">Core Values</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {CORE_VALUES.map(v => (
                <div key={v.title} className="flex items-start gap-3">
                  <v.icon className="mt-1 h-5 w-5 text-brand-700"/>
                  <div>
                    <p className="font-medium">{v.title}</p>
                    <p className="text-sm text-slate-600">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



