'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

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

        <div className="relative">
          <Swiper
            modules={[Navigation, Scrollbar]}
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
            scrollbar={{
              hide: false,
              draggable: true,
              el: `.swiper-scrollbar-${swiperId}`,
            }}
            speed={600}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt || `${title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`swiper-button-prev-${swiperId} swiper-nav-button swiper-nav-button-left`}
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className={`swiper-button-next-${swiperId} swiper-nav-button swiper-nav-button-right`}
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className={`swiper-scrollbar-${swiperId} swiper-scrollbar-custom mt-8`}></div>
      </div>

      <style jsx global>{`
        .swiper-nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.9);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.35);
          transition: background 0.2s ease, transform 0.2s ease;
          z-index: 10;
        }
        .swiper-nav-button:hover {
          background: #c6a76f;
          transform: translateY(-50%) scale(1.05);
        }
        .swiper-nav-button:focus {
          outline: 2px solid #c6a76f;
          outline-offset: 2px;
        }
        .swiper-nav-button-left {
          left: 0.5rem;
        }
        .swiper-nav-button-right {
          right: 0.5rem;
        }
        @media (max-width: 768px) {
          .swiper-nav-button {
            width: 38px;
            height: 38px;
          }
          .swiper-nav-button-left {
            left: 0.25rem;
          }
          .swiper-nav-button-right {
            right: 0.25rem;
          }
        }

        .swiper-scrollbar-custom {
          position: relative;
          height: 8px;
          background: rgba(148, 163, 184, 0.25);
          border-radius: 9999px;
          overflow: hidden;
        }
        .swiper-scrollbar-custom .swiper-scrollbar-drag {
          background: linear-gradient(90deg, #c6a76f 0%, #d8b878 100%);
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(198, 167, 111, 0.45);
          cursor: grab;
        }
        .swiper-scrollbar-custom .swiper-scrollbar-drag:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  );
}
