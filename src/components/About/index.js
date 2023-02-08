import React from "react";
import "./about.css";
import Info from "./info";

//import of images
import profilePhoto from "../../assets/images/secondary photo.jpg";

//resume
import Resume from "../../assets/images/Resume.pdf";

// import { Col } from "react-bootstrap";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={profilePhoto} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            A recent Full-Stack graduate, I have leveraged my past work
            experience in the Finance, Banking, and Mortgage industry, where I
            honed my problem-solving and teamwork skills, to excel in my new
            career as a full-stack developer. 👨‍🎓
            <br />
            <br />
            Making a career change can be a daunting task, but for me, it was an
            opportunity to pursue my passion for creative innovative products.
            After my past work experinece, I realized that my true calling was
            in the field of technologies and software development. 💼
            <br />
            <br />I am eager to take on new challenges and apply my skills to
            real-world projects and take on new challenges, especially excited
            for the opportunity to work with you. Let's create something amazing
            together! 👨‍💻
          </p>

          <a download="" href={Resume} className="button button--flex">
            Download Resume 📄
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

/* <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          <center>
            <img
              src={profilePhoto}
              className="selfie"
              alt="ben-profile"
              style={{
                width: 375,
                height: 425,
                borderRadius: "20%",
                overflow: "hidden",
                marginTop: "25px",
              }}
            />
          </center>

          <p class="name"> Benjamin Yeung</p>
          <h2
            class="career"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Full Stack Web Developer 💻
          </h2>
          <br></br>
          <p>
            Hi, nice to meet you! Please take a look around!✌
            <br></br>
            <br></br>
            I'm a Full Stack Developer with an extensive background in mortgage
            industry. 🏡
            <br></br>
            <br></br>
            After extensive period of guiding families achieve their dream
            homes, I've transitioned to Full-Stack with substantial experience
            in JS, React, Node.js, HTML, Git, Express, SQL, Heroku, and many
            other web technologies.
            <br></br>
            <br></br>
            This door provides me the sense of achievement I've never
            experienced in my life. Full-Stack development provides me the
            creativity I am interested in and logic problem solving skills I've
            developed from my banking experiences. I’m currently seeking a full
            stack position where I can continue to develop and ease the
            interface for the users. 👨‍💻
            <br></br>
            <br></br>
            During my spare time I enjoy boulder climbing 🧗‍♂️, tennis 🎾, lifting
            weights 🏋, cooking 🍳 (especially food photography) 📷, anime/manga
            ⛩️, kdrama 🎭, games 🎮🎲, and horror movies 👻. I’m always seeking
            for new challenges, currently leveling up my development. Let’s
            connect!
            <br></br>
            <br></br>
          </p>
        </Col>
      </div>
    </section> */
