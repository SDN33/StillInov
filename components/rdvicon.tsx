"use client";

import React, { useState } from 'react';

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6">
      <div className="relative">
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="p-3 rounded-full shadow-lg text-white bg-gradient-to-br from-orange-400 via-red-500 to-teal-400"
          aria-label="Contactez-nous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15.46c-.07 0-.14-.02-.21-.06l-3.54-2.15c-.33-.2-.73-.19-1.04.01-.27.2-.44.48-.52.79-.09.34-.29.64-.56.87-.58.44-1.27.75-2.03.91-.37.08-.74-.05-1.02-.29l-3.49-2.3c-.31-.2-.46-.55-.4-.9.07-.36.29-.66.62-.87.58-.43 1.19-.89 1.79-1.38.17-.14.26-.34.26-.54s-.1-.39-.26-.54l-2.53-2.54c-.33-.33-.86-.33-1.19 0-.25.25-.25.66 0 .91l1.97 1.97c.16.16.4.24.64.2.24-.05.45-.2.6-.41.24-.27.35-.61.35-.97s-.11-.7-.35-.97l-3.53-3.54c-.48-.48-.63-1.18-.33-1.77.04-.09.1-.18.16-.26.4-.4 1.03-.5 1.54-.28.16.06.33.07.49.04s.3-.13.42-.26l1.85-1.85c.33-.33.86-.33 1.19 0 .31.31.31.82 0 1.14l-1.19 1.19c-.22.22-.33.53-.3.84.03.32.2.62.47.8.44.27.91.54 1.37.78.65.35 1.31.62 2.01.81.41.1.83.16 1.24.16 2.7 0 4.76-2.27 5.27-2.69.2-.2.44-.35.72-.44.33-.11.68-.09.98.06.26.14.47.38.6.66.1.22.12.48.07.72-.08.34-.32.62-.65.79-.55.31-1.15.5-1.76.55-.34.03-.66-.2-.74-.54-.05-.27-.21-.5-.42-.66-.3-.24-.69-.39-1.1-.39z"/>
          </svg>
        </button>
        {isHovered && (
          <div className="absolute bottom-14 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg whitespace-nowrap hidden md:block">
            Bénéficiez d'un appel de présentation de 15 min gratuit
          </div>
        )}
      </div>
    </div>
  );
};

export default RdvIcon;
