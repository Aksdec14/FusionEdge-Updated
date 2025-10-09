
import React, { useState } from "react";
import icon from '../assets/Icons/For-Social-Media.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="absolute left-0 top-0 z-20 w-full bg-white shadow-sm">
            <div className="container mx-auto md:mx-10 lg:mx-17 px-0">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="w-60">
                        <Link to="/" className="block">
                            <img src={icon} alt="logo" className="w-42 h-15" />
                        </Link>
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
    );
}
