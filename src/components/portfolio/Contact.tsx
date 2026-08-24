import { useState } from "react";
import { Mail, Phone, Send, Code2, Heart } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { contact, socials, openToOpportunities } from "@/data/profile";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  x: XIcon,
  X: XIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="pt-12 sm:pt-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="Open to software development roles and collaborations. The fastest way to reach me is email."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <form
              className="card-surface h-full space-y-5 p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Portfolio enquiry from ${data.get("name")}`);
                const body = encodeURIComponent(String(data.get("message")));
                window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
                setSent(true);
              }}
            >
              <h3 className="text-2xl font-semibold">Send a Message</h3>

              <label className="block">
                <span className="eyebrow">Your Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="eyebrow">Your Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="eyebrow">Message</span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-accent"
                  placeholder="Tell me about the role or project…"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="size-4" aria-hidden /> Send Message
              </button>
              {sent ? (
                <p className="text-center text-xs text-muted-foreground">
                  Your email client should have opened — if not, write to {contact.email}.
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-3">
              <a
                href={`mailto:${contact.email}`}
                className="card-surface flex items-center gap-4 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Email</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{contact.email}</span>
                </span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="card-surface flex items-center gap-4 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Phone / WhatsApp</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{contact.phone}</span>
                </span>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Connect on Social Media</h4>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = iconMap[social.icon];
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="flex size-11 items-center justify-center rounded-xl border border-border bg-secondary text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="size-5" aria-hidden />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-[color-mix(in_oklab,var(--accent)_10%,var(--surface))] p-6">
              <h4 className="text-lg font-semibold">{openToOpportunities.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {openToOpportunities.description}
              </p>
            </div>

            <p className="text-sm text-muted-foreground">Based in {contact.location}</p>
          </Reveal>
        </div>
      </div>

      <footer className="mt-16 w-full border-t border-border/30 bg-[#0f0d0b] text-foreground pt-14 pb-8 overflow-hidden">
        <div className="section-shell flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* Left Block */}
          <div className="flex items-center gap-5 sm:gap-6 justify-center lg:justify-start">
            <div className="grid grid-cols-5 gap-4 opacity-25" aria-hidden>
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="size-1 rounded-full bg-muted-foreground" />
              ))}
            </div>

            <div className="flex flex-col text-left">
              <span className="font-mono text-[0.7rem] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase leading-tight">
                BETTER
              </span>
              <span className="font-mono text-[0.7rem] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase leading-tight">
                SOFTWARE
              </span>
              <span className="font-mono text-[0.7rem] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase leading-tight">
                BRIGHTER
              </span>
              <span className="font-mono text-[0.7rem] font-bold tracking-[0.2em] text-muted-foreground/70 uppercase leading-tight">
                POSSIBILITIES
              </span>
              <div className="mt-2.5 h-0.5 w-8 rounded-full bg-accent" />
            </div>
          </div>

          {/* Center Block */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl font-bold tracking-tight text-accent">&lt;/&gt;</span>
              <span className="font-mono text-2xl font-bold tracking-wider text-foreground text-white">SUR//ENDER</span>
            </div>

            <p className="mt-1.5 text-sm font-medium text-muted-foreground text-white">Software Developer</p>

            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-muted-foreground/80 text-white">
              Building innovative solutions for a better tomorrow —<br className="hidden sm:inline" />{" "}
              one line of code at a time.
            </p>

            <div className="my-5 h-0.5 w-10 rounded-full bg-accent" />

            <p className="font-mono text-[0.65rem] sm:text-xs tracking-[0.25em] text-muted-foreground/60 uppercase text-white">
              STAY CURIOUS &nbsp;·&nbsp; KEEP BUILDING &nbsp;·&nbsp; MAKE AN IMPACT
            </p>
          </div>

          {/* Right Block */}
          <div className="flex items-center justify-center lg:justify-end gap-5 sm:gap-6">
            <div className="relative rotate-[-6deg] text-right font-['Caveat',cursive] leading-none">
              <p className="text-xl sm:text-2xl font-bold text-muted-foreground/70">Good</p>
              <p className="text-xl sm:text-2xl font-bold text-muted-foreground/70">Code</p>
              <p className="text-xl sm:text-2xl font-bold text-muted-foreground/70">Brighter</p>
              <p className="text-xl sm:text-2xl font-bold text-muted-foreground/70">Tomorrow</p>
              <svg
                className="mt-1 w-28 text-muted-foreground/50 ml-auto"
                viewBox="0 0 120 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8C30 3 80 11 117 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="grid grid-cols-5 gap-4 opacity-50" aria-hidden>
              {Array.from({ length: 40 }).map((_, i) => {
                const isAccent = i === 17 || i === 21 || i === 22;
                return (
                  <span
                    key={i}
                    className={`size-1 rounded-full ${isAccent ? "bg-accent shadow-[0_0_6px_var(--accent)]" : "bg-muted-foreground/40"
                      }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="relative my-8 w-full border-t border-border/30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-10 rounded-full bg-accent" />
        </div>

        {/* Bottom Bar */}
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground/70 text-white">
          <div className="text-center sm:text-left space-y-1">
            <p>© {new Date().getFullYear()} Surender Kumar Mahawar. All rights reserved.</p>
            <p className="text-muted-foreground/50 text-white">Built with React &amp; Tailwind CSS.</p>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-1.5 font-medium text-white">
            <Heart className="size-3.5 fill-accent text-accent" />
            <span>Build &nbsp;·&nbsp; Learn &nbsp;·&nbsp; Create &nbsp;·&nbsp; Impact</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
