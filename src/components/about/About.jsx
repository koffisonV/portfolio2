import React from "react";
import "./About.css";
import { IoMdSchool } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__cards">
          <article className="about__card">
            <IoMdSchool className="about__icon" />
            <h5>College</h5>
            <small>Bachelors</small>
          </article>
          <article className="about__card">
            <FaGamepad className="about__icon" />
            <h5>Gaming</h5>
            <small>Console</small>
          </article>
          <article className="about__card">
            <MdWork className="about__icon" />
            <h5>Work</h5>
            <small>Freelance</small>
          </article>
        </div>
        <p className="font-mono">
        My name is Koffison Voumadi, a Software Engineer with over 2 years of hands-on experience in mobile and web development, and specialized knowledge in full stack  development and cybersecurity. With my agile mindset and collaborative skills, I’m eager to contribute towards the implementation of organizational strategies and growth.

I have a bachelor’s of science in computer science from John Jay College and possess a professional certificate in agile IT project management (LinkedIn Learning).

During my free time, I freelance in graphic design and video editing, enjoy gaming and spending time with my loved ones.
        </p>
      </div>
    </section>
  );
};

export default about;
