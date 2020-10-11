import React from 'react';
import {Navbar} from '../Navbar/Navbar';

export const HeroImage = () => {
    return(
        <div className="hero_image">
            <Navbar />
            <div id="heroText">
                <h1>Nick Milanos</h1>
                <p>Junior Web Developer</p>
            </div>
            <div className="spans">
                <span>Ambition <i class="fas fa-check-circle"></i></span>
                <span>Potential <i class="fas fa-check-circle"></i></span>
                <span>Effort <i class="fas fa-check-circle"></i></span>
            </div>
            <i className="fas fa-angle-double-down fa-2x"></i>
            <blockquote>
                <p>"The only way to do great work,is to love what you do."</p>
                <footer>-Steve Jobs</footer>
            </blockquote>
        </div>
    );
}