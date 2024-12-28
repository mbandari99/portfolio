import React from "react";
import CV from "./../../assets/resume.pdf";

const Data = () => {
    return (
        <div className="home__data">
            <h3 className="home__hii">Hi there! I'm </h3>
            <h1 className="home__title"> Mahathi Bandari</h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">I'm a passionate Software Developer, commited learner and technophile </p>

            <a href="#contact" className="button button--flex">
                Say Hello &nbsp;
                <i className="uil uil-location-arrow"></i>
            </a> &nbsp; &nbsp;

            <a href= {CV} target="_blank" className="button button--flex" >Resume &nbsp; 
            <i className="uil uil-angle-right-b"></i> </a>
        </div>

    )
}

export default Data;