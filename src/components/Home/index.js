import React from "react";
import "./home.css";
import Social from "./social";
import Intro from "./intro";
import ScrollDown from "./scrolldown";

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Intro />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
