import { useState } from "react";
import { Sun } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { videos } from "../data/site";

export default function VideoShowcase() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="On the job"
          title="See our"
          highlight="solar projects"
          subtitle="Real installations — panel mounting, inverter setup and full power activation."
        />

        <div className="mt-14">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-black shadow-2xl">
            <video
              key={current}
              className="h-full w-full object-cover"
              controls
              autoPlay
              muted
              playsInline
              onEnded={() => setCurrent((p) => (p + 1) % videos.length)}
            >
              <source src={videos[current]} type="video/mp4" />
            </video>

            <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              <Sun className="h-4 w-4 text-brand-yellow" /> Installation in progress
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-6 flex justify-center gap-3">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Play video ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  current === i ? "w-8 bg-brand-orange" : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
