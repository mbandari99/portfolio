import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";
import CV from "./../../assets/resume.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <p className="section__title">Find out more</p>
      <h2 className="section__subtitle">About me</h2>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            I'm a dedicated software engineer with over 4 years of professional
            experience in full-stack development and data science. I have a
            proven track record of designing and implementing scalable,
            data-driven solutions. My expertise includes a wide range of
            technologies such as React.js, Angular, Spring, Java, and Python,
            alongside proficiency in Agile methodologies and machine learning
            techniques. I am passionate about leveraging technology to deliver
            innovative solutions and create meaningful impact in dynamic and
            challenging environments.
          </p>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default About;
