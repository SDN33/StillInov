
export const metadata = {
  title: 'Still-inov Agency | Agence de Marketing & Communication Digitale - Développement Web, SEO & Réseaux Sociaux | Bordeaux',
  description: 'Still-inov, votre partenaire en marketing & communication digitale, vous offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité, quel que soit votre budget.',
  keywords: 'communication digitale, création site web, design graphique, développement web, SEO, marketing digital, agence web, agence marketing bordeaux, agence communication bordeaux , agence communication digitale, audit marketing, référencement SEO, SEA, stratégies digitales,faire pub insta, faire pub facebook, faire pub google, faire audit, agence digitale bordeaux, agence web bordeaux, agence marketing bordeaux',
  openGraph: {
    title: 'Still-inov Agency | Agence de Marketing & Communication Digitale | Bordeaux',
    description: 'Découvrez comment Still-inov transforme vos idées en projets digitaux réussis grâce à des solutions personnalisées adaptées à vos besoins et à votre budget.',
    url: 'https://www.stillinov.com',
    type: 'website',
    images: [
      {
        url: 'https://www.stillinov.com/images/banner.png', // Assurez-vous d'avoir une image dédiée pour Open Graph
        width: 1200,
        height: 630,
        alt: 'Still-inov Agency - Agence de Marketing & Communication Digitale | Bordeaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StillInov',
    title: 'Still-inov Agency | Agence de Marketing & Communication Digitale | Bordeaux',
    description: 'Still-inov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité.',
  },

};

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import AboutUs from '@/components/quisommesnous'
import Cookies from '@/components/cookies'
import Rdvicon from '@/components/rdvicon'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <script src="https://widget.trustmary.com/ZVh0Xu1q0"></script>
      <Newsletter />
      <Cookies />
      <Rdvicon />
      <Analytics  />
      <SpeedInsights />
    </>)
}
