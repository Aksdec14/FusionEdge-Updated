
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaUsers, FaBox, FaClock, FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { id: 1, title: "4.8/5", subtitle: "Capterra Logo", icon: <FaStar /> },
  { id: 2, title: "200+", subtitle: "Happy Customers", icon: <FaUsers /> },
  { id: 3, title: "4 Million+", subtitle: "Assets Tracked", icon: <FaBox /> },
  { id: 4, title: "15+", subtitle: "Years of Experience", icon: <FaClock /> },
  { id: 5, title: "18+", subtitle: "Countries, where Used", icon: <FaGlobe /> },
];

const HorizontalStatsTimeline = () => {
  const containerRef = useRef(null);
  const statRefs = useRef([]);
  const markersRef = useRef([]);
  const lineRef = useRef(null);
  const progressDotRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const totalWidth = lineRef.current.offsetWidth;

    // Animate horizontal line
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    // Animate markers
    markersRef.current.forEach((marker) => {
      gsap.fromTo(
        marker,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: marker,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    // Animate individual stats
    statRefs.current.forEach((stat, idx) => {
      gsap.set(stat, { opacity: 0, y: idx % 2 === 0 ? -20 : 20 });
      gsap.to(stat, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });
    });

    // Animate progress dot along the line
    gsap.fromTo(
      progressDotRef.current,
      { x: 0 },
      {
        x: totalWidth,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    // -------- Continuous Auto Scroll ----------
    let loopTween;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const duration = 20; // total duration of scroll in seconds

    const startAutoScroll = () => {
      loopTween = gsap.to(container, {
        scrollLeft: scrollWidth,
        duration: duration,
        ease: "none",
        onComplete: () => {
          gsap.set(container, { scrollLeft: 0 });
          startAutoScroll();
        },
      });
    };

    startAutoScroll();

    // Pause auto-scroll on user interaction
    const onUserScroll = () => {
      if (loopTween) loopTween.pause();
    };
    container.addEventListener("wheel", onUserScroll);
    container.addEventListener("touchstart", onUserScroll);

    return () => {
      if (loopTween) loopTween.kill();
      container.removeEventListener("wheel", onUserScroll);
      container.removeEventListener("touchstart", onUserScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-200 p-4 sm:p-8 md:p-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
        Our Achievements
      </h2>

      <div
        ref={containerRef}
        className="timeline-container relative w-full overflow-x-auto touch-pan-x snap-x snap-mandatory scrollbar-hide"
      >
        {/* Horizontal line */}
        <div
          ref={lineRef}
          className="absolute top-14 left-0 w-full h-1 bg-gray-300 origin-left scale-x-0"
        ></div>

        {/* Moving progress dot */}
        <div
          ref={progressDotRef}
          className="absolute -top-2 w-5 h-5 rounded-full bg-blue-600 z-20"
        ></div>

        {/* Stats */}
        <div className="flex items-center gap-6 sm:gap-12 md:gap-16 lg:gap-24 py-16 relative">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              ref={(el) => (statRefs.current[idx] = el)}
              className="flex-shrink-0 flex flex-col items-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] text-center relative snap-start"
            >
              {/* Marker */}
              <div
                ref={(el) => (markersRef.current[idx] = el)}
                className="absolute -top-2 w-4 h-4 rounded-full bg-blue-600"
              ></div>

              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 text-blue-600">
                {stat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-2xl font-bold">{stat.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-base mt-1">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalStatsTimeline;
