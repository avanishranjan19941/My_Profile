import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TechExperience.css'; // You can customize styles here

const techData = [
  {
    title: 'UI Technologies',
    items: [
      'Angular', 'React', 'HTML', 'CSS', 'JSF', 'IBM Carbon CSS'
    ]
  },
  {
    title: 'Runtime',
    items: [
      'Node.js', 'JRE'
    ]
  },
  {
    title: 'RDBMS',
    items: [
      'MySQL', 'IBM DB2', 'Oracle 12g', 'PostgreSQL'
    ]
  },
  {
    title: 'Frameworks',
    items: [
      'Spring Boot', 'Light4j', 'Backstage', 'Hibernate', 'JPA', 'Kotlin', 'Flask', 'ASP.NET Core'
    ]
  },
  {
    title: 'Build Tools',
    items: [
      'Maven', 'Groovy', 'Ant', 'npm', 'yarn', 'npx'
    ]
  },
  {
    title: 'Architecture',
    items: [
      'Monolith', 'Microservices'
    ]
  },
  {
    title: 'NoSQL',
    items: [
      'Couchbase', 'MongoDB'
    ]
  },
  {
    title: 'Languages',
    items: [
      'Java', 'TypeScript', 'JavaScript', 'Python', '.NET', 'C#'
    ]
  },
  {
    title: 'OS',
    items: [
      'Windows 11', 'Linux'
    ]
  },
  {
    title: 'DevOps',
    items: [
      'Jenkins', 'GitLab', 'Kubernetes', 'IBM 1pipeline'
    ]
  },
  {
    title: 'Tools & IDEs',
    items: [
      'Camunda', 'JIRA', 'Confluence', 'STS', 'Eclipse', 'VS Code', 'IntelliJ', 'Postman', 'IBM RSA', 'Android Studio', 'PyCharm'
    ]
  },
  {
    title: 'Cloud & Infra',
    items: [
      'AWS EC2', 'ECS', 'Lambda', 'S3', 'OpenShift', 'IBM Cloud', 'Azure'
    ]
  },
  {
    title: 'Containerization',
    items: [
      'Docker', 'Podman', 'Fargate'
    ]
  },
  {
    title: 'Monitoring & Logging',
    items: [
      'ELK', 'Grafana', 'Prometheus', 'Spring Actuator'
    ]
  },
  {
    title: 'Messaging Queues',
    items: [
      'Apache Kafka', 'RabbitMQ', 'Apache ActiveMQ', 'Kinesis'
    ]
  },
  {
    title: 'Scripting',
    items: [
      'Shell', 'Python', 'Groovy'
    ]
  },
  {
    title: 'Code Repositories',
    items: [
      'GitLab', 'GitHub', 'Bitbucket', 'Perforce'
    ]
  },
  {
    title: 'Testing',
    items: [
      'Cucumber', 'Gatling', 'Mockito', 'Spring Integration Test'
    ]
  },
  {
    title: 'API Endpoint Simulator',
    items: [
      'Wiremock', 'Wiremock Cloud'
    ]
  },
  {
    title: 'Vault',
    items: [
      'HashiCorp Vault'
    ]
  },
  {
    title: 'AI',
    items: [
      'WatsonX AI', 'VS Code Extension', 'Data Pipeline', 'ETL with AI'
    ]
  }
];

const TechExperience = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop={true} useKeyboardArrows={true}>
      {techData.map((section, index) => (
        <div key={index} className="tech-carousel-slide">
          <div className="tech-carousel-card">
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TechExperience;
