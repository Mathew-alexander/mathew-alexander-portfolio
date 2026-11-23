import { otherProjects, professionalProjects, projects } from "@/data/projects";
import Link from "next/link";

function ProjectCard({
  project,
  index,
  total,
  featured = false,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  featured?: boolean;
}) {
  const n = String(index).padStart(2, "0");
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-top">
        <span>
          {n} / {String(total).padStart(2, "0")}
        </span>
        <span>{project.type}</span>
      </div>
      <div className="project-art">
        <div className="art-grid" />
        <div className="art-symbol">{featured ? "◈" : n}</div>
        <span className="art-caption">MATHEW ALEXANDER / ENGINEERING</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">
        {project.stack.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {/* <a className="text-link" href={`/projects/${project.slug}/`}>
        Read case study <b>↗</b>
      </a> */}
      <Link className="text-link" href={`/projects/${project.slug}/`} target="_blank">
        Read case study <b>↗</b>
      </Link>
    </article>
  );
}

export default function Home() {
  const total = projects.length;

  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#">
          Mathew Alexander
        </a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">
          Let’s talk ↗
        </a>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <i /> OPEN TO DUBAI OPPORTUNITIES
          </div>
          <p className="kicker">AI ENGINEER · GENERATIVE AI · BACKEND SYSTEMS</p>
          <h1>
            Building intelligent
            <br />
            <em>systems that work.</em>
          </h1>
          <p className="lead">
            I’m Mathew Alexander — an AI Engineer focused on building AI-powered applications,
            agentic workflows and scalable backend systems with Python and modern LLM technologies.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">
              Explore projects <span>↗</span>
            </a>
            <a className="button secondary" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-meta">
            <span>BASED IN KERALA, INDIA</span>
            <span>OPEN TO RELOCATION · DUBAI, UAE</span>
          </div>
        </div>
        <div className="orbital" aria-label="Decorative abstract AI network illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core">
            <b>AI</b>
            <small>ENGINEERING</small>
          </div>
          <i className="node node-a" />
          <i className="node node-b" />
          <i className="node node-c" />
          <span className="orbit-label label-a">LLMs</span>
          <span className="orbit-label label-b">SYSTEMS</span>
          <span className="orbit-label label-c">AGENTS</span>
        </div>
      </section>

      <section className="ticker">
        <div>
          PYTHON <b>✳</b> FASTAPI <b>✳</b> GENERATIVE AI <b>✳</b> AGENTIC WORKFLOWS <b>✳</b>{" "}
          MICROSERVICES <b>✳</b> PYTHON <b>✳</b> FASTAPI <b>✳</b> GENERATIVE AI <b>✳</b>
        </div>
      </section>

      <section id="about" className="section wrap">
        <div className="section-head">
          <p className="kicker">01 / ABOUT</p>
          <h2>
            Engineering at the
            <br />
            <em>intersection of AI &amp; software.</em>
          </h2>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            I build practical AI systems — from model integrations and generation pipelines to APIs
            and asynchronous backend services.
          </p>
          <div className="about-detail">
            <p>
              My experience includes AI-powered backend services, LLM integrations with Gemini and
              NVIDIA NIM, prompt engineering workflows, machine-learning APIs and FastAPI-based
              systems backed by MongoDB and ChromaDB.
            </p>
            <p>
              I enjoy turning complex requirements into structured, reliable software with clear
              architecture and maintainable implementation.
            </p>
            <div className="stats">
              <div>
                <b>{String(total).padStart(2, "0")}</b>
                <span>PROJECTS DOCUMENTED</span>
              </div>
              <div>
                <b>08.2</b>
                <span>DEGREE CGPA / 10</span>
              </div>
              <div>
                <b>2025–26</b>
                <span>AI ENGINEERING ROLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="wrap">
          <div className="section-head">
            <p className="kicker">02 / SELECTED WORK</p>
            <h2>
              Projects with a
              <br />
              <em>purpose behind them.</em>
            </h2>
            <p className="section-note">
              Professional work is presented with clear ownership: what the system does, the problem
              it solves, my contributions, tech stack, features and challenges — without revealing
              confidential company information.
            </p>
          </div>

          <div className="project-group">
            <div className="project-group-head">
              <p className="kicker">PROFESSIONAL EXPERIENCE PROJECTS</p>
              <p className="project-group-note">
                Projects developed as part of my professional experience at VCode Wonders.
              </p>
            </div>
            <div className="project-grid">
              {professionalProjects.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={i + 1}
                  total={total}
                  featured={i === 0}
                />
              ))}
            </div>
          </div>

          <div className="project-group">
            <div className="project-group-head">
              <p className="kicker">PERSONAL &amp; ACADEMIC PROJECTS</p>
              <p className="project-group-note">
                Independent and academic builds spanning generative AI, conversational systems and
                interpretable machine learning.
              </p>
            </div>
            <div className="project-grid">
              {otherProjects.map((project, i) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={professionalProjects.length + i + 1}
                  total={total}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section wrap">
        <div className="section-head">
          <p className="kicker">03 / EXPERIENCE</p>
          <h2>
            Building beyond
            <br />
            <em>the code.</em>
          </h2>
        </div>
        <div className="timeline">
          <div className="timeline-dot" />
          <div>
            <p className="kicker">AUG 2025 — SEP 2026</p>
            <h3>AI Engineer · VCode Wonders</h3>
            <p>
              Developed AI-powered backend services and GenAI workflows using Python, FastAPI, Gemini,
              NVIDIA NIM, MongoDB and ChromaDB. Worked on REST APIs, prompt engineering, LLM
              integrations and practical machine-learning systems.
            </p>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-dot" />
          <div>
            <p className="kicker">DEC 2021 — JUN 2025</p>
            <h3>B.Tech Computer Science Engineering</h3>
            <p>Rajiv Gandhi College of Engineering and Technology · CGPA 8.2 / 10</p>
          </div>
        </div>
      </section>

      <section className="skills-band">
        <div className="wrap">
          <p className="kicker">04 / TOOLKIT</p>
          <div className="skill-list">
            <span>Python</span>
            <span>FastAPI</span>
            <span>Google Gemini</span>
            <span>NVIDIA NIM</span>
            <span>Prompt Engineering</span>
            <span>Generative AI</span>
            <span>LLM Integration</span>
            <span>MongoDB</span>
            <span>ChromaDB</span>
            <span>Scikit-learn</span>
            <span>REST APIs</span>
            <span>Docker</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section wrap contact">
        <p className="kicker">05 / CONTACT</p>
        <h2>
          Have a challenge
          <br />
          <em>worth building?</em>
        </h2>
        <p className="lead">
          I’m open to AI Engineer, Generative AI and Python Backend opportunities in Dubai and the
          wider UAE.
        </p>
        <div className="contact-links">
          <a href="mailto:mathewlissy777@gmail.com">mathewlissy777@gmail.com ↗</a>
          <a href="https://www.linkedin.com/in/mathew-alexander-92a964310/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://github.com/Mathew-alexander" target="_blank" rel="noreferrer">
            GitHub profile ↗
          </a>
        </div>
      </section>

      <footer className="footer wrap">
        <span>© 2026 MATHEW ALEXANDER</span>
        <span>DESIGNED &amp; BUILT WITH INTENT.</span>
      </footer>
    </main>
  );
}
