import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.png";
import Info from "./Info";
import CV from "./../../assets/resume.pdf";


const About = () => {
    return (
        <section className="about section" id="about">
            
            <p className="section__title">Find out more</p>
            <h2 className="section__subtitle">About me</h2>

            <div className="about__container container grid">
                <img src = {AboutImg} alt="" className="about__img" />

                <div className = "about__data">
                    <Info/>
                    <p className="about__description">
                    I'm Mahathi, a motivated graduate student in Computer Science with four years of experience as a Software Engineer. Proficient in full-stack development and Agile methodologies, I specialize in Angular, Java, Python, and various web technologies. Currently pursuing a Master of Science in Computer Science with a focus on Data Science at the University of North Carolina at Charlotte.
                    </p>
                </div>

                <div>
                    
                </div>
            </div>
        </section>
    )
}

export default About;