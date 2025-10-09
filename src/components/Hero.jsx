/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from './Navbar'

export default function AssetManagementHero() {

    const overlayTexts = [
        "Monitor and optimize every asset in real time to make smarter business decisions effortlessly.",
        "Simplify compliance, reporting, and performance tracking across all your enterprise assets.",
        "Unlock insights from your asset data and drive growth with confidence and clarity.",
        "Experience seamless asset management with a secure, intuitive cloud platform.",
        "Transform how your organization tracks, manages, and grows its valuable resources."
    ];

    const [textIndex, setTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let typeTimeout;

        if (typing) {
            typeTimeout = setTimeout(() => {
                setDisplayedText(
                    overlayTexts[textIndex].slice(0, displayedText.length + 1)
                );
                if (displayedText.length + 1 === overlayTexts[textIndex].length) {
                    setTyping(false);
                }
            }, 100);
        } else {
            typeTimeout = setTimeout(() => {
                setTyping(true);
                setDisplayedText("");
                setTextIndex((prev) => (prev + 1) % overlayTexts.length);
            }, 2000);
        }

        return () => clearTimeout(typeTimeout);
    }, [displayedText, typing, overlayTexts, textIndex]);

    return (
        <div>
            {/* NAVBAR */}
            <Navbar />

            {/* HERO */}
            <div className="w-full bg-transparent overflow-hidden">
                <section className="relative bg-white pb-[110px] pt-[120px] lg:pt-[150px]">
                    <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-0">
                        <div className="-mx-4 flex flex-wrap items-center">
                            {/* Left Section */}
                            <div className="w-full px-4 lg:w-5/12">
                                <div className="hero-content">
                                    <h1 className="mb-5 text-4xl font-bold leading-tight text-[#5D1F73] sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                        Enterprise-Grade Facility Management
                                    </h1>
                                    <p className="mb-8 max-w-[480px] text-base text-gray-600">
                                        Take charge of <span className="font-bold">Assets, Maintenance</span>, and{" "}
                                        <span className="font-bold">Work Orders</span> with our intelligent software built for
                                        modern enterprises. Ensure safety, compliance, and efficiency—at scale.
                                    </p>

                                    {/* Buttons */}
                                    <ul className="flex flex-wrap items-center gap-4">
                                        <li>
                                            <a
                                                href="/#"
                                                className="inline-flex items-center justify-center rounded-md bg-[#5D1F73] px-6 py-3 text-base font-bold text-white hover:bg-purple-800 lg:px-7 transition"
                                            >
                                                Request Demo
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/#"
                                                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-6 py-3 text-base font-bold lg:px-7 transition"
                                            >
                                                Learn More
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Client Logos */}
                                    <div className="clients pt-16">
                                        <h6 className="mb-6 flex items-center text-xs font-normal text-gray-500">
                                            Trusted by leading organizations
                                            <span className="ml-3 inline-block h-px w-8 bg-gray-300"></span>
                                        </h6>

                                        <div className="flex items-center space-x-4 flex-wrap gap-4 sm:gap-6">
                                            {[
                                                "https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg",
                                                "https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg",
                                                "https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg",
                                            ].map((src, i) => (
                                                <a href="#" key={i} className="flex items-center justify-center">
                                                    <img
                                                        src={src}
                                                        alt={`brand${i + 1}`}
                                                        className="h-8 w-auto sm:h-10 opacity-90 hover:opacity-100 transition"
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="hidden px-4 lg:block lg:w-1/12"></div>
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="lg:ml-auto lg:text-right relative">
                                    <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                        <img
                                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.0&q=80&auto=format&fit=crop&w=1200"
                                            alt="Asset Management Dashboard"
                                            className="max-w-full lg:ml-auto rounded-xl shadow-lg object-cover"
                                        />
                                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-medium text-center drop-shadow-md max-w-[90%]">
                                            {displayedText}
                                            <span className="animate-blink">|</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Blink animation */}
            <style>{`
                .animate-blink {
                    animation: blink 1s step-start infinite;
                }
                @keyframes blink {
                    50% { opacity: 0; }
                }
            `}</style>
        </div>
    );
}
