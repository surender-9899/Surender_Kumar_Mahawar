import { Reveal, SectionHeading } from "./Reveal";
import { services } from "@/data/profile";

export function Services() {
  return (
    <section className="py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading eyebrow="What I do" title="How I can help." />

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05} className="bg-surface">
              <article className="group h-full p-7 transition-colors hover:bg-secondary/60">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
