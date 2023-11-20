import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Tahir</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Experience
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="tel:+4917643822400"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-phone"></i>
          </a>
          <a
            href="https://maps.app.goo.gl/JwwKd9CJM8kQMtQ87"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-map-marker"></i>
          </a>
          <a
            href="mailto:tahir.waheed@conti.de"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-envelope"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Tahir Waheed. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
