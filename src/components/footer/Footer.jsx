import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-center text-sm mt-28 bg-blue-600">
      <ul className="flex flex-wrap justify-center gap-6 mb-12 md:flex-row flex-col md:gap-8">
        <li><a href="#home" className="text-white hover:text-background/90">Home</a></li>
        <li><a href="#about" className="text-white hover:text-background/90">About</a></li>
        <li><a href="#experience" className="text-white hover:text-background/90">Experience</a></li>
        <li><a href="#contact" className="text-white hover:text-background/90">Contact</a></li>
      </ul>

      <div className="mb-16 text-background">
        <small>&copy; Koffison Voumadi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;