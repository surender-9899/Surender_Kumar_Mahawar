import { Reveal, SectionHeading } from "./Reveal";
import { skillGroups, familiarWith } from "@/data/profile";

export function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-secondary/40 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech stack"
          title="Technologies I build with."
          description="Backend depth in Java and Spring Boot, extended into modern JavaScript, databases and deployment tooling."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <article className="card-surface h-full p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{group.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 rounded-xl border border-dashed border-border p-5">
            <p className="eyebrow">Familiar with</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {familiarWith.map((item) => (
                <li key={item} className="font-mono text-xs text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
