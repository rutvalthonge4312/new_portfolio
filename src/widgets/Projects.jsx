import React from 'react';
import ProjectCard from './sub_widgets/ProjectCard';
import bank from "../images/banking.png";
import blog from "../images/blogging.png";
import gym from "../images/gymWeb.png";
import dairy from "../images/dairy.png";
import orderfood from "../images/orderfood.png";

const Projects = () => {
  const projectData = [
    {
      title: "GYM Website",
      para: "Welcome to the Gym Website project showcase! As a passionate developer, I took on the challenge of creating a dynamic and user-friendly website for a gym, leveraging my skills in HTML, CSS, JavaScript, PHP, and MySQL.",
      link: "#",
      image: gym,
    },
    {
      title: "Order Food Website",
      para: "Using HTML, I crafted the structure of the website, ensuring clear navigation and intuitive layout. Each page was meticulously designed to showcase the café's offerings, from specialty coffee blends to delectable pastries and savory treats.",
      link: "#",
      image: orderfood,
    },
    {
      title: "Banking Website",
      para: "As the backbone of the website's dynamic content generation, JSP played a central role in rendering dynamic web pages with personalized content for each user. Leveraging JSP, I seamlessly integrated Java code with HTML to create dynamic user interfaces.",
      link: "#",
      image: bank,
    },
    {
      title: "Blogging Application",
      para: "This project involves creating a blogging application using JSP, which played a central role in rendering dynamic web pages with personalized content for each user. I integrated Java code with HTML for a seamless user experience.",
      link: "#",
      image: blog,
    },
    {
      title: "Dairy Project",
      para: "This dairy project was designed to manage and track dairy-related operations efficiently. JSP was utilized to render dynamic content and create a user-friendly interface with real-time data updates.",
      link: "#",
      image: dairy,
    },
  ];

  return (
    <div className=" timeline-container" id='project'>
      <h2 className="projects-title title-head">
        My <strong>Projects</strong>
      </h2>

      <div className="timeline mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="timeline-item">
            <div data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}  className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <ProjectCard 
                title={project.title}
                para={project.para}
                link={project.link}
                image={project.image}
              />
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
