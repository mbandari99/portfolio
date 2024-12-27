import React from 'react';
import "./projects.css"

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        {/* <h2 className="section__title"></h2> */}
        <span className="section__subtitle">Projects</span>

        <div className="projects__container container grid">
            <div className="projects__content">
                <div>
                    <i className="uil uil-web-grid projects__icon"></i>
                    <h3 className="projects__title"> Product Development</h3>
                </div>

                <span className="projects__button">View More <i className="uil uil-arrow-right projects__button-icon">
                    </i></span>

                <div className="projects__modal">
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">UI-UX</h3>

                        <p className="projects__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">I develop user interface.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">Web Page Development</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">UX element design interactions.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">All my projects are listed here.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">I make many more.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-arrow projects__icon"></i>
                    <h3 className="projects__title">UX Designer</h3>
                </div>

                <span className="projects__button">View More <i className="uil uil-arrow-right projects__button-icon">
                    </i></span>

                <div className="projects__modal">
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Design</h3>

                        <p className="projects__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">I develop user interface.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">Web Page Development</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">UX element design interactions.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">All my projects are listed here.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">I make many more.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className="projects__content">
                <div>
                    <i className="uil uil-edit projects__icon"></i>
                    <h3 className="projects__title">Visual Designer</h3>
                </div>

                <span className="projects__button">View More <i className="uil uil-arrow-right projects__button-icon">
                    </i></span>

                <div className="projects__modal">
                    <div className="projects__modal-content">
                        <i className="uil uil-times projects__modal-close"></i>

                        <h3 className="projects__modal-title">Visual Designer</h3>

                        <p className="projects__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="projects__modal-projects grid">
                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">I develop user interface.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">Web Page Development</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">UX element design interactions.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">All my projects are listed here.</p>
                            </li>

                            <li className="projects__modal-project">
                                <i className="uil uil-check-circle projects__modal-icon"></i>

                                <p className="projects__modal-info">I make many more.</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects