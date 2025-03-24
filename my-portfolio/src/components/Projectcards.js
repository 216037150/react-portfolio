import React from 'react';

const ProjectCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="row">
      <img src={imageUrl} style={{ height: '400px' }} alt={title} />
      <div className="layer">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={link}>
          <i className="bx bx-link-external" style={{ color: 'rgb(139, 12, 123)' }}></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;