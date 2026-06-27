import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { company, whatsappLink } from "../data/site";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend on the site, so we route the enquiry straight to WhatsApp,
  // where Gennet already receives messages. Reliable for a small business.
  const sendWhatsApp = (e) => {
    e.preventDefault();
    const msg = `Hello Gennet Tech!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;
    window.open(`https://wa.me/${company.whatsappRaw}?text=${msg}`, "_blank");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Enquiry from ${form.name || "website"}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  const details = [
    { icon: Phone, label: company.phoneDisplay, href: `tel:${company.phoneRaw}` },
    { icon: Mail, label: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: company.location },
    { icon: Clock, label: company.hours },
  ];

  return (
    <section id="contact" className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact"
          highlight="us"
          subtitle="Questions about solar or CCTV? Send a message and we'll get back to you fast."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left: info + CTA */}
          <div className="flex flex-col justify-between rounded-3xl bg-brand-navy p-10 text-white">
            <div>
              <h3 className="text-2xl font-semibold">Let's power up your space</h3>
              <p className="mt-3 text-blue-100">
                Reach us directly or fill in the form — whichever is easier for you.
              </p>

              <ul className="mt-8 space-y-5">
                {details.map((d) => {
                  const Icon = d.icon;
                  const content = (
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                        <Icon className="h-5 w-5 text-brand-yellow" />
                      </span>
                      <span className="text-blue-50">{d.label}</span>
                    </span>
                  );
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a href={d.href} className="transition hover:text-brand-yellow">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" /> Message us on WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <form onSubmit={sendWhatsApp} className="rounded-3xl bg-white p-10 shadow-lg">
            <div className="space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
              />
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
              />
            </div>

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-4 font-semibold text-white transition hover:bg-brand-orange-dark"
            >
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={sendEmail}
              className="mt-3 w-full rounded-xl border border-gray-200 py-4 font-semibold text-brand-navy transition hover:bg-mist"
            >
              Prefer email? Send by email instead
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
