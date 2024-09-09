import dynamic from 'next/dynamic';
import Head from 'next/head';
import Hero from '@/components/hero';
import Features from '@/components/features';
import AboutUs from '@/components/quisommesnous';
import Cookies from '@/components/cookies';
import Rdvicon from '@/components/rdvicon';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Lazy load Testimonials and Newsletter
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Newsletter = dynamic(() => import('@/components/newsletter'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Still-inov Agency | Agence de Marketing & Communication Digitale - Développement Web, SEO & Réseaux Sociaux | Bordeaux</title>
        <meta name="description" content="Still-inov, votre partenaire en marketing & communication digitale, vous offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité, quel que soit votre budget." />
        <meta name="keywords" content="communication digitale, création site web, design graphique, développement web, SEO, marketing digital, agence web, agence marketing bordeaux, agence communication bordeaux , agence communication digitale, audit marketing, référencement SEO, SEA, stratégies digitales,faire pub insta, faire pub facebook, faire pub google, faire audit, agence digitale bordeaux, agence web bordeaux, agence marketing bordeaux" />
        <meta name="author" content="Still-inov Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.stillinov.com" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Still-inov Agency | Agence de Marketing & Communication Digitale | Bordeaux" />
        <meta property="og:description" content="Découvrez comment Still-inov transforme vos idées en projets digitaux réussis grâce à des solutions personnalisées adaptées à vos besoins et à votre budget." />
        <meta property="og:url" content="https://www.stillinov.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.stillinov.com/images/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Still-inov Agency - Agence de Marketing & Communication Digitale | Bordeaux" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@StillInov" />
        <meta name="twitter:title" content="Still-inov Agency | Agence de Marketing & Communication Digitale | Bordeaux" />
        <meta name="twitter:description" content="Still-inov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité." />
        <meta name="twitter:image" content="https://www.stillinov.com/images/banner.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

      </Head>
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
