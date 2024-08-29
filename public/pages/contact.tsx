export const metadata = {
  title: 'StillInov | Contactez-nous pour vos projets digitaux',
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


import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xblrwadg");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (state.succeeded) {
    return (
      <Alert>
        <AlertDescription>
          Merci pour votre message ! Nous vous contacterons bientôt.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nom
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {state.submitting ? 'Envoi...' : 'Envoyer'}
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default ContactForm;
