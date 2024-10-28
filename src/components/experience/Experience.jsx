import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Experience.css";
// IMAGES
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
import IMG7 from "../../assets/img7.png";
import IMG8 from "../../assets/img8.png";
import IMG9 from "../../assets/img9.png";
import IMG10 from "../../assets/img10.png";

import "../../index.js";

// ============== SLIDES ARRAY ================
const data = [
  {
    imgSrc: IMG1,
    altText: "HTML",
    title: "HTML | CSS | JS",
    description: "Intermediate",
  },
  {
    id: 2,
    imgSrc: IMG3,
    altText: "React",
    title: "React Js",
    description: "Intermediate",
  },
  {
    id: 3,
    imgSrc: IMG7,
    altText: "WordPress",
    title: "WordPress",
    description: "Intermediate",
  },
  {
    id: 4,
    imgSrc: IMG8,
    altText: "Tailwind",
    title: "Tailwind",
    description: "Intermediate",
  },
];

const data2 = [
  {
    id: 1,
    imgSrc: IMG2,
    altText: "MySQL",
    title: "MySQL | Php",
    description: "Intermediate",
  },
  {
    id: 2,
    imgSrc: IMG4,
    altText: "Python",
    title: "Python",
    description: "Intermediate",
  },
  {
    id: 3,
    imgSrc: IMG6,
    altText: "AWS",
    title: "AWS",
    description: "Intermediate",
  },
  {
    id: 4,
    imgSrc: IMG5,
    altText: "Git",
    title: "Git",
    description: "Intermediate",
  },
  {
    id: 5,
    imgSrc: IMG9,
    altText: "PostgreSQL",
    title: "PostgreSQL",
    description: "Intermediate",
  },
  {
    id: 6,
    imgSrc: IMG10,
    altText: "ExpressJS",
    title: "ExpressJS",
    description: "Intermediate",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>More about</h5>
      <h2 className=" text-3xl">My experiences</h2>
      {/* ===================FRONTEND============== */}
      <h3>Frontend Development</h3>
      <Swiper
        className="container experience__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ imgSrc, title, description }, index) => {
          return (
            <SwiperSlide className="experience" key={index}>
              <div className="experience__icon">
                <img src={imgSrc} alt="" />
              </div>
              <h5 className="skill__name">{title}</h5>
              {/* <small className="skill__level">{description}</small> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* ===================BACKEND============== */}
      <h3 className=" pt-5">Backend Development</h3>
      <br />
      <Swiper
        className="container experience__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data2.map(({ imgSrc, title, description }, index) => {
          return (
            <SwiperSlide className="experience" key={index}>
              <div className="experience__icon">
                <img src={imgSrc} alt="" />
              </div>
              <h5 className="skill__name">{title}</h5>
              {/* <small className="skill__level">{description}</small> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Experience;
