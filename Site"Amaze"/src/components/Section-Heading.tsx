//Reusable heading component
import React, { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap'; // Assuming you have gsap setup in lib

interface SectionHeadingProps {
  title: string | React.ReactNode;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = '',
  titleClassName = 'text-display-xl md:text-display-2xl text-center',
  subtitleClassName = 'text-xl md:text-2xl text-text-secondary text-center mt-4 max-w-3xl mx-auto',
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%', // Start animation when 85% of the element is in view
            toggleActions: 'play none none none',
          },
        }
      );
    }
    if (subtitleRef.current && subtitle) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2, // Slight delay after title
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, [subtitle]);

  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {typeof title === 'string' ? (
        <h2 ref={titleRef} className={`${titleClassName} gsap-reveal`}>
          {title}
        </h2>
      ) : (
        <div ref={titleRef} className={`${titleClassName} gsap-reveal`}>
          {title}
        </div>
      )}
      {subtitle && (
        <p ref={subtitleRef} className={`${subtitleClassName} gsap-reveal`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
