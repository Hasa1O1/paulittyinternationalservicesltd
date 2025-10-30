import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paulittty International Services Ltd',
  description: 'Commercial printing, PPE, and landscaping services in Zambia',
  keywords: [
    'Printing',
    'PPE',
    'Landscaping',
    'Zambia',
    'Commercial Printers',
  ],
  openGraph: {
    title: 'Paulittty International Services Ltd',
    description: 'Commercial printing, PPE, and landscaping services in Zambia',
    type: 'website'
  },
  metadataBase: new URL('https://paulittty.example.com')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* JSON-LD structured data minimal org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Paulittty International Services Ltd',
              url: 'https://paulittty.example.com',
              address: 'Audiovision House, Obote Avenue, Town Centre, Kitwe',
              sameAs: []
            })
          }}
        />
      </body>
    </html>
  )
}



