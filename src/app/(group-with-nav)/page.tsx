import CategoryMovie from '@/components/CategoryMovie'
import HomePageBanner from '@/components/HomeBanner'
import LeatestMovie from '@/components/LeatestMovie'
import PopularMovie from '@/components/PopularMovie'
import TestimonialCarousel from '@/components/Testemonial'
import UniqeSectionOne from '@/components/UniqeSectionOne'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Toaster />
      <HomePageBanner />
      <CategoryMovie/>
      <LeatestMovie/>
      <PopularMovie/>
      <UniqeSectionOne/>
      <TestimonialCarousel />
    </div>
  )
}
