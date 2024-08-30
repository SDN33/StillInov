'use client';

import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleRefuse = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-600 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0 sm:mr-4 text-center sm:text-left">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          Acceptez-vous l'utilisation de cookies ?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-white text-purple-600 rounded hover:bg-purple-100 transition duration-300 ease-in-out"
          >
            Accepter
          </button>
          <button
            onClick={handleRefuse}
            className="px-4 py-2 bg-transparent border border-white rounded hover:bg-purple-500 transition duration-300 ease-in-out"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
