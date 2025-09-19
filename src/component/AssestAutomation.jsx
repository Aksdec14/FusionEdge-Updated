import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../assets/Images/programming-background-with-html.jpg'
import img2 from '../assets/Images/56394.jpg'
import img3 from '../assets/Images/representation-user-experience-interface-design.jpg'

gsap.registerPlugin(ScrollTrigger);

const assetFeatures = [
  {
    id: 1,
    title: "Introduce Automation into Your Fixed Asset Management",
    description: `Seamlessly integrate technologies like Barcode, RFID, GPS, RTLS, BLE, and IoT to automate asset inventory & tracking with AssetCues. Manual errors will be a thing of past as you gain unparalleled accuracy in asset tracking and management. Ensure all teams use and update the same asset information through tag scan ensuring better collaboration and decision making.`,
    img: img1,
    link: "#",
  },
  {
    id: 2,
    title: "Asset Verification Software",
    description: `Track and update asset movements, assignments, and custodianship in real-time ensuring asset register reflects accuracy. Maintain complete and accurate asset records that are always ready for audit and decision making. Ensure your asset register is updated with real-time recording of asset life cycle transactions.`,
    img: img2,
    link: "#",
  },
  {
    id: 3,
    title: "Control Offsite/Mobile Assets Better",
    description: `Efficiently communicate with vendors and job-workers for management of off-site assets under their control. Ensure better control across locations, including those with employees, vendors, and customers. Create workflows for management of high-risk mobile and offsite assets.`,
    img: img3,
    link: "#",
  },
];

const AssetCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, { y: 50, opacity: 0 });
      gsap.to(card, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-neutral-100">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
          Revolutionize Your Asset Management
        </h1>

        {assetFeatures.map((feature, idx) => (
          <section key={feature.id} className="font-sans text-black mb-12">
            <div
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`lg:flex lg:items-center fancy-corners fancy-corners--large rounded-2xl shadow-lg overflow-hidden bg-gray-50 ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-shrink-0 sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60 h-[400px]">
                <div className="h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={feature.img}
                    alt={feature.title}
                  />
                </div>
              </div>

              {/* Text */}
              <div className="p-6 lg:p-10 flex-1 h-[400px] flex flex-col justify-between">
                <div className="leading-relaxed overflow-y-auto">
                  <h2 className="leading-tight text-3xl md:text-4xl font-bold">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-gray-700">{feature.description}</p>
                </div>
                <div className="mt-6">
                  <a
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    href={feature.link}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AssetCards;
