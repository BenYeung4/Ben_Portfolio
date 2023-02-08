import React from "react";
// import projects from "../../projects.json";

import projects from "../../projects.json";

import WorkItems from "./WorkItems";

function Projects() {
  return (
    <div className="work__container container grid">
      {projects.map((item) => {
        return <WorkItems item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Projects;
