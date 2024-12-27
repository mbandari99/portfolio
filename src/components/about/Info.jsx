import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">

            <div className="about__box">
                <h3 className="about__title">Experience <i class="uil uil-award about__icon"></i></h3>
                <p className="about__subtitle">4 Years</p>
                <span className="about__subtitle">Full Stack Developer</span>
            </div>

            <div className="about__box">
                <h3 className="about__title">Education <i class="uil uil-graduation-cap about__icon"></i></h3>
                <p className="about__subtitle">MSc in Computer Science </p>
                <span className="about__subtitle">BSc in Computer Science </span>
            </div>
            
        </div>

        
    )
}

export default Info;