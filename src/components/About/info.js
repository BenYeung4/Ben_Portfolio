import React from "react";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">
          Full Slack Developer 💻 LO Assistant 🏠 Commercial Loan Analyst 🏢
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt-2 about__icon"></i>
        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">New York City, USA🍕 </span>
      </div>

      <div className="about__box">
        <i className="bx bx-image-add about__icon"></i>
        <h3 className="about__title">Activities</h3>
        <span className="about__subtitle">
          Bunny Owner 🐇 Weight Lifter 🏋🏻 Cuisine Explorer 🍱 Board Game Lover
          🎲
        </span>
      </div>
    </div>
  );
}

export default Info;
