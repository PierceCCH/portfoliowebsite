import React from 'react'
import Socials from '../../common/socials/index.js'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Lorem Ipsum, 
                    <br/> <span className="info-name">doler</span>
                    <br/> 
                    sit amet!
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/cat.jpg').default} className="picture" alt="Placeholder"/>
                </div>
            </div>
            <Socials />
        </div>
    )
}

export default About
