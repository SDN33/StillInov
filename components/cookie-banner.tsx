import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm mr-4">
          Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          Acceptez-vous l'utilisation de cookies ?
        </p>
        <div>
          <Button onClick={handleAccept} className="mr-2">
            Accepter
          </Button>
          <Button onClick={handleRefuse} variant="outline">
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
