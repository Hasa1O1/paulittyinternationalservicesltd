import { COMPANY } from '@/lib/constants'
import { InquiryForm } from '@/components/sections/InquiryForm'

export const metadata = { title: 'Contact - Paulittty International Services Ltd' }

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-section grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-brand-900">Get in touch</h1>
          <p className="mt-2 text-slate-700">We would love to learn about your project needs.</p>
          <div className="mt-6 rounded-lg border bg-white p-6">
            <p className="font-semibold">Address</p>
            <p className="text-slate-700">{COMPANY.address}</p>
            <p className="mt-4 font-semibold">Email</p>
            <p>{COMPANY.email}</p>
          </div>
          <div className="mt-6 aspect-[16/9] w-full rounded-lg">
            <iframe
              title="Map"
              className="h-full w-full rounded-lg border"
              loading="lazy"
              src="https://www.google.com/maps?q=Obote%20Avenue%2C%20Kitwe&output=embed"
              aria-label="Map showing office location"
            />
          </div>
        </div>
        <div>
          <InquiryForm service="General Inquiry" />
        </div>
      </div>
    </div>
  )
}


