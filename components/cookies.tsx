'use client';
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkCookieConsent = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      const lastShown = localStorage.getItem('cookieBannerLastShown');
      const currentTime = new Date().getTime();

      if (
        !cookieConsent ||
        (cookieConsent === 'refused' && lastShown && currentTime - parseInt(lastShown) > 24 * 60 * 60 * 1000)
      ) {
        setShowBanner(true);
        localStorage.setItem('cookieBannerLastShown', currentTime.toString());
      }
    };

    checkCookieConsent();
    // Vérifier toutes les heures si la bannière doit être réaffichée
    const interval = setInterval(checkCookieConsent, 60 * 60 * 1000);

    return () => clearInterval(interval);
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
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-[#f37335] via-[#f15e4b] to-[#90e7d3] text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0 sm:mr-4 text-center sm:text-left">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          <br /><strong> Acceptez-vous l'utilisation de cookies ? 🍪</strong>
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-white text-[#485b51] rounded hover:bg-gray-600 hover:text-[white] transition duration-300 ease-in-out"
          >
            Accepter
          </button>
          <button
            onClick={handleRefuse}
            className="px-4 py-2 bg-transparent border border-white rounded hover:bg-[#485b51] hover:text-[black] transition duration-300 ease-in-out"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
