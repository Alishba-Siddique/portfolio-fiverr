import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Other Achievement</span>

      <div className="portfolio__container container grid">
        <div className="portfolio__content">
          <div>
            <i className="uil uil-web-grid portfolio__icon"></i>
            <h3 className="portfolio__title">
              Voluntary <br /> Project
            </h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">Voluntary Project</h3>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Implementation of Moore Finite State Machine to design
                    Traffic light signal using TI ARM microcontroller, Keil
                    µVision and external hardware
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Design of Security Alarm System using LEDs and Switches.
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Internet of Things: Communication of ARM microcontroller
                    with a weather server using a Wi-Fi booster pack.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-award portfolio__icon"></i>
            <h3 className="portfolio__title">
              PATENTS/INVENTION <br /> DISCLOSURE
            </h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

           <div
            className={
              toggleState === 2
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)}  className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">
                PATENTS/INVENTION DISCLOSURE
              </h3>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Internship/Thesis at BASF led to a patent/invention
                    disclosure of a software for Industry 4.0, standard
                    procedure to file the patent is yet to be done.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-award-alt portfolio__icon"></i>
            <h3 className="portfolio__title">
              ONLINE <br /> CERTIFICATIONS
            </h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

           <div
            className={
              toggleState === 3
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)}  className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">ONLINE CERTIFICATIONS</h3>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Embedded Systems - Shape The World: Microcontroller
                    Input/output (a course of study oﬀered by UTAustinX, an
                    online learning initiative of University of Texas System
                    through edX).
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    MATLAB Onramp (self-paced online training)
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Diploma in C programming
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Fundamentals of Web Development
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Python A-Z for Data Science
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Mendix rapid developer
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portfolio__content">
          <div>
            <i className="uil uil-smile portfolio__icon"></i>
            <h3 className="portfolio__title">
              SOCIAL <br /> ENGAGEMENT
            </h3>
          </div>

          <span className="portfolio__button" onClick={() => toggleTab(4)}>
            View More
            <i className="uil uil-arrow-right portfolio__button-icon"></i>
          </span>

           <div
            className={
              toggleState === 4
                ? 'portfolio__modal active-modal'
                : 'portfolio__modal'
            }
          >
            <div className="portfolio__modal-content">
              <i onClick={() => toggleTab(0)}  className="uil uil-times portfolio__modal-close"></i>

              <h3 className="portfolio__modal-title">SOCIAL ENGAGEMENT</h3>

              <ul className="portfolio__modal-portfolio grid">
                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Trained different groups of around 50 students for exam
                    preparation in Pakistan at college level.
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Consulting students to apply for study abroad by writing on
                    various blogs and social media platforms.
                  </p>
                </li>

                <li className="portfolio__modal-service">
                  <i className="uil uil-check-circle portfolio__modal-icon"></i>
                  <p className="portfolio__modal-info">
                    Ran a small business of printed mugs based on
                    Entrepreneurship project during BSc.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
