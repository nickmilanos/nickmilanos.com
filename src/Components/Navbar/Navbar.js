import React from 'react';

export const Navbar = () => {
    return(
        <div>
            <div id="navbar">
                    <a className="right" id="aboutmeButton">About me</a>
                    <a className="right" id="experienceButton">Experiences</a>
                    <a className="right" id="skillsButton">Skills</a>
                    <a className="right" id="portfolioButton">Portfolio</a>
                    <a className="right" id="contactButton">Contact</a>
            </div>
            <div id="burger">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    );
}