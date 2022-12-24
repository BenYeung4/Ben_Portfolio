import React from "react";

function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/html-5--v1.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/css3.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advance</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/javascript--v1.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/bootstrap.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/react-native.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">JQuery</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontend;
