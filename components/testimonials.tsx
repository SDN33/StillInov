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
import Googlelogo from '@/public/images/googlelogo.webp';

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
            pagination={false}
            navigation={false}
            autoplay={{ delay: 3500 }} // Défilement toutes les 2,5 secondes
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
                  — J'ai fait appel aux services artistiques de StillInov pour la création de mon podcast audio 'Super Humains'. Nous avons collaboré sur la création de l'identité visuelle et le résultat est tout simplement incroyable, nous avons été relayés par plusieurs médias comme CNEWS et bien d'autres, Grand merci à l'équipe Still-inov !
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="not-italic text-[#485b51]">Identité Visuelle</cite>
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
                  — J'ai fait appel à l'agence pour concevoir l'intégralité de mon identité visuelle, logo et flyers. Le résultat est à la hauteur de mes attentes, mon bar est désormais reconnaissable entre mille ! Merci à toute l'équipe.
                </blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-[#485b51] not-italic">Identité Visuelle</cite>
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
              <Image src={Googlelogo} width={20} height={20} alt="Google logo" />
              <span>  Consulter les avis Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
