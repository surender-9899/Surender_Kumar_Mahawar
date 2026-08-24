import { Reveal, SectionHeading } from "./Reveal";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section id="certifications" className="border-y border-border bg-secondary/40 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications & learning"
          title="Always leveling up."
          description="Courses and certifications that shaped my fundamentals and keep pushing my stack forward."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <article className="card-surface flex h-full items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-base font-semibold">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                {cert.status ? (
                  <span className="shrink-0 rounded-full border border-accent px-3 py-1 font-mono text-[0.65rem] tracking-widest text-accent uppercase">
                    {cert.status}
                  </span>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
