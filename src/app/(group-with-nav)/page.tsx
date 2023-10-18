import HomePageBanner from '@/components/HomeBanner'
import TestimonialCarousel from '@/components/Testemonial'
import UniqeSectionOne from '@/components/UniqeSectionOne'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <Toaster />
      <h1>This is App page</h1>
      <HomePageBanner />
      <UniqeSectionOne/>
      <TestimonialCarousel />
    </div>
  )
}
