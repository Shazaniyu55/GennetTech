import React, { useState } from "react";
import { Sun } from "lucide-react";

const videos = [
  "/assets/gennet12.mp4",
  "/assets/gennet13.mp4",
  "/assets/gennet14.mp4",
 
];

const SolarVideoShowcase = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="bg-[#F4F6F8] py-20 px-6 md:px-16">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1E4E79]">
          Our <span className="text-[#F57C00]">Solar Projects</span>
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Watch some of our recent solar installation projects including
          panel mounting, inverter setup, and full power activation.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">

          <video
            key={currentVideo}
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            onEnded={handleVideoEnd}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>

          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Sun /> Solar Installation Work
            </h3>
            <p className="text-sm">
              Real installation projects completed by our expert team.
            </p>
          </div>

        </div>

        {/* Video Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`w-3 h-3 rounded-full ${
                currentVideo === index
                  ? "bg-[#F57C00]"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolarVideoShowcase;