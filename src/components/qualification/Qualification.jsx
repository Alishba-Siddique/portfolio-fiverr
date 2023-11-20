import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i
              className="uil uil-graduation-cap
            qualification__icon"
            ></i>{' '}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i
              className="uil uil-briefcase-alt
            qualification__icon"
            ></i>{' '}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  University of Reutlingen, Germany
                </h3>
                <span className="qualification__subtitle">
                  <strong>Masters of Science,</strong> Process Analysis and
                  Technology-Management, <strong>GPA 1.8/5.0 </strong>
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>Majors:</strong> Process Analytics, Measurement and
                  Control Technologies, Sensor Technology, Multimodal Simulation
                  and Data Analysis, Image Processing, Project Management,
                  Project Based Learning
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>Thesis:</strong> Development of an image process app
                  for pattern recognition in purview of automotive coatings.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 03/2015-08/2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  University of Engineering and Technology, Lahore, Pakistan
                </h3>
                <span className="qualification__subtitle">
                  <strong>Bachelor of Science</strong>, Chemical Engineering,
                  <strong>GPA 3.162/4.0</strong>
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>Thesis:</strong> Mathematical Designing of a
                  distillation column for the production of poly-lactic acid on
                  commercial scale.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 09/2010-08/2014
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Specialist IT Enterprise Architecture: Continental Automotive
                  GmbH, Eschborn, Germany
                </h3>
                <span className="qualification__subtitle">
                  <strong>Masters of Science,</strong> Process Analysis and
                  Technology-Management, <strong>GPA 1.8/5.0 </strong>
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>Majors:</strong> Process Analytics, Measurement and
                  Control Technologies, Sensor Technology, Multimodal Simulation
                  and Data Analysis, Image Processing, Project Management,
                  Project Based Learning
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>Thesis:</strong> Development of an image process app
                  for pattern recognition in purview of automotive coatings.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 09/2020-ongoing
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  POC: Application hosting as a (docker) containerized approach
                  to reduce the cost of on premises IT infrastructure Corporate
                  IT Graduate: Continental AG, Hannover, Germany
                </h3>
                <span className="qualification__subtitle">
                  <strong>1st Assignment: </strong>POC for Conti Data Lake and
                  management of different servers and dashboards
                  <strong>(CFIT GBA Hannover)</strong>
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>2nd Assignment:</strong> Manufacturing Data Lake
                  (MDL), Automotive IT MA, Nürnberg
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>3rd Assignment:</strong> Concept and pilot
                  implementation of the best cloud backup solution for
                  Continental
                  <strong>
                    (Corporate Infrastructure IT, Timisoara Romania)
                  </strong>
                </span>
                <br />
                <span className="qualification__subtitle">
                  <strong>4th Assignment:</strong> Implementation and Roll-Out
                  of a secure network in all automotive locations
                  <strong>(Automotive IT Infrastructure, Eschborn)</strong>
                </span>
                <br />
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 09/2018-08/2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  BASF Coatings GmbH, Münster, Germany. Project Supervisor: Dr.
                  Yevgen Zhmayev
                </h3>
                <span className="qualification__subtitle">
                  <strong>Thesis Student: </strong>Development of an
                  image-processing app for pattern recognition and shape
                  analysis
                </span>
                <br />
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 102/2018-08/2018
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BASF Coatings GmbH, Münster, Germany. Project Supervisor: Dr.
                  Yevgen Zhmayev
                </h3>
                <span className="qualification__subtitle">
                  <strong>Internship:</strong> Development in industry 4.0
                  leading to digitalization
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 10/2017-12/2017
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bosch Sensortec. GmbH, Reutlingen, Germany. Project
                  Supervisor: Dr. Thomas Block
                </h3>
                <span className="qualification__subtitle">
                  <strong>Internship: </strong>Development and testing of Bosch
                  MEMS gas sensors.
                </span>
                <br />
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 06/2016-09/2016
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BASF Coatings GmbH, Münster, Germany. Project Supervisor: Dr.
                  Yevgen Zhmayev
                </h3>
                <span className="qualification__subtitle">
                  <strong>Research Assistant: </strong> Installation of hardware
                  and software of a new HPLC machine.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender"></i> 12/2015-02/2016
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
