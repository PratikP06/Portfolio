import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="project-card card-shadow fade-up" 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-image-wrapper">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image" 
        />
      </div>
      <div className="project-content">
        <div className="project-techs">
          {project.techs.map((tech, idx) => (
            <span key={idx} className="project-tech">{tech}</span>
          ))}
        </div>
        <h3 className="font-headline-md project-title">{project.title}</h3>
        <p className="font-body-md project-desc">{project.description}</p>
        <div className="project-links">
          <a href={project.liveLink} className="font-label-md project-link-primary">
            Live Demo <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_outward</span>
          </a>
          <a href={project.githubLink} className="font-label-md project-link-secondary">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
