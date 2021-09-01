import React from 'react'
import './mobile.css';

import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import img4 from '../../../images/img4.png'
import img5 from '../../../images/img5.png'

import imgx from '../../../images/imgx.png'


function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
                <img src={imgx} alt="" />
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project">
                        <img className="close-icon" src={img2} alt="" />Projects
                    </a>
                
                </div>
                <div className="mobile-option">
                    <a href="#skills">
                        <img className="close-icon" src={img3} alt="" />Skills 
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#work">
                        <img className="close-icon" src={img4} alt="" />Work                   
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#contact">
                        <img className="close-icon" src={img5} alt="" />Contact                   
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Mobile
