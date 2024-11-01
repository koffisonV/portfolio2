import React from "react";
import CTA from "./cta";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home" className="h-screen pt-28 overflow-hidden">
      <div className="container mx-auto text-center h-full relative">
        <h5>Hello I'm</h5>
        <h1>Koffison Voumadi</h1>
        <h5 className="text-gray-500">Software Engineer</h5>

        {/* CTA Section */}
        <div className="mt-10">
          <CTA />
        </div>

        {/* Social Media Links */}
        <div className="gap-3 absolute bottom-12 transition-transform duration-300 hover:scale-105">
          <HeaderSocials />
        </div>

        {/* Profile Image Container */}
        <div className="absolute rounded-2xl left-1/2 -translate-x-1/2 mt-16 shadow-2xl transition-transform duration-300 hover:scale-105">
          <img src={ME} alt="me" className="" />
        </div>

        {/* Scroll Down Link */}
        <a
          href="#contact"
          className="absolute -right-9 bottom-20 transform rotate-90 font-light text-sm hover:text-gray-300 transition-colors duration-300"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
