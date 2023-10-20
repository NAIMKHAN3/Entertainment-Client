import CategoryMovie from '@/components/CategoryMovie'
import FeedBackForm from '@/components/FeedBackForm'
import HomePageBanner from '@/components/HomeBanner'

import LeatestMovie from '@/components/LeatestMovie'
import PopularMovie from '@/components/PopularMovie'
import ScrollToTop from '@/components/ScrollToTop'
import TestimonialCarousel from '@/components/Testemonial'
import UniqeSectionOne from '@/components/UniqeSectionOne'
import WeChatWhatsup from '@/components/WeChatWhatsUp'
import Image from 'next/image'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  if(typeof window !== "undefined"){
    window.location.reload()
  }
  return (
    <div>
      <Toaster />
      <HomePageBanner />
      <CategoryMovie/>
      <LeatestMovie/>
      <PopularMovie/>
      <UniqeSectionOne/>
      <TestimonialCarousel />
      <FeedBackForm/>
      <WeChatWhatsup/>
      <ScrollToTop/>
    </div>
  )
}
