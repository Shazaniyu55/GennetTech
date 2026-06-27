import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";
import { services } from "../data/site";

const accentMap = {
  yellow: "text-brand-yellow bg-brand-yellow/10",
  blue: "text-brand-blue bg-brand-blue/10",
  green: "text-brand-green bg-brand-green/10",
  orange: "text-brand-orange bg-brand-orange/10",
  navy: "text-brand-navy bg-brand-navy/10",
};

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Services built for"
          highlight="Nigerian conditions"
          subtitle="From beating the grid with solar to keeping an eye on your property, we handle the full job — survey, supply, install and support."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group rounded-3xl border border-gray-100 bg-mist p-8 transition hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accentMap[s.accent]}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{s.description}</p>
              </div>
            );
          })}

          {/* CTA card to fill the grid and drive action */}
          <div className="flex flex-col justify-center rounded-3xl bg-brand-navy p-8 text-white">
            <h3 className="text-xl font-semibold">Not sure what you need?</h3>
            <p className="mt-3 text-blue-100">
              Book a free site survey and we'll recommend the right setup for your space and budget.
            </p>
            <a
              href="/book"
              className="mt-6 inline-flex w-fit items-center rounded-full bg-brand-orange px-6 py-3 font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              Book a survey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
