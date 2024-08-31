'use client';
import React, { useState, useEffect } from 'react';
import VideoThumb from '@/public/images/hero-image-01.jpg';
import ModalVideo from '@/components/modal-video';

const InnovativeSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2L4 10L20 18L36 10L20 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 20L20 28L36 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 30L20 38L36 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AmbitiousSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2L24.5 15.5H38L27 24L31.5 38L20 30L8.5 38L13 24L2 15.5H15.5L20 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CreativeSVG = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 10C30 15.5228 25.5228 20 20 20C14.4772 20 10 15.5228 10 10C10 4.47715 14.4772 0 20 0C25.5228 0 30 4.47715 30 10Z" stroke="white" strokeWidth="2"/>
    <path d="M20 25V40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M13 30L27 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M27 30L13 35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AnimatedWord = ({ word, SVGComponent }: { word: string, SVGComponent: React.FC }) => {
  return (
    <div className="animated-word">
      <SVGComponent />
      <span>{word}</span>
      <SVGComponent />
    </div>
  );
};

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    { text: 'Innovante', component: InnovativeSVG },
    { text: 'Ambicieuse', component: AmbitiousSVG },
    { text: 'Créative', component: CreativeSVG },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4 flex flex-col items-center" data-aos="fade-up">
              <span className="block w-full text-center main-title">Agence Digitale</span>
              <div className="animated-text-container">
                <AnimatedWord
                  word={words[currentWordIndex].text}
                  SVGComponent={words[currentWordIndex].component}
                />
              </div>
            </h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">
              Donnez vie à vos ambitions digitales et transformez vos idées en réalité.
            </p>
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
          height: 60px;
          overflow: hidden;
        }

        .animated-word {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInOut 3s infinite;
        }

        .animated-word span {
          font-size: 2.5rem;
          padding: 0 0.5em;
          font-family: 'Permanent Marker', cursive;
        }

        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(20px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
