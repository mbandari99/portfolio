import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import DBCloud from "./DBCloud";

const Skills = () => {
    return  (
        <section className="skills section" id="skills">
            <p className="section__title">My Technical Level</p>
            <h2 className="section__subtitle">Skills</h2>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
                <DBCloud/>
                <Tools/>
                
            </div>
        </section>
    )
}

export default Skills;
