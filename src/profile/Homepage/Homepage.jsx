import React from 'react';
import './Homepage.css'; // Import your CSS file for styling
import myImage from './assets/pic1.jpg';


function Homepage() {
  // Define array of experiences
  const experiences = [
    {
      companyLogo: "company1-logo.jpg",
      jobTitle: "Software Engineer",
      companyName: "Company 1",
      dates: "January 2020 - Present",
      responsibilities: ["Responsibility 1", "Responsibility 2", "Responsibility 3"]
    },
    // Add more experiences as needed
  ];

  // Define array of achievements with image URLs
  const achievements = [
    "achievement1.jpg",
    "achievement2.jpg",
    "achievement3.jpg",
    // Add more achievements as needed
  ];

  return (
    <div className="homepage">
      <div className="profile-pic">
        <img src={myImage} alt="Your Profile Pic" />
      </div>
      <div className="content">
        <h1>Welcome to My Homepage</h1>
        <p>This is where you can introduce yourself or any other content you'd like to display.</p>
        <h2 className="component-heading">Tech Stack</h2>
        <ul className="tech-stack">
          <li><i className="fab fa-react"></i> React</li>
          <li><i className="fab fa-node-js"></i> Node.js</li>
          <li><i className="fab fa-js"></i> JavaScript</li>
          <li><i className="fab fa-html5"></i> HTML</li>
          <li><i className="fab fa-css3-alt"></i> CSS</li>
          {/* Add more technologies as needed */}
        </ul>
      </div>
      <div className="experiences">
        <h2 className="component-heading">Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <div className="company-logo">
              <img src={experience.companyLogo} alt={experience.companyName} />
            </div>
            <div className="experience-details">
              <h3>{experience.jobTitle}</h3>
              <p>{experience.companyName}</p>
              <p>{experience.dates}</p>
              <p>Responsibilities:</p>
              <ul>
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="achievements">
        <h2 className="component-heading">Achievements</h2>
        <div className="achievement-images">
          {achievements.map((achievement, index) => (
            <img key={index} src={achievement} alt={`Achievement ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
