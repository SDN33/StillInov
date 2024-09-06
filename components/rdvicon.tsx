"use client";
// components/RdvIcon.tsx
import React, { useState } from 'react';

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Phone Icon */}
        <svg
          className="w-12 h-12 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V3zM16 3a1 1 0 011-1h4a1 1 0 011 1v1a1 1 0 01-1 1h-4a1 1 0 01-1-1V3zM5 7h14a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1z"
          />
        </svg>

        {/* Tooltip */}
        {isHovered && (
          <div className="absolute -top-12 right-0 bg-gray-800 text-white text-sm rounded p-2 shadow-lg">
            Bénéficiez d'un appel de présentation de 15 min gratuit
          </div>
        )}
      </div>
    </div>
  );
};

export default RdvIcon;
