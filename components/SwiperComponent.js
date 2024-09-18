import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <div className="icon-wrapper p-4 rounded-full mb-4 bg-[#485b51] group-hover:bg-[#f15e4b] transition-colors duration-200">
      {icon}
    </div>
    <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#f15e4b] transition-colors duration-200">{title}</h4>
    <p className="text-center text-gray-400">{description}</p>
  </div>
);

const SwiperComponent = ({ serviceData }) => {
  return (
    <Swiper
      modules={[EffectCoverflow, Pagination, Navigation]}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper -z-10" // Appliquer le z-index le plus bas
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index}>
          <ServiceCard {...service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
