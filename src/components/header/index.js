import React, { useState } from 'react'
import './header.css'

import img1 from '../../images/img1.png'

import Web from './web/index';
import Mobile from './mobile/index';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">Overreacted</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <img className="menu-icon" src={img1} alt="" />                 
                        {/* <Mobile /> */}                        
                    </div> 
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />} 
                </div>
            </div>
            
        </div>
    )
}

export default Header
