import React from "react";
import JFrog from "../../assets/jfrog.png";

const DBCloud = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Databases & Cloud Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="devicon-mysql-original colored"></i>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-mongodb-plain colored"></i>

            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-postgresql-plain colored"></i>

            <div>
              <h3 className="skills__name">Postgres</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <img className="skills__img" src={JFrog} />

            <div>
              <h3 className="skills__name">JFrog</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-amazonwebservices-plain-wordmark colored"></i>

            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-azure-plain colored"></i>

            <div>
              <h3 className="skills__name">Azure</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBCloud;
