import React from "react";

//import of images
//import profilePhoto from "../../Assets/images/profile.jpeg";

import { Col } from "react-bootstrap";

function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          {/* <center>
          <img src={profilePhoto} className="selfie" alt="ben-profile" />
        </center> */}

          <p class="name"> Benjamin Yeung</p>
          <p class="career">Full Stack Web Developer</p>
          <h2 class="info">Who am I</h2>
          <p>
            Hi, I'm Ben, nice to meet you! Please take a look aruond!
            <br></br>
            <br></br>
            I'm a web developer and software engineer with an extensive
            background in mortgage industry.
            <br></br>
            <br></br>
            After extensive period of guiding families achieve their dream
            homes, I've transitioned to a full-stack software engineer with
            substantial experience in JS, React, Node.js, HTML, Git, Express,
            SQL, Heroku, and many other web technologies.
            <br></br>
            <br></br>
            This door provides me the sense of achievement I've never
            experienced in my life. Full-stack software development provides me
            the creativity I am interested in and logic problem solving skills
            I've developed from my banking experiences. I’m currently seeking a
            full stack position where I can continue to develop and ease the
            interface for the users.
            <br></br>
            <br></br>
            During my spare time I enjoy boulder climbing, tennis, lifting
            weights, cooking (especially food photography), anime, manga, games,
            and horror movies. I’m always seeking for new challenges, currently
            leveling up my JavaScript and app development. Let’s connect!
            <br></br>
            <br></br>
          </p>
        </Col>
      </div>
    </section>
  );
}

export default About;
