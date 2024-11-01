import React from "react";
import CV from "../../assets/cv.pdf";
const cta = () => {
  return (
    <div className="cta flex justify-center space-x-4">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default cta;
