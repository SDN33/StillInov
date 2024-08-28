export const metadata = {
  title: 'StillInov | Agence de communication digitale',
  description: 'Donnez vie à vos ambitions digitales et transformez vos idées en réalité.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import AboutUs from '@/components/quisommesnous'
import Cookies from '@/components/cookies'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <Newsletter />
      <Cookies />
    </>
  )
}
