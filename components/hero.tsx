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
            <h1 className="h1 mb-4" data-aos="fade-up">
              Agence Digitale <br />et
              <span className="animated-text">
                <span>Innovante 🚀</span>
                <span>Ambicieuse 💪</span>
                <span>Technologique 🧪</span>
                <span>Fun 😎</span>
                <span>Créative 🎨</span>
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Donnez vie à vos ambitions digitales et transformez vos idées en réalité.</p>
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
            videoHeight={1080} />
        </div>
      </div>

      <style jsx>{`
        .animated-text {
          display: inline-block;
          vertical-align: top;
          overflow: hidden;
          height: 1.2em;
        }

        .animated-text span {
          display: block;
          height: 100%;
          animation: spin 8s infinite;
        }

        @keyframes spin {
          0%, 25% {
            transform: translateY(0);
          }
          30%, 50% {
            transform: translateY(-100%);
          }
          55%, 75% {
            transform: translateY(-200%);
          }
          80%, 100% {
            transform: translateY(-300%);
          }
        }
      `}</style>
    </section>
  );
}
