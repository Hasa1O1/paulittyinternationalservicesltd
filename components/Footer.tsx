import Link from 'next/link'
import { COMPANY, SERVICES } from '@/lib/constants'
import { Facebook, Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com' }
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-slate-900 to-slate-800 text-slate-300">
      <div className="container-section py-12">
        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{COMPANY.name}</h3>
            <p className="text-sm leading-relaxed">
              Delivering professional printing solutions, reliable PPE supply, and quality landscaping services across Zambia.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 rounded-full bg-slate-800 hover:bg-brand-700 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition-colors duration-200">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-400 flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {COMPANY.email}
                </a>
              </li>
              {COMPANY.phone && (
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-400 flex-shrink-0" />
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {COMPANY.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">
              © {year} {COMPANY.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
