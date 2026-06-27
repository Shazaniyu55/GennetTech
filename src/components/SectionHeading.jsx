// Shared section heading with eyebrow + title + optional subtitle.
const SectionHeading = ({ eyebrow, title, highlight, subtitle, center = true, light = false }) => (
  <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl`}>
    {eyebrow && (
      <p
        className={`text-sm font-semibold uppercase tracking-widest mb-3 ${
          light ? "text-brand-yellow" : "text-brand-orange"
        }`}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${
        light ? "text-white" : "text-brand-navy"
      }`}
    >
      {title} {highlight && <span className="text-brand-orange">{highlight}</span>}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-lg ${light ? "text-blue-100" : "text-gray-600"}`}>{subtitle}</p>
    )}
    <div className={`accent-rule mt-6 ${center ? "mx-auto" : ""}`} />
  </div>
);

export default SectionHeading;
