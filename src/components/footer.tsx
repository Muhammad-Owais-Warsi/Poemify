import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-4 text-center w-full p-4">
      <p>&copy; {new Date().getFullYear()} Poemify. All rights reserved.</p>
      <a 
        href="https://github.com/Muhammad-Owais-Warsi/Poemify" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex justify-center items-center mt-2"
      >
        <FontAwesomeIcon icon={faGithub} className="mr-2" />
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
