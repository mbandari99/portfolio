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
    <section className="projects container section">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Learnings...</span>

      <Swiper
        className="projects__container"
        // loop={true}
        // spaceBetween={24}
        // pagination={{
        //   clickable: true,
        // }}
        // breakpoints={{
        //   576: {
        //     slidesPerView: 2,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   }
        // }}
        // modules={[Pagination]}

        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={24}
        lazy={true}
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
