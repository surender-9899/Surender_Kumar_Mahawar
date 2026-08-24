import { Reveal, SectionHeading } from "./Reveal";
import { strengths } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="A backend-first developer with a full-stack mindset."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Software Developer based in New Delhi, India, with a strong foundation in Java,
              Spring Boot, REST APIs, SQL and backend development. I've expanded my full-stack
              capabilities through hands-on work with Node.js, Express.js, React and WordPress.
            </p>
            <p>
              I completed a Web Developer internship at AyanshTech Solutions and currently work as a
              Software Developer at IntLogBC — International Logistics Blockchain Consultancy. My
              projects span full-stack applications, microservices-based systems and secure apps
              built with Spring Security and JWT.
            </p>
            <p>
              I care about clean, maintainable software and I keep expanding across modern
              development technologies — currently deepening Node.js, React, system design and
              advanced SQL.
            </p>
            <dl className="grid grid-cols-2 gap-8 pt-4 sm:grid-cols-3">
              <div>
                <dt className="eyebrow">Education</dt>
                <dd className="mt-1 text-sm text-foreground">B.Tech, Computer Science</dd>
              </div>
              <div>
                <dt className="eyebrow">University</dt>
                <dd className="mt-1 text-sm text-foreground">Poornima University, Jaipur</dd>
              </div>
              <div>
                <dt className="eyebrow">CGPA</dt>
                <dd className="mt-1 text-sm text-foreground">7.83 - 2025</dd>
              </div>
            </dl>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, i) => (
              <Reveal key={item.no} delay={i * 0.06}>
                <article className="card-surface h-full p-5">
                  <span className="font-mono text-xs text-accent">{item.no}</span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
