import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import icon from '../assets/Icons/Favicon.png';

const Footer = () => {
  return (
    <footer className="bg-[#f3f0ff] text-[#1e1e1e] px-6 sm:px-10 md:px-16 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-base">
        
        {/* Logo & Social */}
        <div className="col-span-1 flex flex-col items-start gap-4">
          <img src={icon} alt="Company Logo" className="h-12 w-auto" />
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            © {new Date().getFullYear()} Fusion Edge. <br />
            All rights reserved.
          </p>
          <div className="flex gap-4 mt-2 text-lg sm:text-xl">
            <a href="#" className="hover:text-purple-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-700 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-purple-500 transition"><FaXTwitter /></a>
          </div>
        </div>

        {/* By Use Case */}
        <div>
          <h6 className="text-[#7f5af0] font-semibold mb-4 text-base sm:text-lg">By Use Case</h6>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            <li><Link to="/404" className="hover:text-purple-600 transition">Fixed Assets Management</Link></li>
            <li><Link to="/404" className="hover:text-purple-600 transition">Fixed Asset Register Management</Link></li>
            <li><Link to="/404" className="hover:text-purple-600 transition">Physical Tracking Of Assets</Link></li>
          </ul>
        </div>

        {/* By Technology */}
        <div>
          <h6 className="text-[#7f5af0] font-semibold mb-4 text-base sm:text-lg">By Technology</h6>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            <li><Link to="/404" className="hover:text-purple-600 transition">Barcode Based Asset Management</Link></li>
            <li><Link to="/404" className="hover:text-purple-600 transition">RFID Based Asset Tracking</Link></li>
            <li><Link to="/404" className="hover:text-purple-600 transition">IoT Based Asset Tracking</Link></li>
          </ul>
        </div>

        {/* By Services */}
        <div>
          <h6 className="text-[#7f5af0] font-semibold mb-4 text-base sm:text-lg">By Services</h6>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            <li><Link to="/404" className="hover:text-purple-600 transition">Fixed Asset Management Services</Link></li>
            <li><Link to="/404" className="hover:text-purple-600 transition">Physical Asset Verification & Tagging Services</Link></li>
            <li><Link to="/404" className="hover:text-purple-600 transition">Fixed Asset Register Services</Link></li>
          </ul>
        </div>

        {/* Contact & Policies */}
        <div>
          <h6 className="text-[#7f5af0] font-semibold mb-4 text-base sm:text-lg">Contact Us</h6>
          <ul className="space-y-2 text-gray-800 text-sm sm:text-base">
            <li><a href="mailto:info@fusionEdge.com" className="hover:text-purple-600 transition">info@fusionEdge.com</a></li>
            <li><a href="tel:+919015122212" className="hover:text-purple-600 transition">+91-9015122212</a></li>
          </ul>
          <div className="mt-6">
            <h6 className="text-[#7f5af0] font-semibold mb-2 text-base sm:text-lg">Content</h6>
            <ul className="space-y-1 text-gray-800 text-sm sm:text-base">
              <li><Link to="/404" className="hover:text-purple-600 transition">Privacy Policy</Link></li>
              <li><Link to="/404" className="hover:text-purple-600 transition">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
