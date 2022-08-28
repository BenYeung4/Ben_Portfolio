import React, { useState } from "react";

import Navigation from "../Navigation";
import About from "../About";
import Contact from "../Contact";

function Portfolio() {
  //current page
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About></About>;
      case "contact":
        return <Contact></Contact>;
      //   case "portfolio":
      //     return <Projects></Projects>;
      //   case "resume":
      //     return <Resume></Resume>;
      default:
        return <About></About>;
    }
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>{renderPage()}</div>
    </div>
  );
}

export default Portfolio;
