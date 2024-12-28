import React from "react";
import "./skills.css";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              className="skills__img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            />

            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <img
              className="skills__img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-spring-original colored"></i>

            <div>
              <h3 className="skills__name">Spring</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img
              className="skills__img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            />

            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-flask-original colored"></i>

            <div>
              <h3 className="skills__name">Flask</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-php-plain colored"></i>

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
