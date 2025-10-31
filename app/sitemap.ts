import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://paulittty.example.com'
  const routes = ['', '/about', '/services', '/services/printing', '/services/ppe', '/services/landscaping', '/services/it', '/services/photography', '/clients', '/contact']
  const now = new Date()
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: now, changeFrequency: 'monthly', priority: r === '' ? 1 : 0.7 }))
}


