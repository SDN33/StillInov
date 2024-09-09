'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(0);
  const scrollSpeedRef = useRef<number>(1);

  const scrollAmount = 0.5; // Ajustez cette valeur pour modifier la vitesse de base
  const maxScrollSpeed = 1.5; // Vitesse maximale de défilement
  const accelerationFactor = 1.02; // Facteur d'accélération
  const decelerationFactor = 0.98; // Facteur de décélération

  const startScrolling = useCallback(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const currentTime = performance.now();
      const timeDiff = currentTime - lastScrollTimeRef.current;

      // Ajuster la vitesse de défilement en fonction du temps écoulé
      if (timeDiff > 16.67) { // 60 FPS
        scrollSpeedRef.current *= decelerationFactor;
      } else {
        scrollSpeedRef.current = Math.min(scrollSpeedRef.current * accelerationFactor, maxScrollSpeed);
      }

      scrollContainer.scrollLeft += scrollAmount * scrollSpeedRef.current;

      // Vérifier si la fin du défilement est atteinte
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0; // Réinitialiser au début
      }

      lastScrollTimeRef.current = currentTime;

      if (isScrolling) {
        requestAnimationFrame(startScrolling);
      }
    }
  }, [isScrolling]);

  const handleUserScroll = useCallback(() => {
    setIsScrolling(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(true);
      scrollSpeedRef.current = 1; // Réinitialiser la vitesse
      startScrolling(); // Reprendre le défilement après détection d'inactivité
    }, 3000);
  }, [startScrolling]);

  useEffect(() => {
    if (isScrolling) {
      requestAnimationFrame(startScrolling);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isScrolling, startScrolling]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleUserScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleUserScroll);
      }
    };
  }, [handleUserScroll]);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 flex flex-col items-center" data-aos="fade-up">
              <span className="block w-full text-center main-title">Agence de Marketing Digitale</span>
              <div className="animated-text-container">
                <span className="animated-text text-center">
                  <span className="font-innovative">Innovante</span>
                  <span className="font-ambitious">Ambitieuse</span>
                  <span className="font-creative">Créative</span>
                </span>
              </div>
            </h1>
            <br />
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Donnez vie à vos ambitions digitales et transformez vos idées en réalité.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white w-full mb-4 sm:w-auto sm:mb-0"
                  href="/contact"
                  style={{ backgroundColor: '#f15e4b' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1a202c'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f15e4b'}
                >
                  Contactez-nous
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-[#485b51] hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#features">Voir plus</a>
              </div>
            </div>
          </div>

          {/* Modal video */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />

          <br />
          {/* Keywords Section */}
          <div data-aos="fade-up" data-aos-delay="600" className="flex items-center justify-center mt-4" >
            {/* Left icon */}
            <div className="text-gray-400 mr-2 cursor-pointer text-lg mt-[-1rem]">&lt;</div>

            <div ref={scrollContainerRef} className="overflow-x-auto whitespace-nowrap flex items-center">
              {/* Keywords go here */}
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">SEO</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Publicité Digitale</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Audit</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Site Web</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Application Mobile</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Identitée visuelle</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Formation Canva</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Coaching Marketing digital</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Stratégie Marketing</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Community Management</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Référencement</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">E-commerce</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Marketing de contenu</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Emailing</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Réseaux sociaux</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Marketing Automation</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Google Analytics</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#485b51] rounded-full mb-4">Google Ads</span>
              <span className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-white bg-[#f15e4b] rounded-full mb-4">Facebook Ads</span>
            </div>

            {/* Right icon */}
            <div className="text-gray-400 ml-2 cursor-pointer text-xl mt-[-0.3rem]">&gt;</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bungee&family=Orbitron&family=Pacifico&family=Permanent+Marker&family=Roboto+Mono&display=swap');

        .h1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .main-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 3rem;
          letter-spacing: 2px;
        }

        .animated-text-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-text {
          display: inline-block;
          vertical-align: top;
          overflow: hidden;
          height: 1.5em;
          font-size: 3.5rem;
        }

        .animated-text span {
          display: block;
          height: 100%;
          animation: spin 10s infinite;
          font-size: 4rem;
          padding: 0.2em 0.5em;
        }

        .font-innovative {
          font-family: 'Orbitron', sans-serif;
        }
        .font-ambitious {
          font-family: 'Permanent Marker', cursive;
        }
        .font-creative {
          font-family: 'Permanent Marker', cursive;
        }

        @keyframes spin {
          0%, 33% {
            transform: translateY(0);
          }
          38%, 66% {
            transform: translateY(-100%);
          }
          71%, 100% {
            transform: translateY(-200%);
          }
        }

        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }

        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
