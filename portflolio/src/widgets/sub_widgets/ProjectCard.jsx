import React, { useState } from 'react';
import './ProjectCard.css';
import foodProject from "../../images/foodproject.jpeg"

function ProjectCard(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card-container mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`card-content ${hovered ? 'hovered' : ''}`}>
        <img
          src={props.image}
          alt="Thunder Chat"
          className="card-image img img-fluid"
        />
        <div className="card-info">
          <h2>{props.title}</h2>
          <p>{props.para}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link">
            <i className="fas fa-external-link-alt"></i> {/* Font Awesome link icon */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
