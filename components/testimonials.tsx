'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'; // Importer les modules nécessaires
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import TestimonialImage01 from '@/public/images/testimonial-01.png';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

export default function Testimonials() {
  const url = "https://g.co/kgs/RPvEuDM";

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-[-2rem]">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Parce qu'un avis<br /> vaut mieux qu'un<br /> long discours !</h2>
          </div>

          {/* Testimonials Swiper */}
          <Swiper
            spaceBetween={30}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 2500 }} // Défilement toutes les 2,5 secondes
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Activer les modules ici
            className="mySwiper -z-10" // Appliquer le z-index le plus bas
          >
            {/* 1st testimonial */}
            <SwiperSlide>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <cite className="text-gray-200 not-italic">J.F Kitsadi</cite><a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">SevenMates</a>
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — StillInov a créé un site e-commerce pour ma marque de vêtements, avec un design au goût du jour et une partie admin pour un suivi complet de mon activité. Je ne pouvais pas espérer mieux !
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-[#485b51] not-italic">Site e-commerce</cite>
                </div>
              </div>
            </SwiperSlide>

            {/* 2nd testimonial */}
            <SwiperSlide>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                  <cite className="text-gray-200 not-italic">Diandra Tchatchouang</cite><a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="https://open.spotify.com/show/0N3bfIgmeKqztwSshyA4Gz">Podcast "Super Humains"</a>
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — J'ai fait appel aux services artistiques de StillInov pour la création de mon podcast audio 'Super Humains'. Nous avons collaboré sur la création de l'identité visuelle et le résultat est tout simplement incroyable !
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="not-italic text-[#485b51]">Identité visuelle</cite>
                </div>
              </div>
            </SwiperSlide>

            {/* 3rd testimonial */}
            <SwiperSlide>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                  <cite className="text-gray-200 not-italic">Cédric Césarini</cite><a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.facebook.com/bewinebegles">Be Wine Bègles</a>
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — J'ai fait appel à l'agence pour concevoir l'intégralité de mon identité visuelle. Le résultat est à la hauteur de mes attentes, je recommande !
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-[#485b51] not-italic">Identité visuelle</cite>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <br />

          {/* Google Reviews Button */}
          <div className="text-center mx-auto align-items-center mt-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M23.49 12.27c1.32-.69 2.44-1.8 3.04-3.27-1.21-1.13-2.64-2.01-4.28-2.53-2.07-1.48-4.69-2.34-7.44-2.34-5.41 0-9.79 4.38-9.79 9.79 0 2.46.93 4.69 2.47 6.43-2.73-1.49-5.05-3.57-6.98-6.12-2.71 4.68-1.45 11.2 2.95 15.29-2.48-.09-4.83-.71-7-1.78.09 2.64 1.01 5.14 2.58 7.11 2.1-2.8 4.97-4.76 8.37-6.27-.69 1.57-1.18 3.21-1.44 4.9-.65.49-1.41.95-2.26 1.37 2.58-.56 4.93-1.52 7.1-2.71zM12 20.29c.06-1.01.25-2 1.05-2.72 1.25-1.01 3.07-.87 4.1.21.76-.67 1.57-1.38 2.39-2.11-.55-1.38-1.23-2.67-2.03-3.79-1.17-1.61-2.77-2.85-4.56-3.59-2.26-.99-4.87-1.29-7.27-.98-1.67.19-3.22.71-4.59 1.36-.6-.72-1.26-1.41-2-2.03 1.23-2.62 3.54-4.51 6.24-5.9 2.73-1.38 5.73-1.73 8.63-.9 2.77.67 5.31 2.31 7.19 4.56-.09-.24-.18-.47-.29-.71-2.45-4.66-7.13-8.49-12.64-10.29-.77-.32-1.64-.57-2.46-.68-.63-.07-1.25.03-1.85.2-3.44.49-6.92 2.15-9.16 4.66-.78.79-1.46 1.66-1.89 2.64-.42-.6-.83-1.23-1.29-1.84 3.44-5.42 9.53-8.7 15.48-9.4 1.42-.16 2.81.1 4.09.74 3.66 1.27 7.01 3.37 9.7 6.27.69.68 1.34 1.43 1.89 2.19 2.61 3.73 2.15 8.93-.56 12.02-1.43 1.38-3.29 2.34-5.37 2.55-2.39.24-4.86.18-7.31-.31-3.33-.63-6.59-2.22-9.36-4.49-.73-.6-1.4-1.27-2.09-1.95z"></path>
              </svg>
              <span>Consulter les avis Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
