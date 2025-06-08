import React, { useState } from 'react';
import './Header.css';
import { FaLinkedin } from 'react-icons/fa';
import topmateLogo from '../assets/topmate-dark.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openNewTab = () => {
    alert('Opening HTML page...'); // Optional alert
   window.open(`/resume.html`, '_blank');
 // Must match the filename in /public
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h1>Avanish Ranjan</h1>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/avanish-ranjan-2401b9192/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#0077b5" />
        </a>
        <a href="https://www.topmate.io" target="_blank" rel="noopener noreferrer">
          <img src={topmateLogo} alt="TopMate.io Logo" style={{ width: 40, height: 40 }} />
        </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="https://www.topmate.io/avanish-ranjan" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <button onClick={openNewTab}>Open HTML Page</button>
        </nav>
        <button className="close-btn" onClick={toggleMenu}>Close</button>
      </div>
    </>
  );
};

export default Header;
