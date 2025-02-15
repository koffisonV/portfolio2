import React from "react";
import { IoMdSchool } from "react-icons/io";
import { FaGamepad } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className=" text-3xl">About Me</h2>
      <div className="container mx-auto gap-0 md:grid-cols-[50%]">
        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-md:gap-4">
          <article
            className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center 
            hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:transition-all hover:cursor-default"
          >
            <IoMdSchool className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
            <h5 className="text-[0.95rem]">College</h5>
            <small className="text-[0.7rem] text-[var(--color-light)]">
              Bachelors
            </small>
          </article>
          <article
            className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center 
            hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:transition-all hover:cursor-default"
          >
            <MdWork className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
            <h5 className="text-[0.95rem]">Work</h5>
            <small className="text-[0.7rem] text-[var(--color-light)]">
              Freelance
            </small>
          </article>
          <article
            className="bg-[var(--color-bg-variant)] border border-transparent rounded-2xl p-8 text-center 
            hover:bg-transparent hover:border-[var(--color-primary-variant)] hover:transition-all hover:cursor-default"
          >
            <FaGamepad className="text-[var(--color-primary)] text-[1.4rem] mb-4" />
            <h5 className="text-[0.95rem]">Gaming</h5>
            <small className="text-[0.7rem] text-[var(--color-light)]">
              Console
            </small>
          </article>
        </div>
        <p className="font-mono my-8 text-[var(--color-light)] max-md:text-center max-md:my-6">
          My name is Koffison Voumadi, a Software Engineer with 3 years of
          hands-on experience in Full-stack web, mobile development, and specialized
          knowledge in IT Support. With my agile
          mindset and collaborative skills, I'm eager to contribute towards the
          implementation of organizational strategies and growth. I have a
          bachelor's of science in computer science from John Jay College and
          possess a professional certificate in agile IT project management
          (LinkedIn Learning). During my free time, I freelance in graphic
          design and videography (pre-production, post-production), enjoy gaming 
          and spending time with friends and family .
        </p>
      </div>
    </section>
  );
};

export default About;
