import React from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="py-12 text-center text-sm mt-28 bg-blue-600">
      <ul className="flex flex-wrap justify-center gap-6 mb-10 md:flex-row flex-col md:gap-8">
        <li><a href="#home" className="text-white hover:text-background/90">Home</a></li>
        <li><a href="#about" className="text-white hover:text-background/90">About</a></li>
        <li><a href="#experience" className="text-white hover:text-background/90">Experience</a></li>
        <li><a href="#contact" className="text-white hover:text-background/90">Contact</a></li>
      </ul>
      <div className='flex space-x-7 justify-center mb-7'>
        <a href="https://www.linkedin.com/in/koffison-voumadi/" target='_blank' rel="noopener noreferrer" className= "text-white">
          <FaLinkedin className="inline-block w-6 h-6"/>
        </a>
        <a href="https://github.com/koffisonV" target='_blank' rel="noopener noreferrer" className= "text-white">
          <BsGithub className="inline-block w-6 h-6"/>
        </a>
      </div>

      <div className="mb-16 text-background">
        <small>&copy; Koffison Voumadi. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;