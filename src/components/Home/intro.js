import React from "react";

function Intro() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Benjamin Yeung
        <picture>
          <source
            srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
            alt="👋"
            width="32"
            height="32"
          />
        </picture>
      </h1>
      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
        Recently completed the Full Stack - Software Developer program at
        Columbia University. Currently on the search for more experience!
      </p>
      <a href="#contact" className="button button--flex">
        Come say hi to me 🙋🏻‍♂️
      </a>
    </div>
  );
}

export default Intro;
