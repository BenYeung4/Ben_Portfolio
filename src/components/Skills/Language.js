import React from "react";

function Language() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Programming Language</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/javascript--v1.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/python--v1.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/java-coffee-cup-logo--v1.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
