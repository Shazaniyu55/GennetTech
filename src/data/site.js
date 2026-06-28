// =============================================================
//  Gennet Tech Solutions Ltd — central site configuration
//  Edit company details here once; the whole site updates.
// =============================================================

import {
  Sun,
  ShieldCheck,
  Plug,
  Lightbulb,
  Cpu,
  PhoneCall,
  CalendarCheck,
  Wrench,
  BadgeCheck,
} from "lucide-react";

export const company = {
  name: "Gennet Tech Solutions Ltd",
  shortName: "Gennet Tech",
  tagline: "Power your home. Protect what matters.",
  // One clean, consistent set of contact details (the old site had two emails).
  phoneDisplay: "+234 902 855 5593",
  phoneRaw: "+2349028555593",
  whatsappRaw: "2349028555593", // used for wa.me links
  email: "info@gennetechsolution.com",
  location: "Abuja, Nigeria",
  hours: "Mon – Sat, 8:00am – 6:00pm",
  logo: "/assets/logo.png",
  socials: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
};

// Helper: build a prefilled WhatsApp link
export const whatsappLink = (message = "Hello Gennet Tech, I'd like to make an enquiry.") =>
  `https://wa.me/${company.whatsappRaw}?text=${encodeURIComponent(message)}`;

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "500+", label: "Installations completed" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Support & monitoring" },
];

export const services = [
  {
    icon: Sun,
    title: "Solar Installation",
    description:
      "Beat the grid. We design and install solar + inverter systems sized to your daily power needs, so the lights stay on through every outage.",
    accent: "yellow",
  },
  {
    icon: ShieldCheck,
    title: "CCTV & Security",
    description:
      "HD surveillance with remote viewing from your phone. See your home or business from anywhere, day or night.",
    accent: "blue",
  },
  {
    icon: Plug,
    title: "Electrical Wiring",
    description:
      "Safe, code-compliant wiring for new builds and rewiring projects, finished by certified technicians.",
    accent: "green",
  },
  {
    icon: Lightbulb,
    title: "Street Light Installation",
    description:
      "Solar-powered street and compound lighting for estates, schools and businesses — bright nights, zero bills.",
    accent: "orange",
  },
  {
    icon: Cpu,
    title: "Tech Consultation",
    description:
      "Not sure what you need? We assess your site and recommend the right power and security setup for your budget.",
    accent: "navy",
  },
];

export const process = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Get in touch",
    description: "Tell us what you need over a quick call or WhatsApp message.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Free site survey",
    description: "We visit, assess your needs and send a clear, no-surprise quote.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Professional install",
    description: "Our certified team installs cleanly and tests everything on site.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Ongoing support",
    description: "We back every job with maintenance and 24/7 support.",
  },
];

export const projects = [
  { src: "/assets/gennet1.jpeg", label: "Rooftop solar array" },
  { src: "/assets/gennet2.jpeg", label: "Inverter & battery setup" },
  { src: "/assets/gennet3.jpeg", label: "CCTV installation" },
  { src: "/assets/gennet4.jpeg", label: "Commercial solar project" },
  { src: "/assets/gennet5.jpeg", label: "Panel mounting" },
  { src: "/assets/gennet6.jpeg", label: "Security camera fit-out" },
  { src: "/assets/gennet8.jpeg", label: "Residential power system" },
  { src: "/assets/gennet9.jpeg", label: "Completed installation" },
];

export const videos = [
  "/assets/gennet12.mp4",
  "/assets/gennet13.mp4",
  "/assets/gennet14.mp4",
];

export const heroSlides = [
  "/assets/solar5.jpg",
  "/assets/solar4.jpg",
  "/assets/solar6.jpg",
  "/assets/solar2.jpg",
];

export const testimonials = [
  {
    quote:
      "Since Gennet installed our solar system, we haven't worried about NEPA once. Clean work and very professional team.",
    name: "Adewale O.",
    role: "Homeowner, Abuja",
  },
  {
    quote:
      "The CCTV setup lets me watch my shop from my phone anywhere. Their support has been excellent.",
    name: "Chinwe E.",
    role: "Business owner",
  },
  {
    quote:
      "They surveyed the site, gave an honest quote and finished on time. I've recommended them to my neighbours.",
    name: "Musa I.",
    role: "Estate manager",
  },
];

export const team = [
  {
    name: "Rasak Gbadamosi",
    role: "CEO / Lead Solar Engineer",
    bio: "Over 10 years installing residential and commercial solar systems across Nigeria.",
    image: "/assets/gennet2.jpeg",
    socials: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  // {
  //   name: "Shazaniyu Gbadamosi",
  //   role: "Web & Graphics Designer",
  //   bio: "Builds the websites and visual identity that keep Gennet looking sharp online.",
  //   image: "/assets/niyu.jpeg",
  //   socials: { linkedin: "#", twitter: "#", facebook: "#" },
  // },
];