export const metadata = {
  title: 'StillInov | Agence de Communication Digitale - Création, Design & Développement Web',
  description: 'StillInov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité, quel que soit votre budget.',
  keywords: 'communication digitale, création site web, design graphique, développement web, SEO, marketing digital, agence web, solutions personnalisées, agence communication digitale, audit marketing, référencement SEO, SEA, stratégies digitales,faire pub insta, faire pub facebook, faire pub google, faire audit',
  openGraph: {
    title: 'StillInov | Agence de Communication Digitale',
    description: 'Découvrez comment StillInov transforme vos idées en projets digitaux réussis grâce à des solutions personnalisées adaptées à vos besoins et à votre budget.',
    url: 'https://www.stillinov.com',
    type: 'website',
    images: [
      {
        url: 'https://www.stillinov.com/images/logo.png', // Assurez-vous d'avoir une image dédiée pour Open Graph
        width: 1200,
        height: 630,
        alt: 'StillInov - Agence de Communication Digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StillInov',
    title: 'StillInov | Agence de Communication Digitale - Création, Design & Développement Web',
    description: 'StillInov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité.',
  },
};


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

    </>)
}
