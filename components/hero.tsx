'use client';
import React from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
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
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Donnez vie à vos ambitions digitales et transformez vos idées en réalité.</p>
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
          <br />

          {/* Section des mots-clés */}
          <div className="flex items-center justify-center mt-4 overflow-x-auto">
            <div className="overflow-x-auto whitespace-nowrap flex items-center animate-scroll">
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

        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
