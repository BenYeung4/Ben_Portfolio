import React from "react";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://img.icons8.com/fluency/48/null/node-js.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/ios/48/null/express-js.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Express Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/graphql.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Graphql</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/mongodb.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/mysql-logo.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              src="https://img.icons8.com/color/48/null/heroku.png"
              alt="icon"
            />

            <div>
              <h3 className="skills__name">Heroku</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
