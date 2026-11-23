import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const isProfessional = project.category === "professional";

  return (
    <main className="detail-page">
      <div className="detail-wrap">
        <Link className="back-link" href="/#projects">
          ← Back to projects
        </Link>
        <p className="kicker">
          {isProfessional
            ? "PROFESSIONAL EXPERIENCE PROJECT / VCODE WONDERS"
            : `PROJECT CASE STUDY / ${project.type.toUpperCase()}`}
        </p>
        <h1>{project.title}</h1>
        <p className="detail-lead">{project.summary}</p>
        {project.note ? <div className="detail-status">{project.note}</div> : null}

        <section className="detail-section">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section className="detail-section">
          <h2>Problem Statement</h2>
          <p>{project.problemStatement}</p>
        </section>

        <section className="detail-section">
          <h2>My Contribution</h2>
          <ul className="detail-list">
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Tech Stack</h2>
          <div className="tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2>Key Features</h2>
          <ul className="detail-list">
            {project.keyFeatures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Challenges &amp; Solutions</h2>
          <div className="challenge-list">
            {project.challenges.map((item) => (
              <div className="challenge-item" key={item.challenge}>
                <p>
                  <strong>Challenge:</strong> {item.challenge}
                </p>
                <p>
                  <strong>Solution:</strong> {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="detail-footer">
          <p>
            {isProfessional
              ? "Developed as part of my professional experience at VCode Wonders. Contributions listed here reflect work I personally performed."
              : "Additional implementation details may be expanded as the project documentation evolves."}
          </p>
          <Link className="button primary" href="/#projects">
            Return to projects ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
