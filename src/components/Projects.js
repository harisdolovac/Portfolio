import React from "react";
import PROJECTS from "../data/projects";
import "../css/Project.css";

const Project = (props) => {
  const { title, image, description, link } = props.project;

  console.log(props);
  return (
    <div className="all_projects">
      <div className="wrapper_projects">
        <h3>{title}</h3>
        <a
          href={link}
          style={{ display: "table-cell" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="image_div">
            <img className="image_projects" src={image} alt="projects" />
          </div>
        </a>

        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {PROJECTS.map((project, i) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
