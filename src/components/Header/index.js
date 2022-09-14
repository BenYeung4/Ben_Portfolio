import React, { useState } from "react";
import Project from "../Project";
import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";

function Portfolio() {
  //current page
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About Me":
        return <About></About>;
      case "Contact":
        return <Contact></Contact>;
      case "Portfolio":
        return <Project></Project>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <header>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <div>{renderPage()}</div>
    </div>
  );
}

export default Portfolio;
