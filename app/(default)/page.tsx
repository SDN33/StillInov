export const metadata: Metadata = {
  title: 'Still-inov Agency | Agence de Marketing & Communication Digitale à Bordeaux - Développement Web, SEO, Réseaux Sociaux',
  description: 'Still-inov, votre expert en marketing et communication digitale à Bordeaux. Offrant des services personnalisés de création, design et développement web, SEO, et gestion des réseaux sociaux pour booster votre présence en ligne et transformer vos idées en réalité.',
  keywords: 'communication digitale Bordeaux, création site web Bordeaux, design graphique Bordeaux, développement web Bordeaux, SEO Bordeaux, marketing digital Bordeaux, agence web Bordeaux, agence marketing Bordeaux, agence communication Bordeaux, agence digitale Bordeaux, référencement SEO Bordeaux, SEA Bordeaux, stratégies digitales Bordeaux, publicité Instagram Bordeaux, publicité Facebook Bordeaux, publicité Google Bordeaux, audit marketing Bordeaux, transformation digitale Bordeaux',
  authors: {
    name: 'Still-inov Agency',
  },
  robots: 'index, follow',
  canonical: 'https://www.stillinov.com',
  openGraph: {
    title: 'Still-inov Agency | Agence de Marketing & Communication Digitale à Bordeaux',
    description: 'Découvrez comment Still-inov, agence digitale basée à Bordeaux, transforme vos idées en projets numériques réussis grâce à des solutions sur-mesure, adaptées à vos besoins et à votre budget.',
    url: 'https://www.stillinov.com',
    type: 'website',
    images: [
      {
        url: 'https://www.stillinov.com/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'Still-inov Agency - Agence de Marketing & Communication Digitale à Bordeaux',
      },
    ],
    locale: 'fr_FR',
    siteName: 'Still-inov Agency',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StillInov',
    title: 'Still-inov Agency | Agence de Marketing & Communication Digitale à Bordeaux',
    description: 'Still-inov, votre partenaire à Bordeaux pour la communication digitale, vous offre des services de création, design, développement web et SEO pour donner vie à vos projets.',
    images: 'https://www.stillinov.com/images/banner.png',
  },
  additionalMeta: {
    'og:locale': 'fr_FR',
    'og:site_name': 'Still-inov Agency',
    'og:type': 'website',
    'og:url': 'https://www.stillinov.com',
    'twitter:image:alt': 'Still-inov Agency - Agence de Marketing & Communication Digitale à Bordeaux',
    'twitter:creator': '@StillInov',
    'twitter:site': '@StillInov',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Still-inov Agency',
    url: 'https://www.stillinov.com',
    logo: 'https://www.stillinov.com/images/logo.png',
    description: 'Agence de Marketing & Communication Digitale basée à Bordeaux, spécialisée en développement web, SEO, et gestion des réseaux sociaux.',
    sameAs: [
      'https://www.linkedin.com/company/still-inov',
      'https://twitter.com/StillInov',
      'https://www.facebook.com/StillInov',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-6-09-95-24-09',
      contactType: 'Customer Service',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  },
};

interface Metadata {
  title: string;
  description: string;
  keywords: string;
  authors: {
    name: string;
  };
  robots: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
    locale: string;
    siteName: string;
  };
  twitter: {
    card: string;
    site: string;
    title: string;
    description: string;
    images: string;
  };
  additionalMeta: {
    'og:locale': string;
    'og:site_name': string;
    'og:type': string;
    'og:url': string;
    'twitter:image:alt': string;
    'twitter:creator': string;
    'twitter:site': string;
  };
  structuredData: {
    '@context': string;
    '@type': string;
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
    contactPoint: {
      '@type': string;
      telephone: string;
      contactType: string;
      areaServed: string;
      availableLanguage: string[];
    };
  };
}


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
      <Newsletter />
      <Cookies />
      <Rdvicon />
      <Analytics  />
      <SpeedInsights />
    </>)
}
