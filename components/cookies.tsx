'use client';
import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    const consentTime = localStorage.getItem("consentTime");

    if (!cookieConsent || (consentTime && Date.now() - parseInt(consentTime) > 12 * 60 * 60 * 1000)) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    localStorage.setItem("cookieConsent", consent ? "accepted" : "refused");
    localStorage.setItem("consentTime", Date.now().toString());
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-60">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 ">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-green-700 to-orange-500 text-white rounded-full p-2 mr-3">
            <span className="font-bold text-xl">🍪</span>
          </div>
          <h2 className="text-lg text-black font-bold">Consentement aux cookies</h2>
        </div>
        <p className="mb-4 text-sm text-black">
          <strong>Stillinov.com</strong> demande votre consentement pour utiliser vos données à caractère personnel dans les cas suivants :
        </p>
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Info className="mr-2 flex-shrink-0 text-orange-600" size={20} />
            <p className="text-sm text-black">Publicités et contenu personnalisés, mesure de performance des publicités et du contenu, études d&apos;audience et développement de services</p>
          </div>
          <div className="flex items-start">
            <Info className="mr-2 flex-shrink-0 text-orange-600" size={20} />
            <p className="text-sm text-black">Stocker et/ou accéder à des informations sur un appareil</p>
          </div>
        </div>
        <details className="mb-4">
          <summary className="text-sm text-orange-600 cursor-pointer">En savoir plus</summary>
          <p className="mt-2 text-xs text-black">
            Vos données à caractère personnel seront traitées, stockées et/ou accédées par les fournisseurs suivants : Google, Facebook, LinkedIn, Twitter, Microsoft, et d&apos;autres partenaires publicitaires et d&apos;analyse. Vous pouvez retirer votre consentement ou vous opposer aux traitements basés sur l&apos;intérêt légitime à tout moment en cliquant sur le lien en bas de cette page.
          </p>
          <p className="mt-2 text-xs text-black">
            Certains fournisseurs sont susceptibles de traiter vos données à caractère personnel selon le principe de l&apos;intérêt légitime. Vous pouvez vous y opposer en gérant vos options ci-dessous. Cliquez sur le lien en bas de cette page pour gérer ou retirer votre consentement des paramètres de confidentialité.
          </p>
        </details>
        <div className="flex justify-center">
          <button
            onClick={() => handleConsent(false)}
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Refuser
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Autoriser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
