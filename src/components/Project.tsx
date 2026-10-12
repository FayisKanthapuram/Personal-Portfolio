import { projects } from "@/data/portfolio";
import ProjectVisual from "./ProjectVisual";
export default function Project({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <article className={`project project-${project.id}`} id={project.id}>
      <ProjectVisual kind={project.id} />
      <div className="project-copy">
        <div className="eyebrow">
          <span className="project-number">{project.number}</span>
          {project.category}
        </div>
        <h3>{project.name}</h3>
        <p className="project-headline">{project.headline}</p>
        <p className="muted">{project.description}</p>
        <ul className="stack" aria-label="Technologies">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a
            className="text-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} source on GitHub`}
          >
            View source <span aria-hidden="true">↗</span>
          </a>
          {project.live && (
            <a
              className="text-link"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} site`}
            >
              Visit site <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
        <details className="case-study">
          <summary>
            {project.detail}
            <span className="expand-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="case-body">
            <h4>The problem</h4>
            <p>{project.problem}</p>
            <h4>What I built</h4>
            <p>{project.implementation}</p>
            <h4>An engineering detail</h4>
            <p>{project.decision}</p>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </article>
  );
}
