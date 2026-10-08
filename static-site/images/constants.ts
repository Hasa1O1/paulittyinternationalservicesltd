import { ShieldCheck, Handshake, Lightbulb, Users, TrendingUp, Shield } from 'lucide-react'

export const COMPANY = {
  name: 'Paulittty International Services Ltd',
  address: 'Audiovision House, Obote Avenue, Town Centre, Kitwe',
  phone: '+260965905968',
  phones: ['0977133018', '0972220907', '+260965905968'],
  email: 'Paulitty.inter@gmail.com'
}

export const VISION = 'We are the carriers of quality service and product delivery, today, tomorrow and forward'
export const MISSION = 'Doing things the Paulitty way with the Spirit of Quality'

export const CORE_VALUES: { title: string; description: string; icon: any }[] = [
  { title: 'Collaboration', description: 'The heart and soul of our company', icon: Users },
  { title: 'Respect', description: 'Absolute respect for all individuals', icon: Handshake },
  { title: 'Innovation', description: 'Daring to think and do different', icon: Lightbulb },
  { title: 'Safety', description: 'Safe work practices for people and environment', icon: Shield },
  { title: 'Success', description: 'Delivering on client success', icon: TrendingUp },
  { title: 'Integrity', description: 'Integrity of work and relationships', icon: ShieldCheck }
]

export const SERVICES = [
  {
    slug: 'printing',
    title: 'Printing Services',
    summary: 'Commercial printing: business cards, billboards, signage, menus and more.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
  },
  {
    slug: 'it',
    title: 'IT Services',
    summary: 'Comprehensive IT solutions: network setup, software support, cybersecurity, and cloud services.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa'
  }
]

export const PRINTING_CATALOG = [
  'Business Cards',
  'PVC ID Cards',
  'Letterheads',
  'Flyers',
  'Brochures',
  'Log Books',
  'Payment Vouchers',
  'Billboards',
  'Banners',
  'Safety Signs',
  'T-shirt Printing',
  'Posters',
  'Outdoor & Indoor Signage'
]

export const IT_CATALOG = [
  'Network Setup & Configuration',
  'Network Troubleshooting',
  'IT Support & Helpdesk',
  'Software Installation & Updates',
  'Hardware Installation & Repair',
  'Cybersecurity Solutions',
  'Data Backup & Recovery',
  'Cloud Services Setup',
  'Email System Configuration',
  'Server Management',
  'IT Consulting',
  'System Maintenance',
  'Remote Support Services',
  'IT Training & Workshops'
]
