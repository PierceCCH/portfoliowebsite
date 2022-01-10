import React, { useState } from 'react'
import './header.css'
import Web from './web/index.js';
import Mobile from './mobile/index.js';

function Header() {
    const [isOpen, setIsOpen]= useState(false);

    return (
        <div className = "header">
            <div className = "menu">
                <div className = "web-menu">
                    <Web />
                </div>
                <div className = "mobile-menu">
                    <div className="menu-icon" onClick = {()=>setIsOpen(!isOpen)}>
                        <img src={require("../../assets/icons/menu.png").default} alt="Menu Icon" />
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}
export default Header;
