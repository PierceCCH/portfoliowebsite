import React from 'react'
import "./projectCard.css"

function ProjectCard({project}) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo&& (<a href={project.demo} className="project-link">
                        <div className="link-button">
                            DEMO
                        </div>
                    </a>)}
                    {project.github && (<a href={project.github} className="project-github">
                        <div className="link-button">
                            <img src={require("../../../assets/icons/repo.png").default} alt="repo icon" /> Code
                        </div>
                    </a>)}
                </div>
            </div>
            <p>
                {project.about}
            </p>
            <div className="project-tags">
                {project.tags.map((tag)=>{
                    return (
                        <label className="tag">{tag}</label>
                    )
                })}
            </div>
            <img src={project.image} className="project-photo" alt="Project pic"/>
        </div>
    )
}
export default ProjectCard
