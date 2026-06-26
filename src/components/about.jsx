import React from "react";
import { ShieldCheck, Sun, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 mt-20 p-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E4E79] mb-6">
            About Gennet Tech Solutions Ltd
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At <span className="font-semibold text-[#F57C00]">Gennet Tech Solutions Ltd</span>, 
            we specialize in delivering innovative solar energy systems and 
            advanced CCTV security solutions tailored for homes and businesses. 
            Our goal is to provide reliable power and smart protection using 
            modern, energy-efficient technology.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            With experienced technicians and high-quality equipment, we ensure 
            every installation is safe, durable, and built to perform. 
            We combine sustainability with smart security to power and protect 
            what matters most to you.
          </p>

          <button className="bg-[#F57C00] hover:bg-[#E65100] text-white px-8 py-3 rounded-full shadow-lg transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Features */}
        <div className="space-y-6">
          <div className="flex items-start gap-4 p-6 bg-[#F4F6F8] rounded-2xl shadow-sm hover:shadow-md transition">
            <Sun className="text-[#FBC02D]" size={40} />
            <div>
              <h4 className="text-xl font-semibold text-[#1E4E79]">
                Sustainable Solar Solutions
              </h4>
              <p className="text-gray-600">
                Efficient solar panel installations designed to reduce energy 
                costs and promote clean, renewable power.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-[#F4F6F8] rounded-2xl shadow-sm hover:shadow-md transition">
            <ShieldCheck className="text-[#1976D2]" size={40} />
            <div>
              <h4 className="text-xl font-semibold text-[#1E4E79]">
                Smart CCTV Security
              </h4>
              <p className="text-gray-600">
                Advanced surveillance systems with remote monitoring for 
                maximum safety and peace of mind.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-[#F4F6F8] rounded-2xl shadow-sm hover:shadow-md transition">
            <Zap className="text-[#2E7D32]" size={40} />
            <div>
              <h4 className="text-xl font-semibold text-[#1E4E79]">
                Reliable Performance
              </h4>
              <p className="text-gray-600">
                Professional installation and ongoing support to ensure your 
                systems operate efficiently and effectively.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;