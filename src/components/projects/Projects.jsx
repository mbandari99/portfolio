import React from "react";
import { Data } from "./Data.jsx";
import "./projects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <section className="projects container section" id="projects">
      <p className="section__title">My Learnings...</p>
      <h2 className="section__subtitle">Projects</h2>

      <Swiper
        className="projects__container"
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={24}
        loop={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="projects__card" key={id}>
              <img src={image} alt="" className="projects__img" />

              <h3 className="projects__name">{title}</h3>
              <p className="projects__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
