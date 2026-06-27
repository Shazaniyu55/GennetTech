import { Linkedin, Twitter, Facebook } from "lucide-react";
import SectionHeading from "./SectionHeading";
import useReveal from "../hooks/useReveal";
import { team } from "../data/site";

export default function Team() {
  const { ref, visible } = useReveal();

  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our people"
          title="Meet the"
          highlight="team"
          subtitle="The professionals who power and protect your space with care and expertise."
        />

        <div
          ref={ref}
          className={`reveal ${visible ? "is-visible" : ""} mt-16 grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {team.map((m) => (
            <article
              key={m.name}
              className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl bg-mist shadow-sm transition hover:shadow-xl"
            >
              <img src={m.image} alt={m.name} className="h-64 w-full object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-brand-navy">{m.name}</h3>
                <p className="mt-1 font-medium text-brand-orange">{m.role}</p>
                <p className="mt-3 text-sm text-gray-600">{m.bio}</p>
                <div className="mt-5 flex justify-center gap-4">
                  <a href={m.socials.linkedin} aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-brand-navy transition hover:text-brand-orange" />
                  </a>
                  <a href={m.socials.twitter} aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-brand-navy transition hover:text-brand-orange" />
                  </a>
                  <a href={m.socials.facebook} aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-brand-navy transition hover:text-brand-orange" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
