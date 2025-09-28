import React from "react";
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-3xl border-2"
        style={{ backgroundColor: "white", borderColor: "#5D1F73" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="p-8 sm:p-10 text-white relative flex flex-col justify-between" style={{ backgroundColor: "#5D1F73" }}>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-6 text-sm sm:text-base text-gray-100">
                Have some big idea or brand to develop and need help?
              </p>

              <ul className="space-y-4 mb-8 text-sm sm:text-base">
                <li className="flex items-center gap-3">
                  <Mail size={18} style={{ color: "#1ABC9C" }} />
                  info@fusionEdge.com
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} style={{ color: "#1ABC9C" }} />
                  +91-9015122212
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: "#1ABC9C" }} />
                  Noida
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {["Facebook", "Linkedin", "Instagram"].map((icon, idx) => {
                const Icon = { Facebook, Linkedin, Instagram }[icon];
                return (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 rounded-full transition transform hover:scale-110"
                    style={{ backgroundColor: "white", color: "#5D1F73" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1ABC9C")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            <div
              className="absolute bottom-0 right-0 w-28 sm:w-32 h-28 sm:h-32 rounded-tl-full"
              style={{ backgroundColor: "#1ABC9C" }}
            ></div>
          </div>

          {/* Right Section */}
          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="border-b w-full py-2 text-sm sm:text-base focus:outline-none transition-all duration-200"
                style={{ borderColor: "#5D1F73" }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b w-full py-2 text-sm sm:text-base focus:outline-none transition-all duration-200"
                style={{ borderColor: "#5D1F73" }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Phone No."
                className="border-b w-full py-2 text-sm sm:text-base focus:outline-none transition-all duration-200"
                style={{ borderColor: "#5D1F73" }}
              />
              <input
                type="email"
                placeholder="Email"
                className="border-b w-full py-2 text-sm sm:text-base focus:outline-none transition-all duration-200"
                style={{ borderColor: "#5D1F73" }}
              />
            </div>

            <textarea
              placeholder="Write Message"
              rows="3"
              className="border-b w-full py-2 mb-6 text-sm sm:text-base focus:outline-none transition-all duration-200"
              style={{ borderColor: "#5D1F73" }}
            ></textarea>

            {/* Radio Buttons */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-sm sm:text-base">Select Subject</label>
              <div className="flex gap-4 sm:gap-6 flex-wrap text-sm sm:text-base">
                {["General Inquiry", "Technical Support", "Website Feedback"].map((label, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="subject" defaultChecked={i === 0} style={{ accentColor: "#5D1F73" }} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#5D1F73] to-[#1ABC9C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg text-sm sm:text-base"
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
