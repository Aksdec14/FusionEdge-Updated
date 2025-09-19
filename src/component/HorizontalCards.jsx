import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from '../assets/Images/people-office-analyzing-checking-finance-graphs.jpg'
import img2 from '../assets/Images/14351.jpg'
import img3 from '../assets/Images/Na_Nov_19.jpg'

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    title: "IT Asset Lifecycle Management- Best Practices for ITAM and ITIL",
    subtitle: "IT Asset Management Lifecycle – Best Practices for ITAM & ITIL in 2025",
    date: "September 2, 2025",
    img: img1,
    tags: ["#ITAM", "#ITIL", "#Lifecycle"],
  },
  {
    id: 2,
    title: "Fixed Asset Tagging System- Simplifying Asset Audits & Verification",
    subtitle: "Fixed Asset Tagging System: Simplifying Asset Audits & Verification",
    date: "September 1, 2025",
    img: img2,
    tags: ["#AssetTagging", "#Audit", "#Verification"],
  },
  {
    id: 3,
    title: "Tool Tracking Barcode System_ Operations Guide for Tools & Equipment",
    subtitle: "Tool Tracking Barcode System: Operations Guide for Tools & Equipment",
    date: "August 30, 2025",
    img: img3,
    tags: ["#ToolTracking", "#Barcode", "#Operations"],
  },
];

const HorizontalCards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 50 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
    });
  }, []);

  return (
    <div id="services" className="px-4 sm:px-8 md:px-16 py-12 bg-neutral-100">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Discover what we've been working on lately
      </h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        {cardData.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col"
          >
            <div className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src={card.img}
                alt={card.title}
              />
              <div className="px-6 py-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-700 text-base mb-2">{card.subtitle}</p>
                  <p className="text-gray-500 text-sm">{card.date}</p>
                </div>
                <div className="mt-4">
                  {card.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards; 