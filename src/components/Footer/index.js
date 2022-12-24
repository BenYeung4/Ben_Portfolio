import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ben</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#Portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="randomlink" className="footer__link">
              random subject for now
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="mailto:byeungis@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-envelope-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/benjaminyeung/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://github.com/BenYeung4"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          (&copy;)2022 by Benjamin Yeung. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;

/*
center>
        <h4>(&copy;) 2022 by Benjamin Yeung</h4>
      </center>

<div className="page-footer" id="footer">
        <a href="https://github.com/BenYeung4">
          <img
            src="https://img.icons8.com/clouds/344/github.png"
            alt="github-logo"
            class="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/benjaminyeung/">
          <img
            src="https://img.icons8.com/clouds/344/linkedin.png"
            alt="linkedin-logo"
            class="icon"
          />
        </a>
        <a href="https://stackexchange.com/users/26169636/ben?tab=accounts">
          <img
            src="https://img.icons8.com/clouds/344/stack.png"
            alt="Stack-OverFlow-logo"
            class="icon"
          />
        </a>
  </div>*/
