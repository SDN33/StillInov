// Define your Metadata type (if it's not available in your setup):
export interface Metadata {
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
  additionalMeta: Record<string, string>;
  structuredData: Record<string, any>;
  favicon?: string;  // Optional favicon property
}

// Export metadata as an object:
export const metadata: Metadata = {
  title: 'Still-inov Agency | Agence de Marketing & Communication Digitale à Bordeaux - Développement Web, SEO, Réseaux Sociaux',
  description: 'Still-inov, votre expert en marketing et communication digitale à Bordeaux...',
  keywords: 'still inov, styl inov, stillinov, communication digitale Bordeaux, création site web Bordeaux, design graphique Bordeaux, développement web Bordeaux, SEO Bordeaux, marketing digital Bordeaux, agence web Bordeaux, solutions personnalisées Bordeaux, agence communication digitale Bordeaux, audit marketing Bordeaux, référencement SEO Bordeaux, SEA Bordeaux, stratégies digitales Bordeaux, faire pub insta Bordeaux, faire pub facebook Bordeaux, faire pub google Bordeaux, faire audit Bordeaux',
  authors: {
    name: 'Still-inov Agency',
  },
  robots: 'index, follow',
  canonical: 'https://www.stillinov.com',
  openGraph: {
    title: 'Still-inov Agency | Agence de Marketing & Communication Digitale à Bordeaux',
    description: 'Découvrez comment Still-inov transforme vos idées...',
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
    description: 'Still-inov, votre partenaire à Bordeaux...',
    images: 'https://www.stillinov.com/images/banner.png',
  },
  additionalMeta: {
    'twitter:image:alt': 'Still-inov Agency - Agence de Marketing & Communication Digitale à Bordeaux',
    'twitter:creator': '@StillInov',
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Still-inov Agency',
    url: 'https://www.stillinov.com',
    logo: 'https://www.stillinov.com/images/logo.png',
    description: 'Agence de Marketing & Communication Digitale...',
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
  favicon: '/public/favicon.ico',  // Added favicon
};



import Hero from '@/components/hero';
import Features from '@/components/features';
import Rdvicon from '@/components/rdvicon';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


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
      <Analytics />
      <SpeedInsights />
    </>
  );
}
