import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
    return  (
        <section className="skills section" id="skills">
            <h2 className="section__title">My Technical Level</h2>
            <span className="section__subtitle">Skills</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}

export default Skills;
