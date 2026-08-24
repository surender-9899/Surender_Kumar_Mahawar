import { motion } from "motion/react";
import { contact, heroImageAlt } from "@/data/profile";
import heroPortrait from "@/assets/Hero_Section_Image.png";

const stack = ["Java", "Spring Boot", "Node.js", "Express.js", "React", "SQL"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            Software Developer — {contact.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-6xl md:text-7xl"
          >
            Hi, I'm Surender
            <br />
            Kumar Mahawar.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            I’m a Software Developer experienced in building web applications, REST APIs, and database-driven systems. My development journey spans Java and Spring Boot on the backend, along with Node.js, React, SQL, and modern web technologies across the stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View my work <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Let's connect
            </a>
            {/* <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub ↗
            </a> */}
            {/* <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn ↗
            </a> */}
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs tracking-widest text-muted-foreground uppercase"
          >
            {stack.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            className="absolute -inset-4 rounded-[2rem] bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] blur-2xl"
            aria-hidden
          />
          <img
            src={heroPortrait}
            alt={heroImageAlt}
            width={1024}
            height={1280}
            className="card-surface relative aspect-4/5 w-full rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
