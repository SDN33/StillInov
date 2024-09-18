import Image from 'next/image';
import TestimonialImage01 from '@/public/images/testimonial-01.png';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Importation des styles de Swiper

export default function Testimonials() {
  const url = "https://g.co/kgs/RPvEuDM";

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-[-2rem]">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Parce qu'un avis<br /> vaut mieux qu'un<br /> long discours !
            </h2>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              navigation
              loop
              className="swiper-container"
            >
              {/* 1st testimonial */}
              <SwiperSlide>
                <div className="flex flex-col h-full p-6 bg-gray-800">
                  <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    — StillInov a créé un site e-commerce pour ma marque de vêtements, avec un design au goût du jour et une partie admin pour un suivi complet de mon activité. Je ne pouvais pas espérer mieux !
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">J.F Kitsadi</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">SevenMates</a>
                  </div>
                </div>
              </SwiperSlide>

              {/* 2nd testimonial */}
              <SwiperSlide>
                <div className="flex flex-col h-full p-6 bg-gray-800">
                  <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#485b51" }}>
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    — J'ai fait appel aux services artistiques de StillInov pour la création de mon podcast audio 'Super Humains', et ce projet a été un véritable succès. Ils ont su transformer toutes mes idées en réalité.
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Diandra Tchatchouang</cite> - <a className="text-[#485b51] hover:text-gray-200 transition duration-150 ease-in-out" href="https://open.spotify.com/show/0N3bfIgmeKqztwSshyA4Gz">Podcast "Super Humains"</a>
                  </div>
                </div>
              </SwiperSlide>

              {/* 3rd testimonial */}
              <SwiperSlide>
                <div className="flex flex-col h-full p-6 bg-gray-800">
                  <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#f15e4b" }}>
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">
                    — J'ai fait appel à l'agence pour concevoir l'intégralité de mon identité visuelle, du logo aux flyers. Aujourd'hui, après plus de cinq ans d'existence, mon bar est devenu une adresse incontournable à Bègles. Je recommande vivement leurs services !
                  </blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Cédric Césarini</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.facebook.com/bewinebegles">Be Wine Bègles</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Google Reviews Button */}
            <div className="absolute inset-x-0 bottom-[-2rem] flex justify-center">
              <a
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white hover:bg-gray-700 transition duration-150 ease-in-out text-sm font-medium rounded-md"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir tous les avis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

 