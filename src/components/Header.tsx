import React, { useState } from 'react';
import './Header.css';
import topmateLogo from '../assets/topmate-dark.svg';
import lnkdLogo from '../assets/lnkd.png'; // Assuming you have a LinkedIn logo in your assets

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openNewTab = () => {
   window.open(window.location+`/resume.html`, '_blank');
 // Must match the filename in /public
  };

  return (
    <>
      <header className="header">
         <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo">
          <h1 >Avanish Ranjan </h1>
          
        </div>
        
        <div>
        <a href="https://www.linkedin.com/in/avanish-ranjan-2401b9192/" target="_blank" rel="noopener noreferrer">
           <img src={lnkdLogo}  alt="TopMate.io Logo" style={{ width: 50, height: 50 }} />
        </a>
        
        <a href="https://topmate.io/avanish_ranjan" target="_blank" rel="noopener noreferrer">
          <img src={topmateLogo}  alt="TopMate.io Logo" style={{ width: 150, height: 50 }} />
        </a>
        </div>
       
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    
        <div className="close-btn" onClick={toggleMenu}>
          &times;
        </div>  
        <nav className="sidebar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="https://www.topmate.io/avanish_ranjan" target="_blank" rel="noopener noreferrer">Book a Call</a>
          <a onClick={openNewTab}>Resume</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
