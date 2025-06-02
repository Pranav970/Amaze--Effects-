'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import SectionHeading from './SectionHeading';
// import VideoCarousel from './VideoCarousel'; // If you build a reusable component

const videoStages = [
  { id: 'zoom_out', text: '0.5x', videoTime: 0 }, // Example times
  { id: 'zoom_in', text: 'ZOOM', videoTime: 2 },
  { id: 'subject_focus', text: 'SUBJECT LOCKED', videoTime: 5 },
];

const CameraControlSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const [currentStageText, setCurrentStageText] = useState('');

  useEffect(() => {
    if (!sectionRef.current || !videoPlayerRef.current || !stickyContentRef.current) return;

    const video = videoPlayerRef.current;

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: `+=${videoStages.length * 500}`, // Adjust scroll length needed
      pin: stickyContentRef.current, // Pin the video and text container
      scrub: 1.5, // Smooth scrubbing
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1
        // Determine which stage we are in based on progress
        const stageIndex = Math.floor(progress * videoStages.length);
        const currentStage = videoStages[Math.min(stageIndex, videoStages.length - 1)];
        
        if (currentStage) {
          setCurrentStageText(currentStage.text);
          // Seek video (simplified, real seeking might be more complex)
          // video.currentTime = currentStage.videoTime; 
          // Or, if the video plays continuously, you'd just show text
        }
        
        // Example: Animate the text based on stage
        gsap.to(".camera-control-text", { opacity: 0, y: -10, duration: 0.3, onComplete: () => {
          gsap.to(".camera-control-text", { textContent: currentStage?.text || '', opacity: 1, y: 0, duration: 0.3});
        }});

        // Could also control video playback rate or effects here
      },
       onEnter: () => video.play().catch(e => console.log("Autoplay prevented", e)),
       onLeave: () => video.pause(),
       onEnterBack: () => video.play().catch(e => console.log("Autoplay prevented", e)),
       onLeaveBack: () => video.pause(),
    });

    // Initial text animation
    const initialText = sectionRef.current.querySelector('.initial-camera-text');
    if (initialText) {
        gsap.fromTo(initialText, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: initialText, start: 'top 80%'}}
        );
    }

  }, []);

  return (
    <section ref={sectionRef} className="section-padding min-h-[200vh] bg-black relative overflow-hidden"> {/* Increased height for scroll effect */}
      <div className="centered-container z-20 relative">
        <SectionHeading
          title={<span className="glow-text">Take total Camera Control.</span>}
          titleClassName="text-display-xl md:text-display-2xl text-white text-center initial-camera-text"
        />
        <div className="text-center mt-4">
            <button className="text-apple-blue hover:underline">Pause <span aria-hidden="true">⏯</span></button>
        </div>
      </div>

      <div ref={stickyContentRef} className="h-screen w-full absolute top-0 left-0 flex flex-col items-center justify-center">
        {/* Video Player for the Demo */}
        <div className="relative w-[80vw] max-w-3xl h-[45vw] max-h-[500px] rounded-3xl overflow-hidden border-2 border-gray-700 shadow-2xl">
          <video
            ref={videoPlayerRef}
            className="w-full h-full object-cover"
            src="/videos/camera-control-zoom-demo.mp4" // REPLACE
            playsInline
            muted // Mute for autoplay and scrub control
            loop // Loop if the demo sequence is short
            preload="auto"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Dynamic Text Overlay for Zoom Levels etc. */}
          <div className="camera-control-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 text-5xl md:text-7xl font-bold tracking-wider opacity-0"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
          >
            {/* Content will be set by GSAP/React state */}
          </div>
        </div>
        <button className="mt-8 bg-gray-700 text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors flex items-center">
          Go deeper on Camera Control
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
      
      {/* Content below the sticky video (appears after scrolling past the video interaction) */}
       <div className="relative mt-[100vh] z-10 section-padding"> {/* Pushes content below the pinned section */}
         <div className="centered-container grid md:grid-cols-2 gap-8 text-text-secondary">
            <div className="gsap-reveal">
                <h3 className="text-2xl font-semibold text-white mb-3">Precise Control</h3>
                <p>Now you can take the perfect photo or video in record time. Camera Control gives you an easier way to quickly access camera tools. Simply slide your finger to adjust camera functions like exposure or depth of field...</p>
            </div>
             <div className="gsap-reveal">
                <h3 className="text-2xl font-semibold text-white mb-3">Automatic Lock</h3>
                <p>Camera Control features a two-stage shutter that lets you automatically lock focus and exposure with a light press — so you can reframe your shot without losing focus on your subject.</p>
                <a href="#" className="text-apple-blue hover:underline mt-3 inline-block">How to use Camera Control <span aria-hidden="true">→</span></a>
            </div>
         </div>
         {/* ... more content like the image carousel */}
      </div>
    </section>
  );
};

export default CameraControlSection;
