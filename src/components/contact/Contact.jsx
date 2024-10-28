import React from "react";
// import './Contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { clear } from "@testing-library/user-event/dist/clear";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="text-center mb-8">
        <h5 className="text-sm text-gray-600 mb-2">Get In Touch</h5>
        <h2 className="text-3xl font-bold">Contact Me</h2>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[30%_58%] gap-8 lg:gap-[12%] mb-24 p-4">
        <div className="flex flex-col gap-5">
          <article className="bg-slate-100 p-5 rounded-2xl text-center border border-transparent hover:bg-transparent hover:border-blue-600 transition-all duration-300 hover:scale-[1.02]">
            <HiOutlineMail className="text-4xl text-blue-600 mx-auto mb-2" />
            <h4 className="text-lg font-medium mb-1">Email</h4>
            <h5 className="text-sm text-gray-600 mb-3">Koffison29@gmail.com</h5>
            <a 
              href="mailto:Koffison29@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:text-blue-700 inline-block"
            >
              Send a message
            </a>
          </article>
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-6 rounded-lg border-2 border-blue-600/30 focus:border-blue-600 outline-none resize-none text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-6 rounded-lg border-2 border-blue-600/30 focus:border-blue-600 outline-none resize-none text-black"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
            className="w-full p-6 rounded-lg  border-2 border-blue-600/30 focus:border-blue-600 outline-none resize-none text-black"
          />
          <div className="flex items-center gap-8">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              onReset={clear}
            >
              Send Message
            </button>
            <a 
              href="#home" 
              className="text-sm hover:text-blue-600 transition-colors duration-300 transform inline-block"
            >
              Scroll Up
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
