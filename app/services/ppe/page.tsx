import Image from 'next/image'
import { PPE_CATALOG } from '@/lib/constants'
import { InquiryForm } from '@/components/sections/InquiryForm'
import { Shield, CheckCircle, Package, AlertTriangle } from 'lucide-react'

export const metadata = { title: 'PPE Equipment - Paulittty International Services Ltd' }

export default function PPEPage() {
  const features = [
    { icon: Shield, title: 'Certified Quality', text: 'All equipment meets international safety standards' },
    { icon: CheckCircle, title: 'Compliance Ready', text: 'Designed to meet industry regulations' },
    { icon: Package, title: 'Complete Range', text: 'Head-to-toe protection solutions' },
    { icon: AlertTriangle, title: 'Safety First', text: 'Protecting your workforce every day' }
  ]

  const categories = [
    { title: 'Head Protection', items: ['Hard Hats', 'Safety Helmets'] },
    { title: 'Hand & Arm Protection', items: ['Gloves (Heat Resistant & PVC)', 'Safety Gauntlets'] },
    { title: 'Foot Protection', items: ['Safety Boots', 'Steel Toe Boots', 'Wellington Boots'] },
    { title: 'Body Protection', items: ['Work Suits', 'Reflective Vests', 'Coveralls'] },
    { title: 'Eye & Face Protection', items: ['Goggles', 'Safety Glasses', 'Face Shields'] },
    { title: 'Respiratory Protection', items: ['Respirators', 'Dust Masks', 'Gas Masks'] },
    { title: 'Hearing Protection', items: ['Ear Muffs', 'Ear Plugs'] }
  ]

  return (
    <div className="section">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-900">Personal Protective Equipment (PPE)</h1>
              <p className="mt-4 text-lg text-slate-700">
                We supply certified, reliable personal protective equipment meeting safety standards across industries.
              </p>
              <p className="mt-4 text-slate-700">
                Ensure your workforce is protected with quality PPE from trusted manufacturers. All our equipment is tested and certified for workplace safety.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                alt="Personal protective equipment"
                src="https://images.unsplash.com/photo-1560958089-b8a1929cea89"
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

      {/* Categories */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Product Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div key={category.title} className="bg-white rounded-lg border p-6">
                <h3 className="text-xl font-semibold text-brand-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-brand-600" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Complete Catalog */}
      <div className="container-section py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-900 mb-6 text-center">Complete PPE Catalog</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {PPE_CATALOG.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-md bg-white border border-slate-200">
                <CheckCircle className="h-5 w-5 text-brand-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Safety helmets and hard hats" src="https://images.unsplash.com/photo-1544612332-f405dd69-ccc" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Safety gloves and protective equipment" src="https://images.unsplash.com/photo-1598756238436-f05e78d5784b" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Safety boots and work footwear" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="container-section py-12">
        <InquiryForm service="PPE Equipment" />
      </div>
    </div>
  )
}


