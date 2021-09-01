import React from 'react'
import './about.css';

import SocialContact from '../../common/social-content/index';

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello there, I am 
                    <br /> <span className="info-name">Boris Ivanisevic</span> ,
                    <br /> I love experimenting with the web.
                </div>
                <div className="about-photo">
                    <img 
                      src={require('../../../images/coding.png').default}  
                      className="picture"/>
                </div>
            </div>
          <SocialContact />
        </div>
    )
}

export default About
