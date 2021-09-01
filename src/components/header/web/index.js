import React from 'react'
import './web.css';

import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import img4 from '../../../images/img4.png'
import img5 from '../../../images/img5.png'


function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#project">
                    <img className="option-icon" src={img2} alt="" />Projects
                </a>
               
            </div>
            <div className="web-option">
                <a href="#skills">
                    <img className="option-icon" src={img3} alt="" />Skills 
                </a>
            </div>
            <div className="web-option">
                <a href="#work">
                    <img className="option-icon" src={img4} alt="" />Work                   
                </a>
            </div>
            <div className="web-option">
                <a href="#contact">
                    <img className="option-icon" src={img5} alt="" />Contact                   
                </a>
            </div>
        </div>
    )
}

export default Web
