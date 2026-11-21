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

  return <main className="detail-page">
    <div className="detail-wrap">
      <Link className="back-link" href="/">← Back to portfolio</Link>
      <p className="kicker">PROJECT CASE STUDY / {project.type.toUpperCase()}</p>
      <h1>{project.title}</h1>
      <p className="detail-lead">{project.summary}</p>
      <div className="detail-status">{project.status}</div>
      <h2>Technology</h2>
      <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      {project.sections.map(([heading, body]) => <section className="detail-section" key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
      <div className="detail-footer"><p>More technical evidence and verified implementation details will be added as the case study is completed.</p><Link className="button primary" href="/">Return home ↗</Link></div>
    </div>
  </main>;
}
