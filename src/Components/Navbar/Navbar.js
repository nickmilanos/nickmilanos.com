import React from 'react';
import {scrollDown} from '../../UtilityFunctions';

export const Navbar = () => {
    return(
        <div>
            <div id="navbar">
                    <span className="right" onClick={() => scrollDown(".about_me")}>About me</span>
                    <span className="right" onClick={() => scrollDown(".portfolio")}>Portfolio</span>
                    <span className="right" onClick={() => scrollDown(".skills")}>Skills</span>
                    <span className="right" onClick={() => scrollDown(".experience")}>Experiences</span>
                    <span className="right" onClick={() => scrollDown(".contact")}>Contact</span>
            </div>
            <div id="burger">
                <i className="fa fa-bars"></i>
            </div>
        </div>
    );
}