import React from 'react'
import { SocialData } from '../../data/social.js';
import './socials.css'

function Socials() {
    const data = SocialData
    return (
        <div className="social-contact">
            {data.map((items)=>{
                return (
                    <a href={items.link}>
                        <div className="social-icon-div">
                            <img src={items.icon} alt="Social media icon" className="social-icon"/>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Socials;
