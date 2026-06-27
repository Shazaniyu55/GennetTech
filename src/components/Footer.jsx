import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { company, navLinks } from "../data/site";

const serviceLinks = [
  "Solar Installation",
  "CCTV Installation",
  "Electrical Wiring",
  "Street Light Installation",
  "Tech Consultation",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-blue-100">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={company.logo}
                alt={company.name}
                className="h-11 w-11 rounded-full ring-2 ring-white/20"
              />
              <span className="font-display text-lg font-semibold text-white">Gennet Tech</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional solar installation and CCTV security systems designed to
              power and protect your home or business.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={company.socials.facebook} aria-label="Facebook">
                <Facebook className="h-5 w-5 transition hover:-translate-y-1 hover:text-brand-orange" />
              </a>
              <a href={company.socials.twitter} aria-label="Twitter">
                <Twitter className="h-5 w-5 transition hover:-translate-y-1 hover:text-brand-orange" />
              </a>
              <a href={company.socials.instagram} aria-label="Instagram">
                <Instagram className="h-5 w-5 transition hover:-translate-y-1 hover:text-brand-orange" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-white">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="transition hover:text-brand-orange">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="transition hover:text-brand-orange">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange" />
                <a href={`tel:${company.phoneRaw}`} className="hover:text-brand-orange">
                  {company.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-orange" />
                <a href={`mailto:${company.email}`} className="hover:text-brand-orange">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-orange" />
                {company.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="text-blue-200">Quality service at its best.</p>
        </div>
      </div>
    </footer>
  );
}
