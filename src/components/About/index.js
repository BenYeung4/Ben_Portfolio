import React from "react";

//import of images
import profilePhoto from "../../assets/images/profile.jpg";

import { Col } from "react-bootstrap";

function About() {
  return (
    <section className="title">
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
            Full Stack Web Developer š»
          </h2>
          <br></br>
          <p>
            Hi, nice to meet you! Please take a look around!ā
            <br></br>
            <br></br>
            I'm a Full Stack Developer with an extensive background in mortgage
            industry. š”
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
            developed from my banking experiences. Iām currently seeking a full
            stack position where I can continue to develop and ease the
            interface for the users. šØāš»
            <br></br>
            <br></br>
            During my spare time I enjoy boulder climbing š§āāļø, tennis š¾, lifting
            weights š, cooking š³ (especially food photography) š·, anime/manga
            ā©ļø, kdrama š­, games š®š², and horror movies š». Iām always seeking
            for new challenges, currently leveling up my development. Letās
            connect!
            <br></br>
            <br></br>
          </p>
        </Col>
      </div>
    </section>
  );
}

export default About;
