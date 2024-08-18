// Header.tsx
import React from 'react';
import  './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
    <div className="logo">
      <h1>Avanish Ranjan - Cloud Full Stack </h1> 
    </div>
    <nav className="nav-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  
  );
};

export default Header;
