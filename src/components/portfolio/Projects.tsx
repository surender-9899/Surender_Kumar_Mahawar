import { Reveal, SectionHeading } from "./Reveal";
import { projects, contact } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-secondary/40 py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built."
          description="Full-stack applications, microservices and REST APIs — built to practice real architecture, not just features."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 0.06}
              className={project.featured ? "lg:col-span-2" : undefined}
            >
              <article className="card-surface flex h-full flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  {project.featured ? (
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.65rem] tracking-widest text-accent-foreground uppercase">
                      Featured
                    </span>
                  ) : null}
                  <span className="eyebrow">{project.tagline}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex gap-5 border-t border-border pt-5 text-sm">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium transition-colors hover:text-accent"
                  >
                    GitHub →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
