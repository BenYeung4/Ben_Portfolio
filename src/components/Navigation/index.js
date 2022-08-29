import React from "react";

function Navigation(props) {
  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];
  return (
    <ul className="nav">
      <h2>
        <a data-testid="link" href="/" className="home">
          Benjamin Yeung
        </a>
      </h2>
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
