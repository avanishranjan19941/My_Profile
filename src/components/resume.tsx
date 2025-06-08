// OpenHtmlPage.jsx
import React from 'react';

const Resume :React.FC = () =>  {
  const handleOpen = () => {
    window.open('/Avanish-Resume.html', '_blank'); // Must match the filename in /public
  };

  return (
    <button onClick={handleOpen}>
        alert('Opening HTML page...'); // Optional alert
      Open HTML Page
    </button>
  );
};

export default Resume;
