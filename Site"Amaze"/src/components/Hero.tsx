'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pricingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0.5)
        .fromTo(pricingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, "-=0.7");
    }
  }, []);

  return (
    <section ref={heroRef} className="h-screen flex flex-col justify-center items-center text-center pt-12 section-padding bg-apple-gray">
      <div className="centered-container">
        <h1 ref={titleRef} className="text-display-lg md:text-display-xl lg:text-display-2xl font-semibold text-white mb-4">
          iPhone 16 Pro
        </h1>
        <p ref={pricingRef} className="text-lg md:text-xl text-text-secondary">
          From ₹119900.00* or ₹9825.00/mo. for 12 mo.<sup>‡</sup>
        </p>
        {/* You might want a video background here eventually */}
      </div>
    </section>
  );
};

export default Hero;
