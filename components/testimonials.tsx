import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/googleReviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching Google reviews:', error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Parce qu'un avis<br /> vaut mieux qu'un<br />long discours !</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* Static Testimonials */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src="/images/testimonial-01.png" width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— StillInov a créé un site e-commerce pour ma marque de vêtements, avec un design au goût du jour et une partie admin pour un suivi complet de mon activité. Je ne pouvais pas espérer mieux !</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">J.F Kitsadi</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">SevenMates</a>
              </div>
            </div>

            {/* Map through reviews */}
            {reviews.map((review, index) => (
              <div key={index} className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105">
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={review.profile_photo_url} width={48} height={48} alt={review.author_name} />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">— {review.text}</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">{review.author_name}</cite> - {review.relative_time_description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="border-t border-gray-800 mb-16"></div>

            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Chez Still-Inov Agency</h2>
              <p className="text-lg text-gray-400">
                Nous croyons que chaque projet est unique, c'est pourquoi nous offrons des solutions personnalisées adaptées à vos besoins spécifiques.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Bloc Confiance */}
              <div className="group flex flex-col items-center max-w-sm transition-transform transform duration-200 hover:scale-110">
                <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">Confiance</h4>
                <p className="text-center text-gray-400">Nous bâtissons des relations durables avec nos clients, basées sur la transparence, l'intégrité et des résultats concrets.</p>
              </div>

              {/* Bloc Qualité */}
              <div className="group flex flex-col items-center max-w-sm transition-transform transform duration-200 hover:scale-110">
                <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 3v18h16V3H4zM4 3v18h16V3H4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">Qualité</h4>
                <p className="text-center text-gray-400">Nous nous engageons à offrir des services de la plus haute qualité pour répondre à vos attentes les plus élevées.</p>
              </div>

              {/* Bloc Engagement */}
              <div className="group flex flex-col items-center max-w-sm transition-transform transform duration-200 hover:scale-110">
                <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11v6a2 2 0 01-2 2H3a2 2 0 01-2-2v-6a2 2 0 012-2h16a2 2 0 012 2zM5 11V7a2 2 0 014 0v4M15 11V7a2 2 0 014 0v4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">Engagement</h4>
                <p className="text-center text-gray-400">Nous nous engageons à être disponibles, réactifs et prêts à vous aider à chaque étape de votre projet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
