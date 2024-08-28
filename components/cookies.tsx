import React, { useState, useEffect, FC } from 'react';

const CookieConsentBanner: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const REAPPEAR_DELAY = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');

    if (consent === 'declined') {
      const declineTimestamp = localStorage.getItem('declineTimestamp');
      if (declineTimestamp) {
        const declineTime = parseInt(declineTimestamp, 10);
        const timeElapsed = Date.now() - declineTime;

        if (timeElapsed > REAPPEAR_DELAY) {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
    } else if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.setItem('declineTimestamp', Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <p className="text-sm">
        Nous utilisons des cookies pour améliorer votre expérience sur notre site.
      </p>
      <div>
        <button
          onClick={acceptCookies}
          className="ml-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
        >
          Accepter
        </button>
        <button
          onClick={declineCookies}
          className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
        >
          Refuser
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
