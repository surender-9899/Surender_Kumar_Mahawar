import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

const title = "Surender Kumar Mahawar — Software Developer";
const description =
  "Software Developer in New Delhi building scalable backends and full-stack web apps with Java, Spring Boot, Node.js, Express and React.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Surender Kumar Mahawar",
          jobTitle: "Software Developer",
          address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
          alumniOf: "Poornima University, Jaipur",
          knowsAbout: ["Java", "Spring Boot", "Node.js", "Express.js", "React", "SQL"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Certifications />
      <Contact />
    </main>
  );
}
