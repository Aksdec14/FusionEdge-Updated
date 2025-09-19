import React, { useEffect, useState } from "react";
import gsap from "gsap";
import video from '../assets/Videos/Smart Wealth Management Solutions-VEED.mp4';
import { HiMenu, HiX } from "react-icons/hi";
import icon from '../assets/Icon/Favicon.png'

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Reset animations on every reload
    gsap.set(".hero-heading", { y: 50, opacity: 0 });
    gsap.set(".hero-text", { y: 30, opacity: 0 });

    // Animate heading and paragraph
    gsap.to(".hero-heading", { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
    gsap.to(".hero-text", { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')] bg-center bg-cover bg-no-repeat"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Navbar */}
      <header className="relative z-20 w-[90%] sm:w-[85%] md:w-[80%] mx-auto rounded-xl border-b border-white/20 px-4 py-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-2xl sm:text-3xl md:text-3xl font-bold text-white tracking-wide">
          <img src={icon} alt="FusionEdge Logo" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
          Fusion<span className="text-blue-400">Edge</span>
        </h2>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-white text-base font-medium">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 text-white flex flex-col items-center justify-center space-y-8 z-50">
          <a href="#home" className="text-xl hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="text-xl hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="text-xl hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" className="text-xl hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col-reverse md:flex-row items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6 md:px-16 gap-8 md:gap-12 py-8 md:py-0">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <h1 className="hero-heading text-white font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl leading-snug sm:leading-tight md:leading-tight mb-4 sm:mb-6">
            Smart Asset Management <br /> for a Secure Future
          </h1>
          <p className="hero-text text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-2xl mx-auto md:mx-0 mb-6 sm:mb-8">
            We help individuals and businesses grow their wealth with expert investment strategies, personalized planning, and sustainable portfolio management.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href="#services"
              className="hero-btn px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition text-sm sm:text-base"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="hero-btn px-4 sm:px-6 py-2 sm:py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition text-sm sm:text-base"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Video Section - Tablet Style */}
        <div className="hero-video flex-1 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl order-1 md:order-2">
          <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-300/30">
            {/* Optional Top Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full z-20"></div>

            {/* Video */}
            <video
              className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] object-cover rounded-2xl relative z-10"
              src={video}
              autoPlay
              muted
              loop
              controls
            ></video>

            {/* Subtle screen reflection */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-t from-white/20 via-transparent to-white/10 mix-blend-overlay z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
