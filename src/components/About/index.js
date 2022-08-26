import React from "react";

//import of images
//import profilePhoto from "../../Assets/images/profile.jpeg";

function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
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
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend.
          Morbi tristique justo vel turpis sollicitudin, et tristique velit
          convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed
          orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet
          ultricies mollis. In hac habitasse platea dictumst.
        </p>
      </div>
    </section>
  );
}

export default About;
