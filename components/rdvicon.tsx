'use client';
import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Support from '@/public/images/support.png';

const RdvIcon: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Function to toggle the popup
  const handleTogglePopup = () => setIsPopupOpen(prev => !prev);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Show/Hide Scroll to Top button based on scroll position
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set a timer to open the popup after 20 seconds
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 20000); // 20 seconds

    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Set an interval to trigger bounce animation every 5 seconds
    const bounceInterval = setInterval(() => {
      const icon = document.querySelector('.bounce-icon');
      if (icon) {
        icon.classList.add('animate-bounce');
        setTimeout(() => {
          icon.classList.remove('animate-bounce');
        }, 2000); // Duration of the bounce animation
      }
    }, 5000); // Every 5 seconds

    // Clean up the interval if the component is unmounted
    return () => clearInterval(bounceInterval);
  }, []);

  return (
    <div className="relative">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bounce-icon fixed bottom-20 right-4 md:bottom-24 md:right-6 p-3 rounded-full shadow-lg text-white bg-gradient-to-br from-teal-400 to-orange-400 flex items-center justify-center transition-transform duration-300 hover:scale-125 "
          aria-label="Scroll to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce-on-click"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      {/* Floating Icon Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleTogglePopup}
        className={`bounce-icon fixed bottom-4 right-4 md:bottom-6 md:right-6 p-3 rounded-full shadow-lg text-white bg-gradient-to-br from-orange-400 via-red-500 to-teal-400 flex items-center justify-center hover:scale-150 transition-transform duration-300 ${isPopupOpen ? 'z-30' : ''}`}
        aria-label="Contactez-nous"
      >
        <span className="text-4xl font-bold">Si</span>
      </button>

      {/* Tooltip */}
      {isHovered && !isPopupOpen && (
        <div className="absolute bottom-14 right-1/2 transform translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg whitespace-nowrap hidden md:block">
          Bénéficiez d'un appel de présentation de 15 min gratuit
        </div>
      )}

      {/* Popup */}
      {isPopupOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50 z-10"
            onClick={handleTogglePopup}
          />

          {/* Popup Content */}
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
              <button
                onClick={handleTogglePopup}
                className="absolute top-2 right-2 text-white text-xl"
                aria-label="Close"
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-2 text-center">Bénéficiez d'un appel gratuit !</h2>
              <br />
              <div className="relative mb-4 mx-auto align-middle">
                  <a>
                    <Image className="rounded-full" src={Support} width={150} height={150} alt={`Photo de SAV`} />
                  </a>
                  <svg className={`absolute top-0 right-0 -mr-3 w-6 h-5 fill-current ${"text-[#f15e4b]"}`} viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
              </div>
              <br />
              <p className="mb-2 text-center">
                Pour nous chaque client bénéficie d'une attention particulière et d'un suivi personnalisé.
                <br />
              </p>
              <p className="mb-4 text-center text-[#f15e4b] text-sm">
              <em>Nous vous offrons un appel de présentation<br />de 15 minutes gratuit avec notre Digital Business Developer, pour discuter de vos besoins et vous expliquer comment nous pouvons vous aider à atteindre vos objectifs. 🚀</em>
              </p>
              <a
                href="https://calendly.com/stillinovagency/30min"
                className="btn text-center w-full mt-4 bg-gradient-to-br from-orange-400 via-red-500 to-teal-400 text-white py-2 px-4 rounded"
                onClick={handleTogglePopup}
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

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes ripple {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
          }
          100% {
            box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
          }
        }

        .animate-bounce-on-click {
          transition: transform 0.2s;
        }

        .animate-bounce-on-click:active {
          transform: scale(1.2);
          animation: ripple 0.4s;
        }
      `}</style>
    </div>
  );
};

export default RdvIcon;
