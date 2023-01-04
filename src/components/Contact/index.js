import React, { useRef } from "react";
//email SMTP Server, should look for a better one
import emailjs from "@emailjs/browser";
import "./contact.css";

//{ useState }
// import { validateEmail } from "../../utils/helpers";
// import { Row, Col } from "react-bootstrap";
function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_Key,
        process.env.REACT_APP_TEMPLATE_Key,
        e.target,
        process.env.REACT_APP_EMAIL_Key
      )
      .then(
        (result) => {
          alert("Your message has been sent", result);
          console.log(result.text);
        },
        (error) => {
          console.log("Error", error);
        }
      );
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Lets Grab a Coffee</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">My Contact Info</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <img
                  src="https://img.icons8.com/fluency/48/null/apple-mail.png"
                  alt="contact-icon"
                />
              </i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">byeungis@gmail.com</span>

              <a href="mailto:byeungis@gmail.com" className="contact__button">
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <img
                  src="https://img.icons8.com/color/48/null/linkedin-2--v1.png"
                  alt="contact-icon"
                />
              </i>

              <h3 className="contact__card-title">Linkedin</h3>

              <a
                href="https://www.linkedin.com/in/benjaminyeung/"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon">
                <img
                  src="https://img.icons8.com/color/48/null/github--v1.png"
                  alt="contact-icon"
                />
              </i>

              <h3 className="contact__card-title">Github</h3>

              <a
                href="https://github.com/BenYeung4"
                target="_blank"
                rel="noreferrer"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Message Me</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter Name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Enter Email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Subject</label>
              <textarea
                name="subject"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Subject"
              />
            </div>
            <button className="button button--flex">
              Write me a Message &nbsp;
              <i className="uil uil-message"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

//manage form data, empty out the initialize values
// const [formState, setFormState] = useState({
//   name: "",
//   email: "",
//   message: "",
// });
//deconstructing the formState object into it's named properties
// const { name, email, message } = formState;

//error message
// const [errorMessage, setErrorMessage] = useState("");

// function handleChange(e) {
//   if (e.target.name === "email") {
//     const isValid = validateEmail(e.target.value);

//     if (!isValid) {
//       setErrorMessage("Your email is invalid");
//     } else {
//       setErrorMessage("");
//     }
//   } else {
//     if (!e.target.value.length) {
//       setErrorMessage(`${e.target.name} is required.`);
//     } else {
//       setErrorMessage("");
//     }
//   }
//   //setFormState is updating formState for the property
//   if (!errorMessage) {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   }
//   console.log("errorMessage", errorMessage);
// }

// //form submit
// function handleSubmit(e) {
//   e.preventDefault();
//   console.log(formState);
// }

/* <h1 style={{ textAlign: "center", marginTop: "30px" }}> Contact Info</h1>
<center>
  <div>
    <a href="https://github.com/BenYeung4">
      <img
        src="https://img.icons8.com/sf-regular/344/github.png"
        alt="github-logo"
        className="icon"
      />
    </a>
    <a href="https://www.linkedin.com/in/benjaminyeung/">
      <img
        src="https://img.icons8.com/color/344/linkedin-circled--v1.png"
        alt="linkedin-logo"
        className="icon"
      />
    </a>
    <a href="mailto:byeungis@gmail.com">
      <img
        src="https://img.icons8.com/color/344/gmail-new.png"
        alt="mail-logo"
        className="icon"
      />
    </a>
  </div>
</center>

<div className="contactInfo" style={{ textAlign: "center" }}>
  <h1>Click above icons to send me a message!</h1>
  <br />
  <br />
  <h3>
    Open to entry-level opportunities in the following rolse(but not
    limited to)
  </h3>
  <br />
  <ul
    className="jobs"
    style={{
      fontWeight: "bold",
      fontFamily: "Helvetica",
      fontSize: "25px",
      liststyle: "none",
      listStyleType: "none",
    }}
  >
    <li>Junior Developer</li>
    <li>Front-End Developer</li>
    <li>Back-End Developer</li>
    <li>Junior Software Engineer</li>
    <li>Support Engineer</li>
  </ul>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
</section> */

// return (
//     <section>
//       <h1 data-testid="h1tag" className="contact">
//         My Contact
//       </h1>

//       <div className="contact-icons">
//         <Row>
//           <Col lg={3} md={12}>
//             <a href="https://github.com/BenYeung4">
//               <img
//                 src="https://img.icons8.com/clouds/344/github.png"
//                 alt="github-logo"
//                 class="icon"
//               />
//             </a>
//           </Col>

//           <Col lg={3} md={12}>
//             <a href="https://www.linkedin.com/in/benjaminyeung/">
//               <img
//                 src="https://img.icons8.com/clouds/344/linkedin.png"
//                 alt="linkedin-logo"
//                 class="icon"
//               />
//             </a>
//           </Col>

//           <Col lg={3} md={12}>
//             <a href="mailto:byeungis@gmail.com">
//               <img
//                 src="https://img.icons8.com/clouds/344/apple-mail.png"
//                 alt="email-logo"
//                 class="icon"
//               />
//             </a>
//             <p class="icon-text">Email</p>
//           </Col>

//           <Col lg={3} md={12}>
//             {/* <a href={Resume} download>
//               <img
//                 src="https://img.icons8.com/clouds/344/resume.png"
//                 alt="resume"
//               />
//             </a> */}
//             <p class="icon-text">resume</p>
//           </Col>
//         </Row>
//       </div>

//       <div class="resume-container">
//         <Row>
//           <Col lg={4} md={12}>
//             <h2 class="resume">Front-End</h2>
//             <ul>
//               <li>HTML</li>
//               <li>CSS</li>
//               <li>JQuery</li>
//               <li>React.js</li>
//               <li>Framework(BootStrap)</li>
//               <li>Responsive Web Design</li>
//             </ul>
//           </Col>

//           <Col lg={4} md={12}>
//             <h2 class="resume">Back-End</h2>
//             <ul>
//               <li>Node.js</li>
//               <li>Express.js</li>
//               <li>MySQL (mysql lite3, mysql2)</li>
//               <li>NoSQL (MongoDB, Mongoose)</li>
//               <li>API (web, third-party, RESTful, server-side)</li>
//               <li>Templating language (Handlebars)</li>
//             </ul>
//           </Col>

//           <Col lg={4} md={12}>
//             <h2 class="education">Education</h2>
//             <p>
//               <span className="school-Name">
//                 Columbia University Engineering Boot Camp
//               </span>
//               <br></br>
//               Full Stack Boot Camp - Certification
//               <br></br>
//               <br></br>
//               <span className="school-name">PENN STATE UNIVERSITY</span>
//               <br></br>
//               ECONOMICS - BACHOLORS of SCIENCE
//             </p>
//           </Col>
//         </Row>
//       </div>
//     </section>
//   );

// {/* <form id="contact-form" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             defaultValue={name}
//             onBlur={handleChange}
//             name="name"
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email address:</label>
//           <input
//             type="email"
//             defaultValue={email}
//             name="email"
//             onBlur={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             name="message"
//             defaultValue={message}
//             onBlur={handleChange}
//             rows="5"
//           />
//         </div>
//         {/*the errorMessage below is incase the errorMessage contains an error.  the && operator, is being used as a short circuit.  if the first valeu resovles to true, the second expression is evaluated, this displays the error message on the front-end */}
//   {errorMessage && (
//     <div>
//       <p className="error-text">{errorMessage}</p>
//     </div>
//   )}
//   <button type="submit">Submit</button>
// </form> */}
