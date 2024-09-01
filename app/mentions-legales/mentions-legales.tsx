'use client';
import React from 'react';

const MentionsLegales: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#f37335] via-[#f15e4b] to-[#90e7d3] py-16 sm:py-22 mt-16 sm:mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Mentions Légales</h1>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Informations générales</h2>
            <p>Le site web <strong>Still-Inov Agency</strong> est édité par Dei-negri Stéphane, dont le siège social est situé à Saint-Caprais de Bordeaux, France. Numéro de siret : 80865768800020.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p>Le site est hébergé par Vercel.com, situé à Vercel Inc. 340 S Lemon Ave #4133 Walnut, CA 91789 USA.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
            <p>Le contenu du site est protégé par les droits d'auteur et est la propriété exclusive de Still-Inov Agency. Toute reproduction est interdite.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Données personnelles</h2>
            <p>Les informations collectées sur ce site sont utilisées dans le cadre légal prévu par la législation française.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur. En continuant à naviguer sur ce site, vous acceptez l'utilisation des cookies.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p>Pour toute question, veuillez nous contacter à l'adresse email suivante : <a href="mailto:stillinovagency@gmail.com" className="text-blue-600">contact@stillinov.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentionsLegales;
