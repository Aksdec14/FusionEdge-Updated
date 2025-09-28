import React, { useState, useEffect } from "react";
import {
  ClipboardList,
  ShieldCheck,
  Package,
  Database,
  BarChart3,
} from "lucide-react";

import img1 from "../assets/Images/freepik__highfidelity-saas-facility-management-dashboard-ov__41545-Photoroom.png";
import img2 from "../assets/Images/freepik__highfidelity-saas-facility-management-dashboard-ov__41545-Photoroom.png";
import img3 from "../assets/Images/freepik__highfidelity-saas-facility-management-dashboard-ov__41545-Photoroom.png";
import img4 from "../assets/Images/freepik__highfidelity-saas-facility-management-dashboard-ov__41545-Photoroom.png";
import img5 from "../assets/Images/freepik__highfidelity-saas-facility-management-dashboard-ov__41545-Photoroom.png";

const sections = [
  {
    id: 1,
    title: "Work Order Management",
    content:
      "Manage all your work orders from creation to completion. Track progress, assign tasks, and ensure timely maintenance activities.",
    img: img1,
    icon: <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6" />,
    points: [
      "Create, assign, and track work orders",
      "Real-time progress monitoring",
      "Collaborative task management",
      "Reduce delays with automated alerts",
    ],
  },
  {
    id: 2,
    title: "Preventive Maintenance",
    content:
      "Automate preventive maintenance schedules to reduce downtime and improve equipment reliability.",
    img: img2,
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
    points: [
      "Schedule recurring maintenance tasks",
      "Extend asset lifespan",
      "Reduce unexpected failures",
      "Lower overall repair costs",
    ],
  },
  {
    id: 3,
    title: "Asset Management",
    content:
      "Track and optimize asset performance with real-time insights and lifecycle management tools.",
    img: img3,
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    points: [
      "Centralized asset tracking",
      "Monitor asset lifecycle",
      "Real-time performance metrics",
      "Plan for asset replacements",
    ],
  },
  {
    id: 4,
    title: "Parts & Inventory",
    content:
      "Maintain optimal inventory levels with automated alerts, reordering capabilities, and parts tracking.",
    img: img4,
    icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
    points: [
      "Automated stock alerts",
      "Reduce stockouts & overstock",
      "Streamlined reordering process",
      "Track parts consumption",
    ],
  },
  {
    id: 5,
    title: "Analytics",
    content:
      "Get actionable insights from real-time analytics to improve operational efficiency and decision-making.",
    img: img5,
    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
    points: [
      "Track KPIs in real time",
      "Identify performance bottlenecks",
      "Forecast maintenance trends",
      "Data-driven decision making",
    ],
  },
];

export default function OperationsTabs() {
  const [active, setActive] = useState(1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const t = setTimeout(() => setFade(false), 400);
    return () => clearTimeout(t);
  }, [active]);

  const activeData = sections.find((s) => s.id === active);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-left mb-10">
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#5D1F73]">
            Simplify Modern Facility Operations
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl">
            A complete suite of intelligent tools designed to modernize your facility operations. From work orders to analytics, streamline processes, enhance efficiency, and gain real-time insights.
            <br /><br />
            <span className="font-bold text-base sm:text-lg md:text-xl text-gray-600">
              All in one powerful platform!
            </span>
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto sm:flex-wrap gap-3 sm:gap-4 mb-10 pb-2 sm:pb-0 no-scrollbar">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActive(section.id)}
              className={`flex items-center flex-shrink-0 gap-2 px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg font-medium transition-all duration-300
                ${active === section.id
                  ? "bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </div>

        {/* Content + Image */}
        <div className="mt-12">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out`}
          >
            {/* Left Side - Text + Bullets */}
            <div
              className={`flex flex-col justify-center p-6 sm:p-8 bg-[#f3ebf5] transition-all duration-500 ease-in-out ${fade ? "opacity-0 -translate-x-5" : "opacity-100 translate-x-0"
                }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-[#5D1F73] mb-4">{activeData.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                {activeData.content}
              </p>

              {/* Bullet Points */}
              <ul className="text-gray-700 space-y-2 list-disc list-inside text-sm sm:text-base">
                {activeData.points.map((point, i) => (
                  <li key={i} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Side - Image */}
            <div
              className={`flex justify-center items-center bg-[#f3ebf5] transition-all duration-500 ease-in-out ${fade ? "opacity-0 translate-x-5" : "opacity-100 translate-x-0"
                }`}
            >
              <img
                src={activeData.img}
                alt={activeData.title}
                className="w-full h-auto max-h-[400px] object-contain p-4 sm:p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
