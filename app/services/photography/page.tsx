import Image from 'next/image'
import { PHOTOGRAPHY_CATALOG } from '@/lib/constants'
import { InquiryForm } from '@/components/sections/InquiryForm'
import { Camera, Sparkles, Users, ImageIcon, Video, Palette, Download } from 'lucide-react'

export const metadata = { title: 'Photography Services - Paulittty International Services Ltd' }

export default function PhotographyPage() {
  const features = [
    { icon: Camera, title: 'Professional Equipment', text: 'State-of-the-art cameras and lighting for exceptional quality' },
    { icon: Sparkles, title: 'Creative Excellence', text: 'Artistic vision combined with technical expertise' },
    { icon: Users, title: 'Event Coverage', text: 'Complete coverage of corporate events, weddings, and special occasions' },
    { icon: ImageIcon, title: 'Product Photography', text: 'High-quality product images that showcase your offerings' },
    { icon: Video, title: 'Photo & Video Services', text: 'Comprehensive visual documentation and storytelling' },
    { icon: Palette, title: 'Editing & Retouching', text: 'Professional post-processing for polished final results' }
  ]

  const services = [
    { title: 'Corporate Events Photography', description: 'Professional documentation of conferences, seminars, corporate gatherings, and business events with high-quality images' },
    { title: 'Wedding Photography', description: 'Beautiful wedding photography to capture your special day with artistic and timeless images' },
    { title: 'Product Photography', description: 'Stunning product images that highlight features and quality for marketing and e-commerce' },
    { title: 'Portrait Photography', description: 'Professional headshots, family portraits, and personal photography sessions' },
    { title: 'Commercial Photography', description: 'Marketing and advertising photography tailored to your brand and campaign needs' },
    { title: 'Event Coverage', description: 'Comprehensive event photography services for parties, ceremonies, and celebrations' },
    { title: 'Photography Editing & Retouching', description: 'Professional photo editing, color correction, and retouching services' },
    { title: 'Drone & Aerial Photography', description: 'Breathtaking aerial and drone photography for unique perspectives and large-scale events' }
  ]

  const categories = [
    { title: 'Event Photography', items: ['Corporate Events', 'Weddings', 'Parties & Celebrations', 'Conferences'] },
    { title: 'Commercial Photography', items: ['Product Photography', 'Real Estate', 'Marketing Campaigns', 'Brand Photography'] },
    { title: 'Portrait Services', items: ['Headshots', 'Family Portraits', 'Personal Branding', 'Graduation Photos'] },
    { title: 'Specialty Services', items: ['Drone Photography', 'Photo Restoration', 'Photo Printing', 'Video Production'] }
  ]

  return (
    <div className="section">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-900">Professional Photography Services</h1>
              <p className="mt-4 text-lg text-slate-700">
                Capturing your special moments with professional photography services. From corporate events to weddings, portraits to product shots, we deliver exceptional quality and creative excellence.
              </p>
              <p className="mt-4 text-slate-700">
                Our skilled photographers use state-of-the-art equipment and artistic vision to create stunning images that tell your story and showcase your brand.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                alt="Professional photography services"
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Photography Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Services */}
      <div className="container-section py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg border p-6">
              <h3 className="text-xl font-semibold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Catalog */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 mb-6 text-center">Complete Photography Services Catalog</h2>
            <div className="grid gap-2 sm:grid-cols-2">
              {PHOTOGRAPHY_CATALOG.map((item) => (
                <div key={item} className="flex items-center gap-2 p-3 rounded-md bg-white border border-slate-200">
                  <Camera className="h-5 w-5 text-brand-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="container-section py-12">
        <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our Work</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image alt="Wedding photography" src="https://images.unsplash.com/photo-1519741497674-611481863552" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image alt="Corporate event photography" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image alt="Product photography" src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a" fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Why Choose Our Photography Services</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Camera className="h-6 w-6 text-brand-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">Professional Equipment</h3>
                  <p className="text-sm text-slate-600">Latest cameras, lenses, and professional lighting equipment</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-brand-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">Creative Expertise</h3>
                  <p className="text-sm text-slate-600">Skilled photographers with artistic vision and technical mastery</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Download className="h-6 w-6 text-brand-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-slate-600">Quick turnaround times without compromising on quality</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-brand-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-900 mb-2">Professional Editing</h3>
                  <p className="text-sm text-slate-600">Expert post-processing and retouching for polished results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="container-section py-12">
        <InquiryForm service="Photography Services" />
      </div>
    </div>
  )
}

