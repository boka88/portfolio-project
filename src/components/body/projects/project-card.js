import React from 'react'
import './project-card.css';

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-lnks">
                    {project.demo&& (<a className="project-link" href={project.demo}>
                        <div className="link=button">
                      <img   src={require('../../../images/globe.png').default} />Demo
                        </div>
                    </a>)}
                    {project.github&&<a className="project-link" href={project.github}>
                        <div className="link=button">
                        <img   src={require('../../../images/github1.png').default} />Github
                        </div>
                    </a>}
                </div>
            </div>
            <img src={project.images} className="project-photo" />
            </div>
        
    )
}

export default ProjectCard
