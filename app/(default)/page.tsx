import Head from 'next/head'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import AboutUs from '@/components/quisommesnous'
import Cookies from '@/components/cookies'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <>
      <Head>
        <title>Still-Inov Agency | Agence de Communication & Marketing Digitale - Développement Web, SEO & Réseaux Sociaux</title>
        <meta name="description" content="Still-Inov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité, quel que soit votre budget." />
        <meta name="keywords" content="communication digitale, création site web, design graphique, développement web, SEO, marketing digital, agence web, agence marketing bordeaux, agence communication bordeaux , agence communication digitale, audit marketing, référencement SEO, SEA, stratégies digitales,faire pub insta, faire pub facebook, faire pub google, faire audit" />

        <meta property="og:title" content="Still-Inov Agency | Agence de Communication & Marketing Digitale" />
        <meta property="og:description" content="Découvrez comment Still-Inov transforme vos idées en projets digitaux réussis grâce à des solutions personnalisées adaptées à vos besoins et à votre budget." />
        <meta property="og:url" content="https://www.stillinov.com" />
        <meta property="og:image" content="https://www.stillinov.com/images/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@StillInov" />
        <meta name="twitter:title" content="Still-Inov Agency | Agence de Communication & Marketing Digitale - Développement Web, SEO & Réseaux Sociaux" />
        <meta name="twitter:description" content="Still-Inov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité." />
        <meta name="twitter:image" content="https://www.stillinov.com/images/banner.png" />

        <script type="application/ld+json">
        {`
          {
            "@type": "Organization",
            "name": "Still-Inov Agency",
            "url": "https://www.stillinov.com",
            "logo": "https://www.stillinov.com/images/logo.png"
          }
        `}
        </script>
      </Head>

      <Hero />
      <Features />
      <AboutUs />
      <Testimonials />
      <Newsletter />
      <Cookies />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
