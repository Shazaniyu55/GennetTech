import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";
import { testimonials } from "../data/site";

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className="bg-brand-navy py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our"
          highlight="clients say"
          light
        />

        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} mt-16 grid gap-6 md:grid-cols-3`}
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur"
            >
              <Quote className="h-8 w-8 text-brand-orange" />
              <blockquote className="mt-4 flex-1 text-blue-50">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-blue-200">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
