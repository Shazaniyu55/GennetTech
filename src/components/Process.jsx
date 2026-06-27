import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";
import { process } from "../data/site";

export default function Process() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From first call to"
          highlight="full power"
          subtitle="A clear, four-step process with no surprises along the way."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {process.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.step} className="relative">
                {/* connector line on large screens */}
                {i < process.length - 1 && (
                  <span className="absolute left-[3.25rem] top-7 hidden h-px w-full bg-gradient-to-r from-brand-orange/40 to-transparent lg:block" />
                )}
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white">
                    {p.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
