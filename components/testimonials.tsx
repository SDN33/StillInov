"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialImage01 from '@/public/images/testimonial-01.png';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

// Définir le type pour les avis Google
interface Review {
  profile_photo_url: string;
  author_name: string;
  text: string;
  relative_time_description: string;
}

// Suite des sections des témoignages

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);

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
            <h2 className="h2 mb-4">Parce qu'un avis<br /> vaut mieux qu'un<br /> long discours !</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
            {/* 1st testimonial */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
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

            {/* 2nd testimonial */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#485b51" }}>
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— J'ai fait appel aux services artistiques de StillInov pour la création de mon podcast audio 'Super Humains', et ce projet a été un véritable succès. Ils ont su transformer toutes mes idées en réalité.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Diandra Tchatchouang</cite> - <a className="text-[#485b51] hover:text-gray-200 transition duration-150 ease-in-out" href="https://open.spotify.com/show/0N3bfIgmeKqztwSshyA4Gz">Podcast "Super Humains"</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="group flex flex-col h-full p-6 bg-gray-800 transition-transform transform duration-200 hover:scale-105" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— J'ai fait appel à l'agence pour concevoir l'intégralité de mon identité visuelle, du logo aux flyers. Aujourd'hui, après plus de cinq ans d'existence, mon bar est devenu une adresse incontournable à Bègles. Je recommande vivement leurs services !</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Cédric Césarini</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">L'Apollo</a>
              </div>
            </div>
          </div>

          {/* Google Reviews Section */}
          <div className="mt-12 md:mt-20">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Avis Google</h3>
            <div className="space-y-8">
              {reviews.length > 0 ? (
                reviews.map((review, index) => (
                  <div key={index} className="p-6 bg-gray-800 border border-gray-700 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Image className="rounded-full" src={review.profile_image_url} width={48} height={48} alt={`Review from ${review.author_name}`} />
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-200">{review.author_name}</h4>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.62 1.1 5.17 2.89 7.06L12 22l7.11-2.94C20.9 17.17 22 14.62 22 12c0-5.52-4.48-10-10-10zm0 16.28c-.58 0-1.14-.2-1.57-.56l-5.13-3.55c-.55-.39-.82-1.08-.59-1.73.2-.62.75-1.07 1.39-1.12.1-.01.2-.01.31-.01.33 0 .66.1.94.28l2.78 1.93V8.9c0-.55.45-1 1-1s1 .45 1 1v4.53l2.78-1.93c.29-.19.61-.28.94-.28.11 0 .21 0 .31.01.64.05 1.2.5 1.39 1.12.23.65-.04 1.34-.59 1.73l-5.13 3.55c-.43.36-.99.56-1.57.56z" />
                          </svg>
                          {/* Add more stars if needed */}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400">{review.text}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">Aucun avis Google disponible pour le moment.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
