"use client";

import React, { useState } from 'react';

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6">
      <div className="relative">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={openPopup}
          className="p-3 rounded-full shadow-lg text-white bg-gradient-to-br from-orange-400 via-red-500 to-teal-400 flex items-center justify-center"
          aria-label="Contactez-nous"
        >
          <span className="text-4xl font-bold">S</span>
        </button>
        {isHovered && (
          <div className="absolute bottom-14 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg whitespace-nowrap hidden md:block">
            Bénéficiez d'un appel de présentation de 15 min gratuit
          </div>
        )}
      </div>

      {/* Overlay and Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <h2 className="text-lg font-semibold mb-4">Pourquoi un appel de présentation?</h2>
            <p className="mb-4">Un appel de présentation de 15 minutes est l'occasion de discuter en détail de vos besoins et de comment notre service peut y répondre. C'est gratuit et sans engagement.</p>
            <button
              onClick={() => alert('Redirection vers la planification de rendez-vous')}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Planifier un appel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RdvIcon;
