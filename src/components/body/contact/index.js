import React from 'react'
import Separator from "../../common/separator/index.js"
import Socials from "../../common/socials/index.js"
import "./contact.css"

function Contact() {
    return (
        <div className='contact'>
            <Separator />
            <div className='contact-container'></div>
                <div className='contact-left'>
                    <p>Let's get in touch!</p>
                    <Socials />
                </div>
                <div className='download'>
                    <a download href={require("../../../assets/Resume_2Oct21.pdf").default}>
                        <img src={require("../../../assets/icons/download-file.png").default} alt="Download Icon"/>Resume
                    </a>
                </div>
        </div>
    )
}

export default Contact
