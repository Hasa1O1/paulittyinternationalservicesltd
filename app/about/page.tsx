import Image from 'next/image'
import { CORE_VALUES, MISSION, VISION, COMPANY } from '@/lib/constants'
import { Building2, Target, Award, Briefcase } from 'lucide-react'

export const metadata = { title: 'About Us - Paulittty International Services Ltd' }

export default function AboutPage() {
  return (
    <div className="section">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-50 via-white to-slate-50">
        <div className="container-section py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-brand-900">About Paulitty International Services Ltd</h1>
              <p className="mt-6 text-lg text-slate-700">
                Paulitty International Services Limited is an independent organisation operating as a
                product marketing and general trading company based in Kitwe on the Copperbelt of Zambia.
              </p>
              <p className="mt-4 text-slate-700">
                Our primary objective is to establish long-term, mutually beneficial relationships with
                customers based on the ability to deliver and support high quality services at competitive prices.
              </p>
              <div className="mt-8 p-6 bg-white rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Location</p>
                <p className="font-semibold text-brand-900">{COMPANY.address}</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
              <Image
                alt="Business office"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="container-section py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50">
            <Building2 className="h-12 w-12 text-brand-700 mb-4" />
            <div className="text-3xl font-bold text-brand-900">2009</div>
            <p className="mt-2 text-sm text-slate-600">Founded</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50">
            <Target className="h-12 w-12 text-brand-700 mb-4" />
            <div className="text-3xl font-bold text-brand-900">3</div>
            <p className="mt-2 text-sm text-slate-600">Core Services</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50">
            <Award className="h-12 w-12 text-brand-700 mb-4" />
            <div className="text-3xl font-bold text-brand-900">15+</div>
            <p className="mt-2 text-sm text-slate-600">Years Experience</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-slate-50">
            <Briefcase className="h-12 w-12 text-brand-700 mb-4" />
            <div className="text-3xl font-bold text-brand-900">10+</div>
            <p className="mt-2 text-sm text-slate-600">Major Clients</p>
          </div>
        </div>
      </div>

      {/* Company History */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8">Company History</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg border p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-brand-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-4">Our Journey Since 2009</h3>
                  <p className="text-slate-700 mb-4">
                    Incorporated in 2009, the company evolved from a secretarial services business into a full-time
                    commercial printing provider and diversified services company.
                  </p>
                  <p className="text-slate-700">
                    Over the years, we have expanded to include PPE supply and landscaping maintenance services, 
                    building on our reputation for quality and reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg border p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center">
                  <Target className="h-8 w-8 text-brand-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-4">Growth & Expansion</h3>
                  <p className="text-slate-700 mb-4">
                    Starting as a secretarial services company, we transitioned to printing and are now in 
                    full-time printing business while diversifying into additional service areas.
                  </p>
                  <p className="text-slate-700">
                    Today, we serve clients across the Copperbelt and beyond, providing comprehensive 
                    business solutions with the spirit of quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="container-section py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="p-8 rounded-lg border bg-gradient-to-br from-brand-50 to-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-brand-700">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-brand-900">Vision</h2>
            </div>
            <p className="text-lg text-slate-700 italic font-medium">{VISION}</p>
          </div>
          <div className="p-8 rounded-lg border bg-gradient-to-br from-brand-50 to-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-brand-700">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-brand-900">Mission</h2>
            </div>
            <p className="text-lg text-slate-700 italic font-medium">{MISSION}</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Core Values</h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-brand-100">
                    <value.icon className="h-6 w-6 text-brand-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Philosophy */}
      <div className="container-section py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Business Philosophy</h2>
          </div>
          <div className="bg-gradient-to-br from-brand-50 to-white rounded-lg border p-8 lg:p-12">
            <p className="text-lg text-slate-700 mb-6">
              We deliver measurable business value as a preferred, performance-driven supplier through careful
              selection of diversified products and services aligned to formal sector needs.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Our decisions are guided by a deep understanding of customer requirements, reliable availability, 
              and strong relationships with certified distributors and manufacturers.
            </p>
            <p className="text-lg text-slate-700">
              We commit to delivering real and measurable business value to customers as an engendered 
              empowerment organisation that earns the right to be regarded as a preferred, performance driven supplier.
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-slate-50">
        <div className="container-section py-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-8 text-center">Our Workspace</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Modern office workspace" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Professional team meeting" src="https://images.unsplash.com/photo-1551434678-e076c223a692" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image alt="Business consultation" src="https://images.unsplash.com/photo-1556761175-b413da4baf72" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


