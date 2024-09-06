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
    </div>
  );
};

export default RdvIcon;
