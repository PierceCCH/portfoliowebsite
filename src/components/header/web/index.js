import React from 'react'
import "./web.css"

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <img src={require("../../../assets/icons/project.png").default} alt="project icon"/> Projects
                </a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <img src={require("../../../assets/icons/skills.png").default} alt="skills icon"/> Skills
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                <img src={require("../../../assets/icons/work.png").default} alt="work icon"/> Work
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <img src={require("../../../assets/icons/contact.png").default} alt="contact icon" /> Contact
                </a>
            </div>
        </div>
    )
}

export default Web;
