export const metadata = {
  title: 'Still-Inov Agency | Contactez-nous',
  description: 'StillInov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité, quel que soit votre budget.',
  keywords: 'communication digitale, création site web, design graphique, développement web, SEO, marketing digital, agence web, solutions personnalisées, agence communication digitale, audit marketing, référencement SEO, SEA, stratégies digitales,faire pub insta, faire pub facebook, faire pub google, faire audit',
  openGraph: {
    title: 'Still-Inov Agency | Agence de Communication Digitale',
    description: 'Découvrez comment StillInov transforme vos idées en projets digitaux réussis grâce à des solutions personnalisées adaptées à vos besoins et à votre budget.',
    url: 'https://www.stillinov.com',
    type: 'website',
    images: [
      {
        url: 'https://www.stillinov.com/images/logo.png', // Assurez-vous d'avoir une image dédiée pour Open Graph
        width: 1200,
        height: 630,
        alt: 'Still-Inov - Agence de Communication Digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@StillInov',
    title: 'Still-Inov Agency | Agence de Communication Digitale - Création, Design & Développement Web',
    description: 'Still-Inov, votre partenaire en communication digitale, offre des services personnalisés de création, design, et développement web pour transformer vos idées en réalité.',
  },
};


import React from 'react';

// Define the ContactForm component
const ContactForm: React.FC = () => {
  return (
    <section className="bg-[#485b51] py-16 sm:py-22 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-[#f15e4b] mb-2">Contactez-nous</h3>
            <p className="text-gray-700">
              Envoyez-nous un message, nous serons ravis de vous répondre dans les plus brefs délais. 🚀
            </p>
          </div>

          <form
            action="https://formspree.io/f/xblrwadg"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#485b51] focus:border-[#485b51]"
                placeholder="Votre email…"
                aria-label="Votre email…"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full mt-1 p-3 border border-gray-700 rounded-md shadow-sm focus:ring-[#485b51] focus:border-[#485b51]"
                placeholder="Votre message…"
                aria-label="Votre message…"
                rows={4}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#f15e4b] text-white py-3 px-4 rounded-md shadow-sm hover:bg-[#485b51] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#485b51]"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Define the Contact component
const Contact: React.FC = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};

export default Contact;
