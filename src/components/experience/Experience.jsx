import React from 'react';
import "./experience.css";
import Companies from "./Companies";


const Experience = () => {
  return (
    <section className="experience section" id="experience">
            <p className="section__title">Profressional Journey so far...</p>
            <h2 className="section__subtitle">Experience</h2>

            <div className="experience__container container grid">
                <Companies/>
            </div>
    </section>
  )
}

export default Experience