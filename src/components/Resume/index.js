import React from "react";
import { Row, Col } from "react-bootstrap";

//my resume
import Self from "../../assets/images/Resume.pdf";

function Resume() {
  return (
    <>
      <h1 className="resume"> RESUME</h1>
      <div class="resume-intro">
        <Row>
          <Col lg={8} md={12}>
            Full Stack Web Developer, poesses techinical skills within the MERN
            stack. Continuously learning and adapoting for the better future.
          </Col>
        </Row>
      </div>

      <center>
        <Col lg={3} md={12} center>
          <a href={Self} download>
            <img
              src="https://img.icons8.com/clouds/344/resume.png"
              alt="self"
            />
          </a>
        </Col>
      </center>

      <div class="resume-container">
        <Row>
          <Col lg={4} md={12}>
            <h2 class="education">Education</h2>
            <p>
              <span className="school-Name">
                Columbia University Engineering Boot Camp
              </span>
              <br></br>
              Full Stack Boot Camp - Certification
              <br></br>
              <br></br>
              <span className="school-name">PENN STATE UNIVERSITY</span>
              <br></br>
              ECONOMICS - BACHOLORS of SCIENCE
            </p>
          </Col>

          <Col lg={4} md={12}>
            <h2 class="resume">Front-End</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>React.js</li>
              <li>Framework(BootStrap)</li>
              <li>Responsive Web Design</li>
            </ul>
          </Col>
          <Col lg={4} md={12}>
            <h2 class="resume">Back-End</h2>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL (mysql lite3, mysql2)</li>
              <li>NoSQL (MongoDB, Mongoose)</li>
              <li>API (web, third-party, RESTful, server-side)</li>
              <li>Templating language (Handlebars)</li>
            </ul>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Resume;
