'use client';
import React from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

const RocketSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2L10 38H30L20 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="d" values="M20 2L10 38H30L20 2Z;M20 2L5 38H35L20 2Z;M20 2L10 38H30L20 2Z" dur="2s" repeatCount="indefinite" />
    </path>
    <circle cx="20" cy="15" r="3" fill="white">
      <animate attributeName="cy" values="15;12;15" dur="1s" repeatCount="indefinite" />
    </circle>
    <path d="M15 30L20 35L25 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="d" values="M15 30L20 35L25 30;M13 32L20 37L27 32;M15 30L20 35L25 30" dur="1s" repeatCount="indefinite" />
    </path>
  </svg>
);

const StarSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2L24.5 15.5H38L27 24L31.5 38L20 30L8.5 38L13 24L2 15.5H15.5L20 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="3s" repeatCount="indefinite" />
    </path>
    <circle cx="20" cy="20" r="2" fill="white">
      <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
    </circle>
    <path d="M20 10V30M10 20H30" stroke="white" strokeWidth="1">
      <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="10s" repeatCount="indefinite" />
    </path>
  </svg>
);

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          {/* SVG code remains the same */}
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 flex flex-col items-center" data-aos="fade-up">
              <span className="block w-full text-center main-title">Agence de Communication Digitale</span>
              <div className="animated-text-container">
                <RocketSVG />
                <StarSVG />
                <span className="animated-text text-center">
                  <span className="font-innovative">Innovante</span>
                  <span className="font-ambitious">Ambicieuse</span>
                  <span className="font-creative">Créative</span>
                </span>
                <StarSVG />
                <RocketSVG />
              </div>
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Donnez vie à vos ambitions digitales et transformez vos idées en réalité.<br />Nous sommes là pour vous accompagner dans votre succès.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-800 w-full mb-4 sm:w-auto sm:mb-0" href="/contact">Contactez-nous</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#features">Voir plus</a>
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
          margin: 0 0.5em;
        }

        .animated-text span {
          display: block;
          height: 100%;
          animation: spin 10s infinite;
          font-size: 2.5rem;
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
      `}</style>
    </section>
  );
}
