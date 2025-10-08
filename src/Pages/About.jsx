/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../animationComponent/CardSwap';
import img1 from '../assets/Images/Gemini_Generated_Image_chggu9chggu9chgg.png';
import img2 from '../assets/Images/standard-quality-control-concept-m.jpg';
import img3 from '../assets/Images/modern-equipped-computer-lab.jpg';

const About = () => {
  const tabs = [
    {
      title: 'Overview',
      content:
        'At FusionEdge, we are passionate about transforming the way facility management is conducted. With years of experience in the industry, we recognized the need for a comprehensive solution that addresses the challenges faced by facility managers and property owners. We differentiate ourselves through our commitment to innovation, customer satisfaction, and continuous improvement. Our team of experts is dedicated to staying ahead of industry trends and developing cutting-edge solutions that meet the evolving needs of our clients.',
    },
    {
      title: 'Mission',
      content:
        'Our mission is to provide innovative and user-friendly software solutions that streamline facility operations, improve efficiency, and enhance overall performance. We are committed to delivering exceptional value to our clients and empowering them to achieve their facility management goals.',
    },
    {
      title: 'Vision',
      content:
        'Our vision is to be the leading provider of facility management software, setting the standard for excellence and innovation in the industry. We aim to continuously evolve and adapt to meet the evolving needs of our clients and the ever-changing landscape of facility management.',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const beliefs = [
    {
      id: 1,
      title: 'Customer Focus',
      description:
        'We are dedicated to understanding and meeting the needs of our clients, delivering exceptional service and support at every step.',
    },
    {
      id: 2,
      title: 'Excellence',
      description:
        'We are committed to excellence in everything we do, striving for the highest standards of quality, performance, and customer satisfaction.',
    },
    {
      id: 3,
      title: 'Innovation',
      description:
        'We embrace innovation and continually seek new ways to improve our products and services, staying ahead of the curve in facility management technology.',
    },
    {
      id: 4,
      title: 'Collaboration',
      description:
        'We believe in the power of collaboration and work closely with our clients to develop tailored solutions that address their unique challenges and goals.',
    },
  ];

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero / About Section */}
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left - Images Grid */}
            <div className="w-full lg:w-1/2 grid grid-cols-4 grid-rows-8 gap-3 sm:gap-4 order-2 lg:order-1">
              <div className="col-span-2 row-span-8">
                <img
                  src={img1}
                  alt="Team"
                  className="object-cover w-full h-full rounded-2xl shadow-lg"
                />
              </div>

              <div className="col-span-2 row-span-3 col-start-3 row-start-2">
                <img
                  src={img2}
                  alt="Quality"
                  className="object-cover w-full h-full rounded-2xl shadow-lg"
                />
              </div>

              <div className="col-span-2 row-span-3 col-start-3 row-start-5">
                <img
                  src={img3}
                  alt="Lab"
                  className="object-cover w-full h-full rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Right - Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl bg-white order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#5D1F73] text-center lg:text-left">
                About FusionEdge
              </h2>

              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed text-justify">
                FusionEdge is a next-generation facility management platform that empowers enterprises
                to manage assets, maintenance, and operations with precision. Designed with efficiency
                and sustainability in mind, our system blends advanced analytics with user-friendly
                control for maximum impact.
              </p>

              <p className="text-sm sm:text-base text-gray-700 mb-5 sm:mb-6 leading-relaxed text-justify">
                From real-time monitoring to automated scheduling, FusionEdge helps organizations
                optimize their workflows, reduce downtime, and make data-driven decisions — all
                through a single integrated interface.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-5 py-2.5 rounded-md text-sm sm:text-base font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="rounded-2xl p-6 sm:p-8 md:p-12 w-full max-w-[1500px] bg-white shadow-md">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#5D1F73] text-left">
            Our <span className="text-[#1ABC9C]">Details</span>
          </h2>

          <div className="flex flex-wrap gap-3 mb-6 justify-left">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-5 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                  activeTab === index
                    ? 'bg-[#5D1F73] text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed text-justify">
            {tabs[activeTab].content}
          </p>
        </div>
      </section>

      {/* Product Efficiency Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-[1500px] bg-white rounded-2xl overflow-hidden border border-gray-200 flex flex-col md:flex-row items-center md:justify-between">
          {/* Left - Text */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
            <h2 className="text-3xl font-bold text-[#5D1F73] mb-4 text-center md:text-left">
              With Great Products, Comes Great Efficiency
            </h2>
            <p className="text-gray-700 leading-relaxed text-center md:text-left">
              Our Asset Management system empowers organizations to streamline
              operations, improve visibility, and achieve maximum efficiency across
              all managed assets.
            </p>
          </div>

          {/* Right - Cards */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mt-6 md:mt-0 mb-6 md:mb-0 px-2">
            {/* Desktop & Tablet CardSwap */}
            <div className="hidden sm:flex w-full justify-center">
              <div className="w-full max-w-[500px] h-[400px] sm:h-[400px] md:h-[450px] relative">
                <CardSwap
                  cardDistance={40}           
                  verticalDistance={50}       
                  delay={3000}
                  pauseOnHover={false}
                  width="100%"
                  height="100%"
                  className="
                    !absolute !top-1/2 !left-1/2 !translate-x-[-50%] !translate-y-[-50%]
                    sm:!scale-[0.8]
                    md:!scale-[0.9]
                  "
                >
                  {[img1, img2, img3].map((img, idx) => (
                    <Card key={idx} className="overflow-hidden">
                      <div className="relative w-full h-full">
                        <img
                          src={img}
                          alt={`Card ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                            {idx === 0
                              ? 'Smart Monitoring'
                              : idx === 1
                              ? 'Automation at Scale'
                              : 'Data-Driven Insights'}
                          </h3>
                          <p className="text-sm sm:text-base">
                            {idx === 0
                              ? 'Track and optimize every asset in real-time.'
                              : idx === 1
                              ? 'Reduce manual workload and boost efficiency.'
                              : 'Make informed decisions backed by analytics.'}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>

            {/* Mobile stacked cards */}
            <div className="flex flex-col gap-4 sm:hidden w-full items-center">
              {[img1, img2, img3].map((img, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-[300px] h-[200px] rounded-xl overflow-hidden relative shadow-lg"
                >
                  <img src={img} alt={`Card ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-2">
                    <h3 className="text-base font-semibold mb-1">
                      {idx === 0
                        ? 'Smart Monitoring'
                        : idx === 1
                        ? 'Automation at Scale'
                        : 'Data-Driven Insights'}
                    </h3>
                    <p className="text-xs">
                      {idx === 0
                        ? 'Track and optimize every asset in real-time.'
                        : idx === 1
                        ? 'Reduce manual workload and boost efficiency.'
                        : 'Make informed decisions backed by analytics.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* We Believe In Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#5D1F73]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#1ABC9C]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto text-center mb-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5D1F73] mb-3">
            We Believe in…
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Core values that drive FusionEdge forward and define how we deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {beliefs.map((belief, idx) => (
            <motion.div
              key={belief.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 flex flex-col justify-start relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}           
              whileInView={{ opacity: 1, y: 0 }}        
              viewport={{ once: false, amount: 0.3 }}    // animate every time in view
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Gradient Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#5D1F73] to-[#1ABC9C] text-white font-bold text-lg sm:text-xl mb-4 shadow-lg">
                {belief.id.toString().padStart(2, '0')}
              </div>

              {/* Title with underline animation */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#5D1F73] relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-[#5D1F73] after:to-[#1ABC9C] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                {belief.title}
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {belief.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
