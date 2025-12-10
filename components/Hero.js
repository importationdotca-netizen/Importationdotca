'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays on iOS
    const video = videoRef.current;
    if (video) {
      // Set iOS-specific attributes
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('playsinline', 'true');
      
      // Wait for video to be ready, then play
      const handleCanPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // Auto-play was prevented
            console.log('Video autoplay prevented:', error);
          });
        }
      };

      // Try to play immediately
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay fails, wait for canplay event
          video.addEventListener('canplay', handleCanPlay, { once: true });
        });
      }

      // Cleanup
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/media/social-preview.webp"
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover' }}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Worldwide Import & Delivery Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4">
          Fast, reliable international shipping
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          We handle pickup, customs clearance, and delivery for businesses and individuals — shipping globally with end-to-end tracking and support.
        </p>
        <Link href="/contact">
          <button className="btn-primary text-lg px-8 py-4">
            Get a Quote — Ship Worldwide
          </button>
        </Link>
      </div>
    </section>
  );
}
