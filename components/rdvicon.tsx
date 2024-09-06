"use client";

import React, { useState } from 'react';

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <div className="relative">
      {/* Floating Icon Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenPopup}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 p-3 rounded-full shadow-lg text-white bg-gradient-to-br from-orange-400 via-red-500 to-teal-400 flex items-center justify-center hover:scale-150 transition-transform duration-300"
        aria-label="Contactez-nous"
      >
        <span className="text-4xl font-bold">Si</span>
      </button>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-14 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg whitespace-nowrap hidden md:block">
          Bénéficiez d'un appel de présentation de 15 min gratuit
        </div>
      )}

      {/* Popup */}
      {isPopupOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-1"
            onClick={handleClosePopup}
          />

          {/* Popup Content */}
          <div className="fixed inset-0 flex items-center justify-center z-60">
            <div className="bg-gray-600 text-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
              <button
                onClick={handleClosePopup}
                className="absolute top-2 right-2 text-white text-xl"
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4 text-center">Pourquoi plannifier un appel ?</h2>
              <p className="mb-4 text-center">
                Pour nous chaque client benificie d'une attention particulière et d'un suivi personnalisé.
                <br />Nous vous offrons un appel de présentation de 15 minutes gratuit pour discuter de vos besoins et vous expliquer comment nous pouvons vous aider à atteindre vos objectifs. 🚀
              </p>
              <a
                href="https://calendly.com/stillinovagency/30min"
                className="btn text-center w-full mt-4 bg-gradient-to-br from-orange-400 via-red-500 to-teal-400 text-white py-2 px-4 rounded"
                onClick={handleClosePopup}
              >
                Planifiez un appel téléphonique
              </a>
              <a
                className="text-sm text-gray-400 text-center mx-auto flex justify-center mt-2"
                href="https://calendly.com"
              >
                 <em>powered by Calendly</em>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RdvIcon;
