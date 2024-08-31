'use client';
import React from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

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
              <div className="relative">
                <div className="roulette-border">
                  <span className="animated-text-container">
                    <span className="animated-text text-center">
                      <span className="font-innovative">Innovante</span>
                      <span className="font-ambitious">Ambicieuse</span>
                      <span className="font-creative">Créative</span>
                      <span className="font-innovative">Innovante</span>
                      <span className="font-ambitious">Ambicieuse</span>
                      <span className="font-creative">Créative</span>
                    </span>
                  </span>
                </div>
              </div>
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Donnez vie à vos ambitions digitales et transformez vos idées en réalité.<br />
              Nous sommes là pour vous accompagner dans votre succès.
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white w-full mb-4 sm:w-auto sm:mb-0"
                  href="/contact"
                  style={{ backgroundColor: '#f15e4b' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#d14c3d'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f15e4b'}
                >
                  Contactez-nous
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#features">Voir plus</a>
              </div>
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

        .roulette-border {
          position: relative;
          display: inline-block;
          padding: 0.5rem;
          border-radius: 9999px;
          border: 2px solid transparent;
          background: linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1)), linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%);
          background-size: 4px 4px;
          background-position: 0 0, 2px 2px;
          border: 2px solid #f15e4b; /* Adjust border color for roulette effect */
        }

        .roulette-border:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 9999px;
          border: 2px solid #f15e4b;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          animation: roulette-spin 3s linear infinite;
        }

        @keyframes roulette-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animated-text-container {
          overflow: hidden;
          display: inline-block;
          position: relative;
          height: 3rem; /* Adjust based on the font size */
        }

        .animated-text {
          display: inline-block;
          white-space: nowrap;
          animation: text-rotation 10s linear infinite;
        }

        .animated-text span {
          display: block;
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

        @keyframes text-rotation {
          0% { transform: translateY(0); }
          33% { transform: translateY(-100%); }
          66% { transform: translateY(-200%); }
          100% { transform: translateY(-300%); }
        }
      `}</style>
    </section>
  );
}
