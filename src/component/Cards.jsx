import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/Images/map-lying-wooden-table.jpg'
import img2 from '../assets/Images/7039323.jpg'
import img3 from '../assets/Images/unrecognizable-business-people-sitting-meeting-with-charts-looking-pointing-tablet.jpg'

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    category: 'Wealth Planning',
    title: 'Maximize Your Investment Returns',
    shortDescription: 'Discover strategies to grow your wealth efficiently.',
    longDescription: 'Our expert team provides personalized portfolio planning and risk assessment to ensure long-term financial growth and stability.',
    img: img1,
  },
  {
    id: 2,
    category: 'Portfolio Management',
    title: 'Diversify for Stability',
    shortDescription: 'Learn how diversification can reduce investment risk.',
    longDescription: 'We create custom portfolios balancing equities, bonds, and alternative assets to meet your financial goals while minimizing risk exposure.',
    img: img2,
  },
  {
    id: 3,
    category: 'Financial Advisory',
    title: 'Plan Your Future Securely',
    shortDescription: 'Get insights and guidance from seasoned financial advisors.',
    longDescription: 'Our advisors help you create a sustainable financial plan, covering investments, retirement, and estate planning, tailored to your needs.',
    img: img3,
  },
];

const Cards = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardsRef = useRef([]);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      const image = card.querySelector('.card-image');
      const content = card.querySelector('.card-content');

      gsap.set([image, content], { opacity: 0, y: 50 });

      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      })
      .to(image, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .to(content, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    });
  }, []);

  return (
    <section className="w-full bg-neutral-200 py-16">
      {/* Inner container for centering content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <div className="flex flex-wrap items-center justify-between mb-8">
          <h2 className="text-4xl font-bold leading-none md:text-5xl text-slate-900">
            Expert Asset Management Solutions
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex flex-col"
            >
              <div className="flex flex-col justify-between bg-white border border-gray-300 rounded-lg mt-4 shadow-md h-[450px] overflow-hidden">
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="card-image object-cover w-full h-40"
                />

                <div className="card-content flex flex-col justify-between px-4 py-4 flex-1 overflow-y-auto">
                  <span className="inline-block mb-2 text-xs font-bold text-blue-600 uppercase">
                    {card.category}
                  </span>
                  <h3 className="text-2xl font-black leading-tight mb-2">{card.title}</h3>
                  <p className="mb-4">{card.shortDescription}</p>

                  {expandedCard === card.id && (
                    <p className="mb-4 text-gray-700">{card.longDescription}</p>
                  )}

                  <button
                    onClick={() => toggleCard(card.id)}
                    className="inline-block mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 transition"
                  >
                    {expandedCard === card.id ? 'Collapse' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
