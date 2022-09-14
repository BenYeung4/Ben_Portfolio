import React from "react";

import projects from "../../projects.json";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <p className="project-title" style={{ textAlign: "center" }}>
              {props.name}
            </p>
          </li>
          <li>
            <p className="project-description" style={{ textAlign: "center" }}>
              {props.description}
            </p>
          </li>
          <li>
            <div className="project-icons">
              <a href={props.github}>
                <img
                  src="https://img.icons8.com/plasticine/344/github.png"
                  alt="github-icon"
                  id="port-icon"
                />
              </a>
              <a href={props.deployedapp}>
                <img
                  src="https://img.icons8.com/external-filled-outline-wichaiwi/344/external-application-work-from-home-filled-outline-wichaiwi.png"
                  alt="app-icon"
                  id="port-icon"
                />
              </a>
            </div>
          </li>
          <li style={{ textAlign: "center" }}>{props.skills} </li>
        </ul>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects() {
  return (
    <>
      <div className="project">
        <h1 className="title" style={{ textAlign: "center" }}>
          Full Stack Projects
        </h1>
      </div>

      <Wrapper>
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            key={project.id}
            image={project.image}
            github={project.github}
            deployedapp={project.deployedapp}
            skills={project.skills}
            description={project.description}
          />
        ))}
      </Wrapper>
    </>
  );
}

export default Projects;
