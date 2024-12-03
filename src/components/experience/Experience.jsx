import React from "react";
import Projects from "./Projects.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
const frontend = [
  {
    id: 1,
    imgSrc: IMG3,
    altText: "React",
    title: "React",
    description: "React & React Native",
  },
  {
    id: 2,
    imgSrc: IMG1,
    altText: "HTML",
    title: "HTML | CSS | JS",
    description: "Programming",
  },
  {
    id: 3,
    imgSrc: IMG7,
    altText: "WordPress",
    title: "WordPress",
    description: "Wordpress Dashboard & Plugins",
  },
  {
    id: 4,
    imgSrc: IMG8,
    altText: "Tailwind",
    title: "Tailwind",
    description: "CSS Framework",
  },
];

const backend = [
  {
    id: 1,
    imgSrc: IMG6,
    altText: "AWS",
    title: "Amazon Web Services",
    description: "DynamoDB, S3, EC2, Amplify, IAM, CloudWatch",
  },
  {
    id: 2,
    imgSrc: IMG2,
    altText: "MySQL",
    title: "MySQL | Php",
    description: "Databases",
  },
  {
    id: 3,
    imgSrc: IMG9,
    altText: "PostgreSQL",
    title: "PostgreSQL",
    description: "Databases",
  },
  {
    id: 4,
    imgSrc: IMG5,
    altText: "Git",
    title: "Git",
    description: "Version Control",
  },
  {
    id: 5,
    imgSrc: IMG10,
    altText: "ExpressJS",
    title: "ExpressJS",
    description: "Server",
  },
  {
    id: 6,
    imgSrc: IMG4,
    altText: "Python",
    title: "Python",
    description: "Programing",
  }
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>More about</h5>
      <h2 className=" text-3xl">My experiences</h2>
      <p className="text-center text-4xl font-light pb-2">Projects</p>
      <Projects />
      {/* ===================FRONTEND============== */}
      <h3 className="py-3">Tools & Frameworks</h3>
      <Swiper
        className="container experience__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {frontend.map(({ imgSrc, title, description }, index) => {
          return (
            <SwiperSlide className="experience" key={index}>
              <div className="experience__icon">
                <img src={imgSrc} alt="" />
              </div>
              <h5 className="skill__name">{title}</h5>
              <small className="skill__level">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* ===================BACKEND============== */}
      <h3 className="py-3">Backend Development</h3>
      <br />
      <Swiper
        className="container experience__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={70}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {backend.map(({ imgSrc, title, description }, index) => {
          return (
            <SwiperSlide className="experience" key={index}>
              <div className="experience__icon">
                <img src={imgSrc} alt="" />
              </div>
              <h5 className="skill__name">{title}</h5>
              <small className="skill__level">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Experience;
