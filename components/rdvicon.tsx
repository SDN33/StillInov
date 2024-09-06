"use client";
import React, { useState } from 'react';

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const iconStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    backgroundColor: '#f15e4b',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '80px',
    right: '10px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
    visibility: isHovered ? 'visible' : 'hidden',
  };

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="https://calendly.com/stillinovagency/30min"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <path d="M22 16.92V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4.08a1 1 0 0 1 .28-.7L9.88 7.42a1 1 0 0 1 1.24-.22L16.26 9.9a1 1 0 0 1 .45 1.35l-3.2 8.08a1 1 0 0 1-1.35.45L8.52 14.76a1 1 0 0 1-.22-1.24l4.8-4.8a1 1 0 0 1 1.24-.22l7.48 7.48a1 1 0 0 1 .28.7z"></path>
        </svg>
      </a>
      <div style={tooltipStyle}>
        Bénéficiez d'un appel de présentation de 15 min gratuit
      </div>
    </div>
  );
};

export default RdvIcon;
