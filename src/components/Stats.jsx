import { stats } from "../data/site";
import useReveal from "../hooks/useReveal";

export default function Stats() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-brand-navy">
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-14 lg:grid-cols-4 lg:px-8`}
      >
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-brand-yellow sm:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-sm font-medium text-blue-100">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
