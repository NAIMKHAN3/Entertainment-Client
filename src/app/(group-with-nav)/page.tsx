import CategoryMovie from '@/components/CategoryMovie'
import HomePageBanner from '@/components/HomeBanner'
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
      <UniqeSectionOne/>
      <TestimonialCarousel />
    </div>
  )
}
