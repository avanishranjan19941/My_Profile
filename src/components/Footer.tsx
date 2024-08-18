import React from 'react';
import './Footer.css';

const AppFooter: React.FC = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </div>
  </footer>
  );
};

export default AppFooter;
