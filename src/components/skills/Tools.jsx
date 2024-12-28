import React from "react";

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Software Development Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img
              className="skills__img"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
            />

            <div>
              <h3 className="skills__name">Jenkins</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-postman-plain colored"></i>

            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <img 
            className="skills__img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" />

            <div>
              <h3 className="skills__name">Kubernetes</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
          <i className="devicon-docker-plain colored"></i>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-apachekafka-original colored"></i>

            <div>
              <h3 className="skills__name">Kafka</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="devicon-github-original colored"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
