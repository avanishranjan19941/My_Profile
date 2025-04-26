import React from "react";
import { motion } from "framer-motion";
import "./TechExperience.css";

const techData = [
  {
    title: "UI Technologies",
    items: ["Angular", "React", "HTML", "CSS", "JSF", "IBM Carbon CSS"],
  },
  {
    title: "Runtime",
    items: ["Node.js", "JRE"],
  },
  {
    title: "RDBMS",
    items: ["MySQL", "IBM DB2", "Oracle 12g", "PostgreSQL"],
  },
  {
    title: "Frameworks",
    items: [
      "Spring Boot",
      "Light4j",
      "Backstage",
      "Hibernate",
      "JPA",
      "Kotlin",
      "Flask",
      "ASP.NET Core",
    ],
  },
  {
    title: "Build Tools",
    items: ["Maven", "Groovy", "Ant", "npm", "yarn", "npx"],
  },
];

export const generateRandomGradient = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A8",
    "#F3FF33",
    "#33FFF3",
    "#A833FF",
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

const TechExperience = () => {
  const generateRandomFinalPosition = () => {
    const maxX = window.innerWidth * 0.8; // Limit to 40% for desktop, adjust for mobile in CSS
    const maxY = window.innerHeight * 0.8; // Limit to 40% for desktop, adjust for mobile in CSS
    const x = getRandomNumber(maxX);
    const y =getRandomNumber(maxY);
    return { x, y };
  };

  function getRandomNumber(x: number): number {
    return Math.floor(Math.random() * x);
  }

  const isMobileOrTablet = window.innerWidth <= 768; // Check if screen size is mobile/tablet

  return (
    <div className="tech-experience-container">
      {techData.map((section, sectionIndex) =>
        section.items.map((item, itemIndex) => {
          const initialPosition = {
            x: Math.random() * window.innerWidth * 0.5 - window.innerWidth * 0.25,
            y: Math.random() * window.innerHeight * 0.5 - window.innerHeight * 0.25,
          };

          const finalPosition = generateRandomFinalPosition();
          const randomGradient = generateRandomGradient();

          const scale = isMobileOrTablet ? 0.8 : 1; // Scale down for mobile/tablet

          return (
            <motion.div
              key={`${sectionIndex}-${itemIndex}`}
              className="tech-item"
              style={{ background: randomGradient }}
              initial={{
                opacity: 0,
                x: initialPosition.x,
                y: initialPosition.y,
                scale: scale,
                position: "absolute", // Ensure absolute positioning for free movement
              }}
              animate={{
                opacity: 1,
                x: finalPosition.x,
                y: finalPosition.y,
                scale: scale,
                fontWeight: "bold",
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 2,
                delay: itemIndex * 0.3,
              }}
            >
              {item}
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default TechExperience;
