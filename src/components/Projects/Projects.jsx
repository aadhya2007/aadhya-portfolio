import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

import weatherImg from "../../assets/images/app.png";
import todoImg from "../../assets/images/todo.png";
import githubImg from "../../assets/images/github-viewer.png";

const projects = [
  {
    id: 1,
    title: "Weather App",
    image: weatherImg,
    description:
      "Real-time weather dashboard using the OpenWeather API.",
    tech: ["React", "API"],
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "To-Do List App",
    image: todoImg,
    description:
      "Task manager with add, delete, and complete features using localStorage.",
    tech: ["JavaScript", "LocalStorage"],
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "GitHub Profile Viewer",
    image: githubImg,
    description:
      "Search GitHub users and view their repositories and profile.",
    tech: ["JavaScript", "API"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section id="project" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
