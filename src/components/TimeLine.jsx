/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/Images/ChatGPT Image Sep 26, 2025, 09_18_15 PM.png";
import img2 from "../assets/Images/ChatGPT Image Sep 26, 2025, 09_13_33 PM.png";
import img3 from "../assets/Images/ChatGPT Image Sep 26, 2025, 09_18_15 PM.png";

const tabs = [
  {
    id: 1,
    heading: "Leverage Tracking Technologies",
    desc: [
      "Seamlessly Integrate technologies like Barcode, RFID, GPS, RTLS, BLE, and IoT to automate asset inventory & tracking with AssetCues.",
      "Manual errors will be a thing of the past as you gain unparalleled accuracy in asset tracking and management.",
      "Ensure all teams use and update the same asset information through tag scans ensuring better collaboration and decision-making.",
    ],
    img: img1,
  },
  {
    id: 2,
    heading: "Ensure Accurate Asset Records",
    desc: [
      "Track and update asset movements, assignments, and custodianship in real-time ensuring asset register reflects accuracy.",
      "Maintain complete and accurate asset records that are always ready for audit and decision-making.",
      "Ensure your asset register is updated with real-time recording of asset life cycle transactions.",
    ],
    img: img2,
  },
  {
    id: 3,
    heading: "Control Offsite/Mobile Assets Better",
    desc: [
      "Efficiently communicate with vendors and job-workers for management of off-site assets under their control.",
      "Ensure better control over mobile assets across locations, including those with employees, vendors, and customers.",
      "Create workflows for management of high-risk mobile and offsite assets.",
    ],
    img: img3,
  },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const total = tabs.length;
  const step = 1 / total;

  const cardStyles = tabs.map((_, i) => {
    const start = i * step;
    const mid = start + step * 0.5;
    const end = (i + 1) * step;

    const opacity = useTransform(scrollYProgress, [start, mid, end], [0, 1, 0], { clamp: true });
    const scale = useTransform(scrollYProgress, [start, mid, end], [0.95, 1, 0.95], { clamp: true });
    const yImg = useTransform(scrollYProgress, [start, mid, end], ["20%", "0%", "-10%"], { clamp: true });

    return { opacity, scale, yImg };
  });

  return (
    <section ref={sectionRef} className="relative" style={{ height: `${tabs.length * 120}vh` }}>
      <div className="sticky top-0 h-screen flex items-center justify-center bg-gray-50">
        <motion.div className="container max-w-7xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col lg:flex-row gap-10 w-full h-auto lg:h-[80vh]">
          
          {/* Left Side Content */}
          <div className="lg:w-1/3 w-full flex flex-col justify-center text-center lg:text-left">
            <h1 className="mb-5 text-4xl font-bold leading-tight text-[#5D1F73] sm:text-[42px] lg:text-[40px] xl:text-5xl">
              End-to-End Asset Management Capabilities
            </h1>
            <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg">
              Discover how our platform helps you track, manage, and optimize your assets effectively across all locations, ensuring accuracy and efficiency.
            </p>
            <Link
              to="/exploreMore"
              className="inline-block px-5 sm:px-6 py-2 sm:py-3 text-white font-semibold rounded-full 
                bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] hover:from-[#1ABC9C] hover:to-[#5D1F73] 
                transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Explore More
            </Link>
          </div>

          {/* Right Side: Vertical Line + Cards */}
          <div className="lg:w-2/3 w-full relative flex flex-col lg:flex-row">
            {/* Vertical Progress Line (Hidden on Mobile) */}
            <div className="hidden lg:flex relative w-[20%] justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[60vh] w-1 bg-gray-200 rounded" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[60vh] w-1">
                {tabs.map((_, i) => {
                  const topPercent = (i / total) * 100;
                  const heightPercent = 100 / total;
                  return (
                    <div
                      key={i}
                      className="absolute left-0 w-full"
                      style={{
                        top: `${topPercent}%`,
                        height: `${heightPercent}%`,
                      }}
                    >
                      <motion.div
                        style={{ transformOrigin: "top", scaleY: cardStyles[i].opacity }}
                        className="w-full h-full bg-violet-600 origin-top"
                      />
                      <motion.div
                        style={{
                          scale: useTransform(cardStyles[i].opacity, t => 0.6 + 0.4 * t),
                        }}
                        className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#1ABC9C] border-4 border-white shadow"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cards with Fade + Scale */}
            <div className="lg:w-[80%] w-full pl-0 lg:pl-8 relative h-[300px]">
              {tabs.map((item, i) => (
                <motion.div
                  key={item.id}
                  style={{
                    opacity: cardStyles[i].opacity,
                    scale: cardStyles[i].scale,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                  className="bg-[#fafaf4] p-4 sm:p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-start gap-4 sm:gap-5"
                >
                  <motion.img
                    src={item.img}
                    alt={item.heading}
                    style={{ y: cardStyles[i].yImg }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-md object-cover mx-auto sm:mx-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-800">{item.heading}</h3>
                    <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 list-disc list-inside text-gray-600 text-sm sm:text-base">
                      {item.desc.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
