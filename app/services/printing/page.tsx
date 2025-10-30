import Image from 'next/image'
import { PRINTING_CATALOG } from '@/lib/constants'
import { InquiryForm } from '@/components/sections/InquiryForm'
import { Printer, Clock, Award, Package } from 'lucide-react'

export const metadata = { title: 'Printing Services - Paulittty International Services Ltd' }

export default function PrintingPage() {
  const features = [
    { icon: Printer, title: 'Commercial Printing', text: 'Full-service production for all your business needs' },
    { icon: Clock, title: 'Fast Turnaround', text: 'Quick delivery without compromising quality' },
    { icon: Award, title: 'Professional Quality', text: 'Premium finishes and attention to detail' },
    { icon: Package, title: 'Complete Solutions', text: 'From design to delivery, we handle it all' }
  ]

  return (
    <div className="section">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-900">Commercial Printing Services</h1>
              <p className="mt-4 text-lg text-slate-700">
                Our core business is commercial printing. We produce high quality marketing and operational materials with fast turnaround and professional finishing.
              </p>
              <p className="mt-4 text-slate-700">
                We are able to print all commercial printing materials, from office stationery to large format signage and promotional items.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                alt="Commercial printing equipment"
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container-section py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-6 rounded-lg border bg-white">
              <feature.icon className="h-12 w-12 text-brand-700 mb-4" />
              <h3 className="text-lg font-semibold text-brand-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Print */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-900 mb-6">What We Print</h2>
              <p className="text-slate-700 mb-6">
                We offer printing services such as: printing of Invoice books, Quotations, Delivery Note books, Receipts, Business Cards, 
                T-shirt Printing, Banners, Bill Boards and any printing jobs that may be needed.
              </p>
              <p className="text-slate-700 mb-6">
                Our range includes office stationery, multi-part carbon forms in various colors (white, yellow, pink, green) and sizes (A3, A4, A5).
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-brand-900">Complete Catalog</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {PRINTING_CATALOG.map((item) => (
                  <div key={item} className="flex items-center gap-2 p-3 rounded-md bg-white border border-slate-200">
                    <div className="h-2 w-2 rounded-full bg-brand-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container-section py-12">
        <h2 className="text-3xl font-bold text-brand-900 mb-8">Our Work</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image alt="Business cards and stationery" src="https://images.unsplash.com/photo-1596464716127-f2a82984de30" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image alt="Billboards and signage" src="https://images.unsplash.com/photo-1557804506-669a67965ba0" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image alt="Digital printing press" src="https://images.unsplash.com/photo-1585734728934-dfe14de6e6b4" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <InquiryForm service="Printing Services" />
        </div>
      </div>
    </div>
  )
}


