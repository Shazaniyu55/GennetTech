import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";
import { projects } from "../data/site";

export default function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section id="projects" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our work"
          title="Recent"
          highlight="installations"
          subtitle="A look at solar and CCTV projects we've completed for clients across the country."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} mt-16 grid grid-cols-2 gap-4 md:grid-cols-4`}
        >
          {projects.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${
                i % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                {p.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
