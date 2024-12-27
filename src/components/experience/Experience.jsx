import React from 'react';
import "./experience.css";
import Companies from "./Companies";


const Experience = () => {
  return (
    <section className="experience section" id="experience">
            <h2 className="section__title">Profressional Journey so far...</h2>
            <span className="section__subtitle">Experience</span>

            <div className="experience__container container grid">
                <Companies/>
            </div>
    </section>
  )
}

export default Experience