import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact__section section" id="contact">
        <h2 className='section__title'>Get in Touch</h2>
        <span className='section__subtitle'>Let's work Together</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className='contact__card'>
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">mahathibandarii@gmail.com</span>

                        <a href="mailto:mahathibandarii@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact