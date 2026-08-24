import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Where I've worked." />

        <ol className="mt-12 relative border-l border-border pl-6 sm:pl-10">
          {experience.map((item, i) => (
            <li key={item.company} className="relative pb-12 last:pb-0">
              <span
                className="absolute -left-[1.9rem] top-2 size-3 rounded-full border-2 border-background bg-accent sm:-left-[2.9rem]"
                aria-hidden
              />
              <Reveal delay={i * 0.08}>
                <p className="eyebrow">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold">{item.company}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                <p className="mt-3 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-medium">
                  {item.role}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
