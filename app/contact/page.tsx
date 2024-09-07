
// app/contact/page.tsx
import React from 'react';
import ContactForm from './contact-form';
import Footer from '@/components/ui/footer';


export const metadata = {
  title: 'Still-inov Agency | Contactez-nous',
  description: 'StillInov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité, quel que soit votre budget.',
  keywords: 'communication digitale, création site web, design graphique, développement web, SEO, marketing digital, agence web, solutions personnalisées, agence communication digitale, audit marketing, référencement SEO, SEA, stratégies digitales,faire pub insta, faire pub facebook, faire pub google, faire audit',
  openGraph: {
    title: 'Still-inov Agency | Agence de Communication Digitale',
    description: 'Découvrez comment Still-inov transforme vos idées en projets digitaux réussis grâce à des solutions personnalisées adaptées à vos besoins et à votre budget.',
    url: 'https://www.stillinov.com',
    type: 'website',
    images: [
      {
        url: 'https://www.stillinov.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Still-inov - Agence de Communication Digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StillInov',
    title: 'Still-inov Agency | Agence de Communication Digitale - Création, Design & Développement Web',
    description: 'Still-inov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité.',
  },
};



const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
