import { Sun, ShieldCheck, Zap, CheckCircle2 } from "lucide-react";
import useReveal from "../hooks/useReveal";

const features = [
  {
    icon: Sun,
    color: "text-brand-yellow",
    title: "Sustainable solar solutions",
    text: "Efficient solar and inverter systems that cut your bills and keep you running through outages.",
  },
  {
    icon: ShieldCheck,
    color: "text-brand-blue",
    title: "Smart CCTV security",
    text: "Modern surveillance with remote monitoring, so you can check in from anywhere.",
  },
  {
    icon: Zap,
    color: "text-brand-green",
    title: "Reliable performance",
    text: "Quality equipment, clean installs and ongoing support you can count on.",
  },
];

const points = [
  "Certified, experienced technicians",
  "Honest quotes — no hidden costs",
  "Quality, warrantied equipment",
  "After-install maintenance & support",
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="bg-mist py-24">
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8`}
      >
        {/* Left: copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
            About us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl md:text-5xl">
            Powering and protecting what matters most
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            At <span className="font-semibold text-brand-orange">Gennet Tech Solutions Ltd</span>,
            we design and install solar energy systems and advanced CCTV security
            for homes and businesses. Our mission is simple: reliable power and
            smart protection, built with modern, energy-efficient technology.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            With skilled technicians and quality equipment, every installation is
            safe, durable and built to perform.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-gray-700">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="mt-10 inline-flex rounded-full bg-brand-navy px-7 py-3 font-semibold text-white transition hover:bg-brand-navy-dark"
          >
            Explore our services
          </a>
        </div>

        {/* Right: feature cards */}
        <div className="space-y-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <Icon className={`h-10 w-10 shrink-0 ${f.color}`} />
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy">{f.title}</h4>
                  <p className="mt-1 text-gray-600">{f.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
