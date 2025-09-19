import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import icon from '../assets/Icon/Favicon.png'

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-50 text-gray-700 px-6 sm:px-12 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & description */}
        <div className="flex flex-col items-start gap-4">
          <img
            src= {icon} // Replace with your logo path
            alt="Company Logo"
            className="h-10 w-auto"
          />
          <p className="text-sm sm:text-base text-gray-600">
            FusionEdge Ltd. <br />
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-gray-900 font-semibold mb-4">Services</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">Branding</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Design</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Advertisement</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-gray-900 font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600 transition">About us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600 transition">Press kit</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h6 className="text-gray-900 font-semibold mb-4">Newsletter</h6>
          <label className="text-gray-600 mb-2 block text-sm">Enter your email address</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="username@site.com"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} FusionEdge Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
