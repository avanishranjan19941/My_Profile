import React from 'react';
import './Projects.css';
import { Carousel } from 'react-responsive-carousel';
import { generateRandomGradient } from './TechExperience.tsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const gradient = generateRandomGradient();

const projectCardStyle = {
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  background: gradient,
  width: '100%',
  maxWidth: '100%', // Ensure it occupies 100% width
  boxSizing: 'border-box', // Prevents overflow
};

const projects = [
  {
    name: 'NCTS-P5 (New Computerized Transit System)',
    client: 'FODFIN BELGIUM',
    startDate: '16 June 2021',
    endDate: '31 Dec 2022',
    role: 'Application Developer',
    description: 'As an Application Developer responsible for Analysis, design, development, testing and implementation of new requirements and upgrades for our IBM BELGIUM customer FODFIN (Ministry of Finance, Belgium), Transition project from Phase 4 to Phase 5 on cloud native stack.',
    responsibilities: [
      'Responsible for Design, Develop, Test the upgraded version of transit system from Phase 4 to Phase 5 on cloud native tech stack.',
      'Deliver new and complex high-quality solutions to clients in response to varying business requirements.',
      'Responsible for effective communication between the project team and the customer. Provide support to Customer in case of any challenges faced during User testing.',
      'Translate customer requirements into formal requirements and design documents, establish specific solutions, and leading the efforts including programming and testing that culminate in client acceptance of the results.',
      'Utilize in-depth knowledge of functional and technical experience in Angular, Spring framework and other leading-edge products and technology in conjunction with industry and business skills to deliver solutions to customer.',
      'Establish Quality Procedure for the application to maintain code quality and security.',
      'Key Deliverables handled include Advanced search feature on Angular UI, CI/CD Pipeline setup, testing framework setup and refining, and Kubernetes Support for Team.'
    ],
    tools: [
      'Kubernetes', 'VPC (Hosted by Client)', 'Docker', 'Spring Boot', 'Java 17', 'Angular', 'Confluence', 
      'JIRA', 'STS', 'VSCODE', 'GITLAB', 'GIT CI', 'Node JS', 'Angular v13', 'Microservice', 'Grafana', 
      'Kibana', 'Elastic Search', 'Docker', 'Podman', 'Kubernetes', 'JPA', 'JAVAX Validation', 'RabbitMQ'
    ],
    teamSize: '25 to 30',
    companyWebsite: 'https://www.ibm.com/in-en'
  },
  {
    name: 'OPM IPC EXPERTUS',
    client: 'IBM',
    startDate: '1 Jan 2023',
    endDate: '1 May 2023',
    role: 'Application Developer (Tech Lead)',
    description: 'As an Application Developer responsible for Analysis, design, development, testing and implementation of new requirements from Product Owners and Business System Analysts (BSA). This is an IBM’s own product Open Payments Marketplace (OPM).',
    responsibilities: [
      'Responsible for Design, Develop, Test the requirements based on JIRA Tickets.',
      'Research and Develop Components from Backstage Framework and check the feasibility of UX Design.',
      'Collaborate with BSA Team to prepare HLD and LLD to start with Development.',
      'Responsible for Leading Team of Backend Application Development and sync status across different squads.',
      'Responsible for Working on POCs for under discussion Frameworks like Light4j, Backstage, Spring Boot to finally choose best out of all.'
    ],
    tools: [
      'AWS', 'OpenShift', 'Java 17', 'Spring boot', 'React', 'VSCode', 'STS', 'Confluence', 'JIRA', 
      'Microservice', 'Docker', 'Kubernetes', 'Kinesis', 'Harshi Corp Vault', 'Figma Designs', 'Postgres'
    ],
    teamSize: 'Similar to above',
    companyWebsite: 'https://www.ibm.com/consulting/payments-solution'
  },
  {
    name: 'IPC Case Management (E&I)',
    client: 'IBM',
    startDate: '1 April 2024',
    endDate: 'Till Date',
    role: 'Application Developer (Tech Lead)',
    description: 'As an Application Developer responsible for Analysis, design, development, testing and implementation of new requirements from Product Owners and Business System Analysts (BSA). This is an IBM’s own product, migrated version of legacy Exceptions & Investigation Application used by Desjardins, central One like clients.',
    responsibilities: [
      'Responsible for Design, Develop, Test the requirements based on JIRA Tickets.',
      'Research and Develop Components from Backstage Framework and check the feasibility of UX Design.',
      'Collaborate with BSA Team to prepare HLD and LLD to start with Development.',
      'Responsible for Leading Team of Backend Application Development and sync status across different squads.',
      'Responsible for Working on full stack development of application. As a Tech lead, responsible for supervising and reviewing POCs, actual development, code quality checks, and discussing designs with architects and requirements with BSAs.'
    ],
    tools: [
      'AWS ECS', 'AWS Fargate', 'Java 17', 'Spring boot', 'React', 'VSCode', 'STS', 'Confluence', 
      'JIRA', 'Microservice', 'Docker', 'Figma designs', 'Postgres'
    ],
    teamSize: 'Similar to above',
    companyWebsite: 'https://www.ibm.com/consulting/payments-solution'
  },
  {
    name: 'Order Handling (OH- R&D) (digital)',
    client: 'Amdocs',
    startDate: '2 Jan 2020',
    endDate: '11 June 2021',
    role: 'Software Developer',
    description: 'As a Software Developer responsible for development, testing, and implementation of new requirements and upgrades provided by the Product Owner. A telecom product to handle end-to-end orders of telecom products such as bundled orders of Sim, TV Plan, Add Ons.',
    responsibilities: [
      'Responsible for Developing product in Telecom BSS domain for our customers in the Telecom sector like AT&T and Vodafone.',
      'Deliver new and complex high-quality solutions to clients in response to varying business requirements.',
      'Responsible for managing scope, planning, tracking, change control, and other aspects of the project.',
      'Utilize in-depth knowledge of functional and technical experience in Spring Boot, OpenShift, Camunda, and other leading-edge products and technology in conjunction with industry and business skills to deliver solutions to the customer.',
      'Key projects handled include Elastic search and Couchbase connector development, Camunda application Integration using Spring Boot.'
    ],
    tools: [
      'OpenShift', 'AWS', 'Java 11', 'Spring Boot', 'Grafana', 'Elastic search', 
      'Couchbase', 'Confluence', 'JIRA', 'STS', 'Camunda', 'Linux', 'Postman', 'Kafka'
    ],
    teamSize: '45 to 60',
    companyWebsite: 'https://www.amdocs.com/'
  },
  {
    name: 'Professional Insurance Canada (Web)',
    client: 'MMC Canada (Marsh & McLennan)',
    startDate: '3 July 2017',
    endDate: '27 Dec 2019',
    role: 'Software Engineer',
    description: 'As a Developer responsible for development, testing, and implementation of new requirements and upgrades for LTI Client MMC Canada Web. It was a web application to purchase professional insurance offered by Marsh.',
    responsibilities: [
      'Responsible for developing new requirements and upgrades sent by the Business Analyst Team.',
      'Deliver new and complex high-quality solutions to clients in response to varying business requirements.',
      'Responsible for effective communication between the project team and the customer. Provide day-to-day direction to the project team and regular project status to the customer.',
      'Utilize in-depth knowledge of functional and technical experience in Java and JSF, along with other leading-edge products and technology, in conjunction with industry and business skills to deliver solutions to the customer.',
      'Key projects handled include various automation to load data into PDFs from tables and vice-versa, Insurance quote comparison, and generation tools.'
    ],
    tools: [
      'WebLogic', 'Java7', 'JSP', 'J2EE', 'JSF', 'Test Track', 'Perforce', 'Hibernate', 'Eclipse', 'Monolith'
    ],
    teamSize: '5 to 8',
    companyWebsite: 'https://www.ltimindtree.com/'
  },
  {
    name: 'Intra Day Reporting',
    client: 'American Express',
    startDate:'1 October 2024',
    endDate: 'ongoing',
    role: 'Senior Kotlin Developer',
    description: 'As a kotlin developer , create ibm mq consumer and transform SWIFT ISO20022 and MT messages and persist',
    responsibilities:[
      'Responsible for development of Message Queue Consumer , Parser of Payment messages and reporting message',
      'Parse messages to Database compatible fields',
      'create a Mapper to create Internal models',
      'Persist messages to database , Create DDls, DMls',
      'Write Junits and cover code with suitable test cases'
    ],
    tools:['kotlin','gradle','react','ibm mq','Spring MVC Utility','postgres','Intellij','docker'],
    teamSize: '8 to 10',
    companyWebsite: 'https://ibm.com'

  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card-container">
            <div style={projectCardStyle}>
                <h3>{project.name}</h3>
                <h4>{project.client}</h4>
              <PerfectScrollbar >
                <p className="tenure">
                  {project.startDate} - {project.endDate}
                </p>
                <p><strong>Role:</strong> {project.role}</p>
                <p>{project.description}</p>
                <h5>Responsibilities:</h5>
                <ul>
                  {project.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                <h5>Tools & Technologies:</h5>
                <p>{project.tools.join(', ')}</p>
                <p><strong>Team Size:</strong> {project.teamSize}</p>
                <p><a href={project.companyWebsite} target="_blank" rel="noopener noreferrer">Company Website</a></p>
              </PerfectScrollbar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
