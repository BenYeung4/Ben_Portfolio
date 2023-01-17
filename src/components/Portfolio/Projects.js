import React from "react";
// import projects from "../../projects.json";

import { projectsData } from "./data";
import { projectsNav } from "./data";
import WorkItems from "./WorkItems";

function Projects() {
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span className="work__item" key={index}>
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
