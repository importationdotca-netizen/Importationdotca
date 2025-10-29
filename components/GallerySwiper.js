'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function GallerySwiper({ title, images, swiperId }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="w-full section-padding bg-slate-900 overflow-hidden">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          {title}
        </h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation={{
            prevEl: `.swiper-button-prev-${swiperId}`,
            nextEl: `.swiper-button-next-${swiperId}`,
          }}
          pagination={{
            clickable: true,
            el: `.swiper-pagination-${swiperId}`,
          }}
          speed={600}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt || `${title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button 
            className={`swiper-button-prev-${swiperId} swiper-button-prev-custom text-white bg-slate-800 p-3 hover:bg-accent-500 transition-colors`}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className={`swiper-pagination-${swiperId}`}></div>
          
          <button 
            className={`swiper-button-next-${swiperId} swiper-button-next-custom text-white bg-slate-800 p-3 hover:bg-accent-500 transition-colors`}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #e3b341 !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #d4a02b !important;
        }
      `}</style>
    </section>
  );
}
