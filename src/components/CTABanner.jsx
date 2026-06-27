import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-brand-orange to-brand-orange-dark py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
        <div>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to stay powered and protected?
          </h2>
          <p className="mt-2 text-orange-50">
            Book a free survey today — no obligation, just honest advice.
          </p>
        </div>
        <a
          href="/book"
          className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-brand-orange-dark shadow-lg transition hover:bg-brand-navy hover:text-white"
        >
          Book now <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
