// Edit these links anytime — they're used across the site.
export const contact = {
  email: "surendermahawar2@gmail.com",
  phone: "+91 72890 91504",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  location: "New Delhi, India",
};

// Swap this file with your own photo (same path) or change the import in Hero.tsx.
export const heroImageAlt = "Surender Kumar Mahawar";

// Add / remove links freely — icons: github, linkedin, twitter, x, X, instagram, facebook
export type SocialIcon = "github" | "linkedin" | "twitter" | "x" | "X" | "instagram" | "facebook";

export interface SocialLink {
  name: string;
  icon: SocialIcon;
  href: string;
}

export const socials: SocialLink[] = [
  { name: "GitHub", icon: "github", href: "https://github.com/surender-9899" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/surender-kumar-mahawar-92b15022a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuTz5ImhLTf6LBboVrgBrqQ%3D%3D" },
  { name: "Twitter / X", icon: "x", href: "https://twitter.com/surende44176066" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/ig_surendermahawar/" },
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/surender.mahawar.338" },
];

export const openToOpportunities = {
  title: "Open to Opportunities",
  description:
    "I'm actively looking for Software / Java Developer positions and exciting projects. Let's connect and explore how we can work together!",
};

export const skillGroups = [
  {
    title: "Backend",
    items: [
      "Java",
      "Core Java / Java 8",
      "Spring",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Node.js",
      "Express.js",
      "JDBC",
      "Hibernate",
      "Spring Data JPA",
      "JWT",
      "OAuth2",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Responsive Web Design"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "SQL Server", "SQL", "Data JPA", "MongoDB"],
  },
  {
    title: "Tools & Deployment",
    items: [
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
      "Cursor",
      "AntiGravity",
      "Docker",
      "Render",
      "AWS Cloud",
      "Vercel",
      "WordPress",
    ],
  },
];

export const familiarWith = [
  "Microservice architecture",
  "Eureka",
  "API Gateway",
  "Feign Client",
  "Service discovery",
  "System design fundamentals",
];

export const experience = [
  {
    period: "Present",
    company: "IntLogBC",
    subtitle: "International Logistics Blockchain Consultancy",
    role: "Software Developer",
    description:
      "Contributing to web-based software solutions and applications, working across backend and frontend technologies.",
  },
  {
    period: "May 2026– july 2026",
    company: "AyanshTech Solutions",
    subtitle: "Noida Sec-62, Uttar Pradesh",
    role: "Web Developer Intern",
    description:
      "Gained practical experience in web development, frontend implementation, backend integration and building responsive web solutions.",
  },
  {
    period: "Jun 2024 – Aug 2024",
    company: "Celebal Technologies",
    subtitle: "Jaipur, Rajasthan",
    role: "SQL Developer Intern",
    description:
      "Worked with complex SQL queries and gained hands-on experience in database performance optimization.",
  },
];

export const projects = [
  {
    name: "AniTracker",
    tagline: "Watched Anime History Tracker",
    featured: true,
    description:
      "A full-stack application to manage and track watched anime history, with secure authentication and a React frontend backed by REST APIs.",
    highlights: [
      "JWT authentication with Spring Security",
      "User management & watch history",
      "In progress: watch-hour calculation and recommendations",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "PostgreSQL", "REST APIs"],
  },
  {
    name: "Quiz Microservices Application",
    tagline: "Microservices architecture",
    description:
      "A quiz application built with Spring Boot and a microservices architecture, exposing RESTful APIs with PostgreSQL for persistence.",
    highlights: ["Service-to-service REST communication", "Spring Data JPA persistence"],
    stack: ["Java", "Spring Boot", "Microservices", "Spring Data JPA", "PostgreSQL"],
  },
  {
    name: "Student Management System",
    tagline: "Spring Boot + React",
    description:
      "A full-stack student management system providing RESTful APIs and a modern React interface for managing student information.",
    highlights: ["CRUD operations over REST", "SQL Server database integration"],
    stack: ["Java", "Spring Boot", "React", "SQL Server", "REST APIs"],
  },
  {
    name: "Student Management System — Node.js",
    tagline: "In progress",
    description:
      "A Node.js and Express.js backend rebuild of the student management system, focused on routing, middleware and REST API design.",
    highlights: ["Express routing (GET / POST / PUT, dynamic :id)", "Controllers, middleware, error handling"],
    stack: ["Node.js", "Express.js", "SQL", "REST API"],
  },
];

export const services = [
  {
    title: "Backend Development",
    description: "Java, Spring Boot, Node.js and Express applications with a clean layered architecture.",
  },
  {
    title: "Full-Stack Development",
    description: "React frontends wired to REST APIs and SQL databases end to end.",
  },
  {
    title: "API Development",
    description: "RESTful APIs with authentication, authorization, JWT and validation.",
  },
  {
    title: "Database Development",
    description: "MySQL, PostgreSQL and SQL Server — schema design, queries and optimization.",
  },
  {
    title: "Web Development",
    description: "React, JavaScript and WordPress for responsive, content-driven websites.",
  },
  {
    title: "Deployment & DevOps",
    description: "Docker, cloud deployment (AWS, Render, Vercel), CI/CD and environment setup for reliable delivery.",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  status?: string;
}

export const certifications: Certification[] = [
  { title: "CS50x — Introduction to Computer Science", issuer: "Harvard University" },
  {
    title: "Java, Spring Framework 6, Spring Boot 3 and Spring AI",
    issuer: "Udemy",
    // status: "Current",
  },
  { title: "Developing Soft Skills and Personality", issuer: "NPTEL" },
  { title: "Problem Solving Through Programming in C", issuer: "NPTEL" },
];

export const strengths = [
  {
    no: "01",
    title: "Problem Solver",
    description: "Breaking complex problems into practical, maintainable solutions.",
  },
  {
    no: "02",
    title: "Full-Stack Mindset",
    description: "Comfortable working across backend, frontend, databases and APIs.",
  },
  {
    no: "03",
    title: "Continuous Learner",
    description: "Constantly expanding from Java/Spring into Node.js, React and modern web tech.",
  },
  {
    no: "04",
    title: "Clean Architecture",
    description: "Focused on readable, maintainable and scalable code.",
  },
];
