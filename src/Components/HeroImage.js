import React from 'react';
import {Navbar} from './Navbar/Navbar';

export const HeroImage = () => {
    return(
        <div id="hero_image">
            <Navbar />
            <div id="heroText">
                <h1>Nick Milanos</h1>
                <p>Junior Web Developer</p>
            </div>
            <div id="spans">
                <span>Ambition <i class="fas fa-check-circle"></i></span><span>Potential <i class="fas fa-check-circle"></i></span><span>Effort <i class="fas fa-check-circle"></i></span>
            </div>
            <i class="fas fa-angle-double-down fa-2x"></i>
            <blockquote>
                <p>"The only way to do great work,is to love what you do."</p>
                <footer>-Steve Jobs</footer>
            </blockquote>
        </div>
    );
}