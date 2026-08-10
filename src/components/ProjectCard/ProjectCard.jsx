import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tech.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.live}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
