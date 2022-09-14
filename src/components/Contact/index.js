import React from "react";
//{ useState }
// import { validateEmail } from "../../utils/helpers";
// import { Row, Col } from "react-bootstrap";
// import Resume from '../../assets/images "TYPE THE RESUME HERE".pdf"

function ContactForm() {
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

  return (
    <section>
      <h1 style={{ textAlign: "center" }}> Contact Me</h1>
      <center>
        <div>
          <a href="https://github.com/BenYeung4">
            <img
              src="https://img.icons8.com/sf-regular/344/github.png"
              alt="github-logo"
              className="icon is-64x64 mx-3"
            />
          </a>
          <a href="https://www.linkedin.com/in/benjaminyeung/">
            <img
              src="https://img.icons8.com/color/344/linkedin-circled--v1.png"
              alt="linkedin-logo"
              className="icon is-64x64 mx-3"
            />
          </a>
          <a href="mailto:byeungis@gmail.com">
            <img
              src="https://img.icons8.com/color/344/gmail-new.png"
              alt="mail-logo"
              className="icon is-64x64 mx-3"
            />
          </a>
        </div>
      </center>

      <h1 style={{ textAlign: "center" }}>
        Click above icons to send me a message!
      </h1>
    </section>
  );
}

export default ContactForm;

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
