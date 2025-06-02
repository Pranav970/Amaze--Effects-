'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import SectionHeading from './SectionHeading';
import Image from 'next/image';

const HighlightsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // States for camera control demo, simplified
  const [cameraIcon, setCameraIcon] = useState<'aperture' | 'focus' | 'shutter'>('aperture');

  useEffect(() => {
    if (!sectionRef.current || !videoRef.current || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Simplified video scrub effect - more complex logic for real interaction
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom', // Pin for the duration of the section
      pin: videoRef.current, // Pin the video container
      scrub: 1, // Smooth scrubbing
      onUpdate: (self) => {
        if (videoRef.current) {
          // Example: simulate progress or change icons based on scroll
          const progress = self.progress;
          if (progress < 0.33) setCameraIcon('aperture');
          else if (progress < 0.66) setCameraIcon('focus');
          else setCameraIcon('shutter');
          // For actual video scrubbing:
          // videoRef.current.currentTime = videoRef.current.duration * progress;
        }
      },
    });

  }, []);

  return (
    <section ref={sectionRef} className="section-padding min-h-screen bg-black relative">
      <div className="centered-container relative z-10">
        <SectionHeading
          title="Get the highlights."
          className="mb-10"
          titleClassName="text-display-lg md:text-display-xl text-white"
        />
        <div ref={contentRef} className="text-center">
          <a href="#" className="text-apple-blue hover:underline text-lg">
            Watch the film <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Video and Camera Control Demo - Simplified */}
      <div className="mt-16 relative h-[70vh] w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
        {/* Placeholder for the video itself - it would typically be playing */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/highlights-camera-control.mp4" // REPLACE with your video
          playsInline
          muted // Autoplay usually requires muted
          loop // For continuous background
          // preload="auto" // Consider "metadata" for faster load, "auto" for quicker play
          // autoPlay // if you want it to play on load (might be controlled by GSAP)
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Static text overlay - in reality, this would animate */}
        <div className="absolute top-10 left-10 text-white z-20 p-4 bg-black/30 rounded-lg">
          <h3 className="text-2xl font-semibold">So fast. So fluid.</h3>
          <p className="text-lg">Get a feel for the all-new Camera Control.</p>
        </div>

        {/* Camera UI Overlay - Simplified */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/70 backdrop-blur-sm z-20 flex justify-around items-center">
            <div className="text-white text-3xl opacity-50 cursor-pointer hover:opacity-100 transition-opacity">
              <span>+/-</span> {/* Placeholder for exposure icon */}
            </div>
            <div className={`text-white text-4xl cursor-pointer ${cameraIcon === 'aperture' ? 'text-yellow-400 scale-110' : 'opacity-70 hover:opacity-100'} transition-all`}>
              <em>f</em> {/* Placeholder for aperture icon */}
            </div>
            <div className={`text-yellow-400 text-4xl cursor-pointer ${cameraIcon === 'focus' ? 'scale-110' : 'opacity-70 hover:opacity-100'} transition-all`}>
              {/* Focus Icon (SVG or Font Icon) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5M3 16.5 7.5 21m0 0L12 16.5M7.5 21V7.5" />
              </svg>
            </div>
            <div className={`text-white text-3xl cursor-pointer ${cameraIcon === 'shutter' ? 'text-yellow-400 scale-110' : 'opacity-70 hover:opacity-100'} transition-all`}>
              {/* Shutter Icon (SVG or Font Icon) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </div>
             <div className="w-20 h-8 bg-gray-600 rounded-full flex items-center p-1">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
