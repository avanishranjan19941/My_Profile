import React, { useState } from 'react';
import './Header.css';
import { FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
