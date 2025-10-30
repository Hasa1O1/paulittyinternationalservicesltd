import Image from 'next/image'
import { LANDSCAPING_CATALOG } from '@/lib/constants'
import { InquiryForm } from '@/components/sections/InquiryForm'
import { Sprout, Leaf, Droplets, Sun } from 'lucide-react'

export const metadata = { title: 'Landscaping Services - Paulittty International Services Ltd' }

export default function LandscapingPage() {
  const features = [
    { icon: Sprout, title: 'Professional Care', text: 'Expert maintenance for healthy, vibrant landscapes' },
    { icon: Leaf, title: 'Regular Maintenance', text: 'Scheduled visits to keep your property pristine' },
    { icon: Droplets, title: 'Fertilization', text: 'Proper nutrients for lush, green growth' },
    { icon: Sun, title: 'Weed Control', text: 'Effective treatments for weed-free gardens' }
  ]

  const services = [
    { title: 'Lawn mowing', description: 'Regular cutting to maintain ideal grass height and promote healthy growth' },
    { title: 'Edging', description: 'Clean, crisp edges along borders, pathways, and driveways for a manicured look' },
    { title: 'Dethatching', description: 'Remove dead grass and buildup to allow air, water, and nutrients to reach roots' },
    { title: 'Mulching', description: 'Spread organic mulch to retain moisture, suppress weeds, and enrich soil' },
    { title: 'Fertilizing', description: 'Apply balanced nutrients to promote strong, healthy plant growth' },
    { title: 'Weed control', description: 'Target treatments to eliminate weeds without harming desirable plants' },
    { title: 'Trimming', description: 'Prune trees, shrubs, and hedges to maintain shape and encourage new growth' }
  ]

  return (
    <div className="section">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-900">Professional Landscaping Services</h1>
              <p className="mt-4 text-lg text-slate-700">
                Professional lawn and garden care for residential and corporate environments with scheduled maintenance plans.
              </p>
              <p className="mt-4 text-slate-700">
                Transform your outdoor spaces into beautiful, well-maintained landscapes. We provide comprehensive care from lawn mowing to seasonal maintenance.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                alt="Landscaping services"
                src="https://images.unsplash.com/photo-1416360220777-4a1dd34f1719"
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

      {/* Services */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our Landscaping Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-semibold text-brand-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Services List */}
      <div className="container-section py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-900 mb-6 text-center">Service Catalog</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {LANDSCAPING_CATALOG.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-md bg-white border border-slate-200">
                <Leaf className="h-5 w-5 text-brand-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our Work</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Beautiful garden landscaping" src="https://images.unsplash.com/photo-1567225557594-88d73e55f2cb" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Well-maintained lawn and grass" src="https://images.unsplash.com/photo-1530906622963-c45b1fbd435f" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Landscape maintenance and gardening" src="https://images.unsplash.com/photo-1464207687429-7505649dae38" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-section py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Why Choose Our Landscaping Services</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Sprout className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Experienced Team</h3>
                <p className="text-sm text-slate-600">Skilled professionals with years of landscaping expertise</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Residential & Commercial</h3>
                <p className="text-sm text-slate-600">Services tailored for homes and businesses of all sizes</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Droplets className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Regular Maintenance</h3>
                <p className="text-sm text-slate-600">Flexible scheduling to fit your needs and budget</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Sun className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Quality Results</h3>
                <p className="text-sm text-slate-600">Consistently beautiful landscapes that enhance your property</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <InquiryForm service="Landscaping Services" />
        </div>
      </div>
    </div>
  )
}


