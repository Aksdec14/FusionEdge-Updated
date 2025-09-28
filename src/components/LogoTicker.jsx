import React, { useEffect, useState, useRef } from "react";

const logos = [
  { src: "./facebook.svg", alt: "Facebook" },
  { src: "./disney.svg", alt: "Disney" },
  { src: "./airbnb.svg", alt: "Airbnb" },
  { src: "./apple.svg", alt: "Apple" },
  { src: "./spark.svg", alt: "Spark" },
  { src: "./samsung.svg", alt: "Samsung" },
  { src: "./quora.svg", alt: "Quora" },
  { src: "./sass.svg", alt: "Sass" },
];

const LogoStrip = () => {
  const [repeatedLogos, setRepeatedLogos] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateRepetitions = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const logoWidth = 100; // Approximate width of one logo including padding
      const repeatCount = Math.ceil((containerWidth * 2) / logoWidth);
      const repeated = [];
      for (let i = 0; i < repeatCount; i++) {
        repeated.push(...logos);
      }
      setRepeatedLogos(repeated);
    };

    updateRepetitions();
    window.addEventListener("resize", updateRepetitions);
    return () => window.removeEventListener("resize", updateRepetitions);
  }, []);

  return (
    <section className="bg-[#f5f4f8] py-6 overflow-hidden">
      <div ref={containerRef} className="relative w-full">
        <div className="flex animate-infinite-scroll hover:pause-animation">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 sm:px-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;