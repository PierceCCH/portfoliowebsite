import React from 'react'
import './about.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hi there! 
                    <br/> <span className="info-name">I'm Pierce</span>
                    <br/> 
                    Nice to meet you!
                    <br />
                    I'm a freshman majoring in
                    <br /><span className='info-name'>Computer Science at UCLA</span>
                </div>
                <div className="about-photo">
                    <img src={require('../../../assets/me.jpg').default} className="picture" alt="Placeholder"/>
                </div>
            </div>
        </div>
    )
}

export default About
