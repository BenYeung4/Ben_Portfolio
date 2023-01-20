import React from "react";

function Intro() {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Benjamin Yeung
        <picture className="home__hand">
          <source
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fb/512.gif"
            alt="👋"
            width="45"
            height="45"
          />
        </picture>
      </h1>
      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
        Welcome to my portfolio! With a passion for creating innovative and
        user-friendly web and mobile applications, I am excited to offer my
        technical skills and professional experience to bring your vision to
        life.👀
      </p>
      <a href="#contact" className="button button--flex">
        Come say hi to me &nbsp;🙋🏻‍♂️💬
      </a>
    </div>
  );
}

export default Intro;
