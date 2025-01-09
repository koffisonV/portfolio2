import React from "react";
import CTA from "./cta";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="text-center relative mt-10">
        <h5>Hello I'm</h5>
        <h1>Koffison Voumadii</h1>
        <h5 className="text-gray-500">Software Engineer</h5>

        {/* CTA Section */}
        <div className="mt-10">
          <CTA />
        </div>

        {/* Social Media Links */}
        <div className=" z-10 gap-3 absolute bottom-32 left-2 sm:left-32 transition-transform duration-300 hover:scale-105">
          <HeaderSocials />
        </div>

        {/* Profile Image Container */}
        {/* <div className="absolute w-full max-w-sm rounded-3xl left-1/2 -translate-x-1/2 mt-10 shadow-2xl transition-transform duration-300 hover:scale-105"> */}
        <div className="justify-items-center">
          <img src={ME} alt="me" className="shadow-2xl m-16 w-3/4 sm:w-1/2 lg:w-1/4" />
        </div>

        {/* Scroll Down Link */}
        <a
          href="#contact"
          className="absolute -right-3 sm:-right-0 bottom-32 transform rotate-90 font-light text-sm hover:text-gray-300 transition-colors duration-300"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
