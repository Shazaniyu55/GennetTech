import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const backgroundImages = [
  "/assets/solar5.jpg",
  "/assets/solar4.jpg",
  "/assets/solar6.jpg",
  "/assets/solar2.jpg"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={backgroundImages[currentImageIndex]}
          alt="Professional solar and security solutions"
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl font-semibold tracking-tight text-white sm:text-7xl drop-shadow-lg"
          >
            GENNET TECH SOLUTIONS LTD!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="mt-8 text-lg font-medium text-white sm:text-xl/8 drop-shadow-lg"
          >
            Powering Your Future with Smart Solar & Security Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="/book"
              className="rounded-md sm:w-[300px] h-[40px] bg-[#F57C00] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500"
            >
              Book Now
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}