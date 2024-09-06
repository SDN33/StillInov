// components/RdvIcon.tsx
"use client";

import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Bootstrap phone icon

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative cursor-pointer hidden md:block fixed bottom-8 right-8 z-50" // Hidden on mobile, visible on tablet and desktop
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Phone Icon */}
      <FaPhoneAlt
        className="text-white text-4xl bg-[#f37335] p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Contact us"
      />
      {/* Tooltip */}
      {isHovered && (
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm rounded-md px-3 py-2 shadow-lg whitespace-nowrap">
          Bénéficiez d'un appel de présentation de 15 min gratuit
        </div>
      )}
    </div>
  );
};

export default RdvIcon;
