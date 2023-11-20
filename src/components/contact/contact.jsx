import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">tahir.waheed@conti.de</span>

              <a
                href="mailto:tahir.waheed@conti.de"
                className="contact__button"
                target="_blank"
              >
                Write to me <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon"></i>

              <h3 className="contact__card-title">Phone No</h3>
              <span className="contact__card-data">+49-176-43822400</span>

              <a
                href="tel:+49-176-43822400"
                className="contact__button"
                target="_blank"
              >
                Call me <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-map contact__card-icon"></i>

              <h3 className="contact__card-title">Address</h3>
              <span className="contact__card-data">
                Schützenstraße 3, 65795 Hattersheim am Main
              </span>

              <a
                href="https://maps.app.goo.gl/JwwKd9CJM8kQMtQ87"
                className="contact__button"
                target="_blank"
              >
                Meet me <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
