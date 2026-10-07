"use client"

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import businessCardOne from '@/lib/business cards/9af45b03-6354-4ae2-a09b-853c8af6e88a.jpg'
import businessCardTwo from '@/lib/business cards/2112ead2-d6d0-4731-a0c1-87812dee0554.jpg'
import businessCardThree from '@/lib/business cards/20201130_133755.jpg'
import weddingCardOne from '@/lib/Wedding Cards/9AC2FE10-095C-4A2A-AD78-90B79C62EB15.jpg'
import weddingCardTwo from '@/lib/Wedding Cards/34F02381-BFFE-4034-A48A-B68CC4DFC42C.jpg'
import weddingCardThree from '@/lib/Wedding Cards/70C3C41E-D190-4239-9C75-38B852EEC5C1.jpg'
import weddingCardFour from '@/lib/Wedding Cards/73A4137D-53E3-4879-A02B-F712FB8D3854.jpg'
import weddingCardFive from '@/lib/Wedding Cards/B37C7C2F-83EC-48E7-A5DC-F18176387D4B.jpg'
import bannerOne from '@/lib/banners/375adec2-6c33-4898-9dee-1706385c92fb.jpg'
import bannerTwo from '@/lib/banners/543e811d-73d6-4b2b-89a3-6e1314c34e16.jpg'
import bannerThree from '@/lib/banners/img_2452.jpg'
import bannerFour from '@/lib/banners/img_3004.jpg'
import bannerFive from '@/lib/banners/f2531e91-3a7e-42a4-a7b7-7324fc1ea111.jpg'
import profileOne from '@/lib/company profiles/20220412_152806.jpg'
import profileTwo from '@/lib/company profiles/IMG_2116.HEIC'
import profileThree from '@/lib/company profiles/IMG_2118.HEIC'
import profileFour from '@/lib/company profiles/IMG_2953.HEIC'
import profileFive from '@/lib/company profiles/IMG_2954.HEIC'
import profileSix from '@/lib/company profiles/IMG_3076.HEIC'
import profileSeven from '@/lib/company profiles/IMG_3472.HEIC'
import profileEight from '@/lib/company profiles/IMG_3473.HEIC'
import profileNine from '@/lib/company profiles/IMG_4909.JPG'
import brochureOne from '@/lib/Brochures/20210108_132339.jpg'
import brochureTwo from '@/lib/Brochures/IMG_2031.HEIC'
import brochureThree from '@/lib/Brochures/IMG_2035.HEIC'
import brochureFour from '@/lib/Brochures/IMG_4455.HEIC'
import printOne from '@/lib/books/20220422_192137.jpg'
import printTwo from '@/lib/books/20220422_192206.jpg'
import packageOne from '@/lib/Packaging/IMG_0038.JPG'
import shirtOne from '@/lib/T-shirt printing/DF394249-789B-47D3-913B-F016B0675B44.jpg'
import badgeOne from '@/lib/Badges/IMG_3139.HEIC'
import badgeTwo from '@/lib/Badges/IMG_8447.JPG'
import idOne from '@/lib/ID\'s/IMG_0349.HEIC'
import idTwo from '@/lib/ID\'s/IMG_3512.HEIC'
import certificateOne from '@/lib/certificates/IMG_3602.HEIC'
import flyerOne from '@/lib/flyers/IMG_2969.HEIC'
import { SERVICES } from '@/lib/constants'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type PortfolioGroup = {
  title: string
  items: StaticImageData[]
}

const portfolioGroups: PortfolioGroup[] = [
  { title: 'Business Cards', items: [businessCardOne, businessCardTwo, businessCardThree] },
  { title: 'Wedding Cards', items: [weddingCardOne, weddingCardTwo, weddingCardThree, weddingCardFour, weddingCardFive] },
  { title: 'Banners', items: [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive] },
  { title: 'Company Profiles', items: [profileOne, profileTwo, profileThree, profileFour, profileFive, profileSix, profileSeven, profileEight, profileNine] },
  { title: 'Brochures', items: [brochureOne, brochureTwo, brochureThree, brochureFour] },
  { title: 'Badges', items: [badgeOne, badgeTwo] },
  { title: 'ID Cards', items: [idOne, idTwo] },
  { title: 'Certificates', items: [certificateOne] },
  { title: 'Books & Flyers', items: [printOne, printTwo, flyerOne] },
  { title: 'Packaging & T-shirt Printing', items: [packageOne, shirtOne] }
]

function PortfolioSlider({ title, items }: PortfolioGroup) {
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    sliderRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth'
    })
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-brand-900">{title}</h3>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Scroll ${title} left`}
            onClick={() => scroll('left')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-brand-700 hover:text-brand-700"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={`Scroll ${title} right`}
            onClick={() => scroll('right')}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-brand-700 hover:text-brand-700"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div ref={sliderRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((image, index) => (
          <div
            key={`${title}-${index}`}
            className="relative h-72 w-[280px] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:h-80 sm:w-[320px]"
          >
            <Image
              src={image}
              alt={`${title} sample ${index + 1}`}
              fill
              sizes="(max-width: 768px) 280px, 320px"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ServicesIndex() {
  return (
    <div className="section">
      <div className="container-section">
        <h1 className="text-3xl font-bold text-brand-900">Our Services</h1>
        <p className="mt-2 max-w-2xl text-slate-700">We provide professional commercial printing and reliable IT services for businesses, institutions, and organisations across Zambia.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.slug}>
              <CardHeader>
                <h2 className="text-lg font-semibold">{s.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">{s.summary}</p>
                <Link href={`/services/${s.slug}`} className="mt-4 inline-block font-medium text-brand-700 hover:underline">View details →</Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Portfolio</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-900">Our latest work</h2>
            </div>
          </div>

          <div className="mt-8 space-y-10">
            {portfolioGroups.map((group) => (
              <PortfolioSlider key={group.title} {...group} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}


