import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sun, ShieldCheck } from "lucide-react";
import { heroSlides, whatsappLink } from "../data/site";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      {/* Rotating background */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Navy gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-navy/70 to-black/60" />
      </div>

      {/* Sun-ray signature */}
      <div
        aria-hidden="true"
        className="sun-rays pointer-events-none absolute -right-40 -top-40 -z-10 h-[40rem] w-[40rem] rounded-full opacity-60"
      />

      <div className="mx-auto max-w-7xl px-5 py-32 lg:px-8">
        <div className="max-w-2xl">
          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Sun className="h-4 w-4 text-brand-yellow" /> Solar & Inverters
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-brand-blue" /> CCTV Security
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl font-bold leading-tight text-white drop-shadow sm:text-6xl"
          >
            Reliable power.{" "}
            <span className="text-brand-yellow">Round-the-clock</span> security.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg text-blue-50 sm:text-xl"
          >
            Gennet Tech Solutions installs smart solar systems and CCTV security
            for homes and businesses across Nigeria — so you stay powered and
            protected, even when the grid fails.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-brand-orange-dark"
            >
              Book a free survey <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={whatsappLink("Hi Gennet Tech, I'd like a quote for solar/CCTV.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-brand-orange" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
