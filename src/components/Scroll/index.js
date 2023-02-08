import React from "react";
import "./scroll.css";

function Scroll() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scroll");
    //if scroll viewport is higher than 560, display the scroll
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="/#" className="scroll">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default Scroll;
