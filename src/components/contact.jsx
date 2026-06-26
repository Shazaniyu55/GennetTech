import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const images = [
  "/assets/gennet1.jpeg",
  "/assets/gennet2.jpeg",
  "/assets/gennet3.jpeg",
];

const ContactSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (

    
    <section className="bg-[#F4F6F8] py-24 px-6 md:px-16">

      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#1E4E79]">
          Contact <span className="text-[#F57C00]">Us</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Have questions about solar installation or CCTV security systems? 
          We’re ready to power and protect your property.
        </p>
        <div className="w-24 h-1 bg-[#F57C00] mx-auto mt-6 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SLIDER */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Our Work"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold">
              Our Recent Installations
            </h3>
            <p className="text-sm">
              Solar & CCTV Projects Completed Successfully
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-semibold text-[#1E4E79] mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#F57C00] hover:bg-[#E65100] text-white py-4 rounded-xl font-semibold transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-8 space-y-4 text-gray-600">
            <div className="flex items-center gap-3">
              <Phone className="text-[#1E4E79]" />
              <span>+234-902-855-5593</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#1E4E79]" />
              <span>info@gennettech.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-[#1E4E79]" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;