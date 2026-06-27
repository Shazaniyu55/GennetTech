import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X, Phone } from "lucide-react";
import { company, navLinks } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={company.logo}
            alt={company.name}
            className="h-11 w-11 rounded-full ring-2 ring-white/20"
          />
          <span className="hidden font-display font-semibold text-white sm:block">
            Gennet Tech
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-brand-yellow"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <a
            href="/book"
            className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-brand-orange-dark"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-white lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-brand-navy p-6">
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold text-white">Gennet Tech</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-white"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white transition hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            <a
              href="/book"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-brand-orange px-5 py-3 text-center font-semibold text-white"
            >
              Book Now
            </a>
            <a
              href={`tel:${company.phoneRaw}`}
              className="flex items-center justify-center gap-2 text-sm text-blue-100"
            >
              <Phone className="h-4 w-4" /> {company.phoneDisplay}
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
