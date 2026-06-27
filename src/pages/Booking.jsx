import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";
import Layout from "../components/Layout";
import { company } from "../data/site";

const serviceOptions = [
  "Solar Installation",
  "CCTV Installation",
  "Electrical Wiring",
  "Street Light Installation",
  "Both Solar & CCTV",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg =
      `New booking request:%0A%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone: ${form.phone}%0A` +
      `Service: ${form.service}%0A` +
      `Preferred date: ${form.date}%0A` +
      `Details: ${form.message}`;
    window.open(`https://wa.me/${company.whatsappRaw}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-b from-mist to-white pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-navy transition hover:text-brand-orange"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-orange">
              Booking
            </p>
            <h1 className="mt-3 text-4xl font-bold text-brand-navy sm:text-5xl">
              Book a <span className="text-brand-orange">service</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
              Tell us a little about your project and we'll get back to you to
              confirm a date for your free site survey.
            </p>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl sm:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
              </div>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                >
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <input
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 text-gray-600 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
                />
              </div>

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Anything else we should know? (location, property type, etc.)"
                className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-4 font-semibold text-white transition hover:bg-brand-orange-dark"
              >
                <MessageCircle className="h-5 w-5" /> Send booking request
              </button>
            </form>

            {submitted && (
              <div className="animate-fade-in mt-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-800">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                Your request is ready in WhatsApp — just hit send and we'll take it from there.
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
