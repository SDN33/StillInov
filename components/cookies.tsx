import React, { useState, useEffect } from 'react';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p className="text-sm">
        Nous utilisons des cookies pour améliorer votre expérience sur notre site.
      </p>
      <button
        onClick={acceptCookies}
        className="ml-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
      >
        Accepter
      </button>
    </div>
  );
};

export default CookieConsentBanner;
