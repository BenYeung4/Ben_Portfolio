import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="mailto:byeungis@gmail.com"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-envelope"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/benjaminyeung/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/BenYeung4"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
}

export default Social;
