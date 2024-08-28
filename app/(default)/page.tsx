import Head from 'next/head'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import AboutUs from '@/components/quisommesnous'
import CookieConsentBanner from '@/components/cookies'

export default function Home() {
  return (
    <>
      <Head>
        <title>StillInov | Agence de communication digitale</title>
        <meta name="description" content="Donnez vie à vos ambitions digitales et transformez vos idées en réalité." />
      </Head>
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <Newsletter />
      <CookieConsentBanner />
    </>
  )
}
