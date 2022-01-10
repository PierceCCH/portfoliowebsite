import React from 'react'
import { ProjectData } from '../../data/projects'
import './projects.css'
import ProjectCard from './projectCard'
import Separator from '../../common/separator/index.js'

function Projects() {
    const data = ProjectData
    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Some projects I've worked on</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project={project}/>
                })}
            </div>
            <label className="section-footer">More on the way!</label>
        </div>
    )
}

export default Projects
