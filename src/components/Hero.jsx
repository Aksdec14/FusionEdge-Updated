/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import icon from '../assets/Icons/For-Social-Media.png';
import { Link } from 'react-router-dom'

export default function AssetManagementHero() {
    const [open, setOpen] = useState(false);

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
            <header className="absolute left-0 top-0 z-20 w-full bg-white shadow-sm">
                <div className="container mx-auto md:mx-10 lg:mx-17 px-0">
                    <div className="flex items-center justify-between py-4">
                        {/* Logo */}
                        <div className="w-60">
                            <a href="/" className="block">
                                <img src={icon} alt="logo" className="w-42 h-15" />
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link to="/" className="text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Home</Link>
                            <Link to="/about" className="text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">About</Link>
                            <Link to="/solutions" className="text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Solutions</Link>
                            <Link to="/industries" className="text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Industries</Link>
                            <Link to="/resources" className="text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Resources</Link>

                            <Link to="/signin" className="px-1 py-2 text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">
                                Sign in
                            </Link>

                            <Link to="/contact" className="bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
                        >
                            <span className="block w-6 h-0.5 bg-purple-800"></span>
                            <span className="block w-6 h-0.5 bg-purple-800"></span>
                            <span className="block w-6 h-0.5 bg-purple-800"></span>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4" : "max-h-0 py-0"
                            } bg-white shadow-lg rounded-lg flex flex-col items-center space-y-4`}
                    >
                        <Link to="/" className="block text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Home</Link>
                        <Link to="/about" className="block text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">About</Link>
                        <Link to="/solutions" className="block text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Solutions</Link>
                        <Link to="/industries" className="block text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Industries</Link>
                        <Link to="/resources" className="block text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">Resources</Link>

                        <Link to="/signin" className="block px-6 py-2 text-base font-medium text-purple-800 hover:text-[#1ABC9C] transition-colors">
                            Sign in
                        </Link>

                        <Link to="/contact" className="block bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <div className="relative bg-white pb-[110px] pt-[120px] lg:pt-[150px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content">
                                <h1 className="mb-5 text-4xl font-bold leading-tight text-[#5D1F73] sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    Enterprise-Grade Facility Management
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base text-gray-600">
                                    Take charge of <span className="font-bold">Assets , Maintenance</span> , and <span className="font-bold">Work Orders</span> with our intelligent software built for modern enterprises.
                                    Ensure safety, compliance, and efficiency—at scale.
                                </p>
                                <ul className="flex flex-wrap items-center gap-4">
                                    <li>
                                        <a href="/#" className="inline-flex items-center justify-center rounded-md bg-[#5D1F73] px-6 py-3 text-base font-bold text-white hover:bg-purple-800 lg:px-7" > Request Demo </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/#"
                                            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-6 py-3 text-base font-bold lg:px-7"
                                        >
                                            Learn More
                                        </a>
                                    </li>
                                </ul>
                                <div className="clients pt-16">
                                    <h6 className="mb-6 flex items-center text-xs font-normal text-gray-500">
                                        Trusted by leading organizations
                                        <span className="ml-3 inline-block h-px w-8 bg-gray-300"></span>
                                    </h6>

                                    <div className="flex items-center space-x-4">
                                        {[
                                            "https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg",
                                            "https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg",
                                            "https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg"
                                        ].map((src, i) => (
                                            <a href="#" key={i} className="flex w-full items-center justify-center">
                                                <img src={src} alt={`brand${i + 1}`} className="h-10 w-auto" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right relative">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.0&q=80&auto=format&fit=crop&w=1200"
                                        alt="Asset Management Dashboard"
                                        className="max-w-full lg:ml-auto rounded-xl shadow-lg"
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
