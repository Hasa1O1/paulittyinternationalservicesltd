import Image from 'next/image'
import { IT_CATALOG } from '@/lib/constants'
import { InquiryForm } from '@/components/sections/InquiryForm'
import { Server, Shield, Cloud, Code, Wifi, Headphones, Database, Settings } from 'lucide-react'

export const metadata = { title: 'IT Services - Paulittty International Services Ltd' }

export default function ITPage() {
  const features = [
    { icon: Server, title: 'Network Solutions', text: 'Complete network setup and configuration for businesses' },
    { icon: Shield, title: 'Cybersecurity', text: 'Protect your data and systems with advanced security measures' },
    { icon: Cloud, title: 'Cloud Services', text: 'Migrate to the cloud with secure and scalable solutions' },
    { icon: Headphones, title: 'IT Support', text: 'Round-the-clock helpdesk and technical support' },
    { icon: Database, title: 'Data Management', text: 'Secure backup, recovery, and data management solutions' },
    { icon: Settings, title: 'System Maintenance', text: 'Regular maintenance to keep your systems running smoothly' }
  ]

  const services = [
    { title: 'Network Setup & Configuration', description: 'Professional network design, installation, and configuration for optimal performance and security' },
    { title: 'IT Support & Helpdesk', description: 'Responsive technical support to resolve issues quickly and keep your business running' },
    { title: 'Cybersecurity Solutions', description: 'Comprehensive security measures to protect against threats, malware, and data breaches' },
    { title: 'Cloud Services Setup', description: 'Seamless migration to cloud platforms with secure, scalable infrastructure solutions' },
    { title: 'Hardware & Software Installation', description: 'Expert installation and configuration of hardware components and business software' },
    { title: 'Data Backup & Recovery', description: 'Reliable backup solutions and disaster recovery planning to safeguard your critical data' },
    { title: 'Server Management', description: 'Professional server setup, maintenance, and optimization for peak performance' },
    { title: 'IT Consulting', description: 'Strategic IT consulting to optimize your technology infrastructure and operations' }
  ]

  return (
    <div className="section">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-900">IT Services & Solutions</h1>
              <p className="mt-4 text-lg text-slate-700">
                Comprehensive IT services to support your business technology needs. From network setup to cybersecurity, we provide reliable solutions for organizations of all sizes.
              </p>
              <p className="mt-4 text-slate-700">
                Our experienced IT team delivers professional services including network configuration, software support, cloud migration, and ongoing maintenance to keep your systems secure and efficient.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                alt="IT services and technology solutions"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
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

      {/* Services */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our IT Services</h2>
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

      {/* Complete Catalog */}
      <div className="container-section py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-900 mb-6 text-center">Complete IT Services Catalog</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {IT_CATALOG.map((item) => (
              <div key={item} className="flex items-center gap-2 p-3 rounded-md bg-white border border-slate-200">
                <Code className="h-5 w-5 text-brand-600" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our IT Solutions</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Network infrastructure and servers" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Cybersecurity and data protection" src="https://images.unsplash.com/photo-1563013544-824ae1b704d3" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Cloud computing and IT consulting" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container-section py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Why Choose Our IT Services</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Server className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Experienced Team</h3>
                <p className="text-sm text-slate-600">Certified IT professionals with years of experience in enterprise solutions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Secure & Reliable</h3>
                <p className="text-sm text-slate-600">Robust security measures and reliable systems you can trust</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Headphones className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-slate-600">Round-the-clock technical support when you need it most</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center">
                <Settings className="h-6 w-6 text-brand-700" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-900 mb-2">Customized Solutions</h3>
                <p className="text-sm text-slate-600">Tailored IT solutions to fit your specific business needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <InquiryForm service="IT Services" />
        </div>
      </div>
    </div>
  )
}

