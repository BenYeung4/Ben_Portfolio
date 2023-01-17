import React from "react";

function WorkItems({ item }) {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title" style={{ textAlign: "center" }}>
        {item.name}
      </h3>
      <h9 className="work__description">{item.description}</h9>
      <h5 className="work__skills">{item.skills}</h5>
      <div className="portfolio_icon">
        <a
          href={item.github}
          target="_blank"
          rel="noreferrer"
          className="github__icon"
        >
          <i class="uil uil-github-alt"></i>
        </a>
        <a
          href={item.deployedapp}
          target="_blank"
          rel="noreferrer"
          className="deployproject_icon"
        >
          <i class="uil uil-location-arrow"></i>
        </a>
      </div>
    </div>
  );
}

export default WorkItems;
