'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; // Importer les modules nécessaires
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
            grabCursor={true} // Permet de rendre le swipe plus interactif
            centeredSlides={true} // Centre les slides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]} // Activer les modules ici
            className="mySwiper"
          >
            {/* 1st testimonial */}
            <SwiperSlide>
              <div className="flex flex-col h-full p-6 bg-gray-800">
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
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
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — J'ai fait appel aux services artistiques de StillInov pour la création de mon podcast audio 'Super Humains'. Nous avons collaboré sur la création de l'identité visuelle et le résultat est tout simplement incroyable !
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
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — J'ai fait appel à l'agence pour concevoir l'intégralité de mon identité visuelle. Le résultat est à la hauteur de mes attentes, je recommande !

                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Cédric Césarini</cite> - <a className="text-[#f15e4b] hover:text-gray-200 transition duration-150 ease-in-out" href="https://www.facebook.com/bewinebegles">Be Wine Bègles</a>
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
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {/* SVG Google Icon */}
              </svg>
              <span>Consulter les avis Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
