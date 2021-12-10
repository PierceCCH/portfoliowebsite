import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" on onClick={()=>{setIsOpen(!isOpen)}}>
                <img src={require("../../../assets/icons/close.png").default} alt="close icon"/>
            </div>
            <div className="mobile-option">
                <a href="#projects">
                <img src={require("../../../assets/icons/project.png").default} alt="project icon"/> Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                <img src={require("../../../assets/icons/skills.png").default} alt="skills icon"/> Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                <img src={require("../../../assets/icons/work.png").default} alt="work icon"/> Work
                </a>
            </div>
            <div className="mobile-option">
                <a href="#contact">
                <img src={require("../../../assets/icons/contact.png").default} alt="contact icon" /> Contact
                </a>
            </div>
        </div>
    )
}

export default Mobile;
