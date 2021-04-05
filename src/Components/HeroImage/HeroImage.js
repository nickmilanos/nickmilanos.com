import React, {useEffect, useState} from 'react';
import {Navbar} from '../Navbar/Navbar';

export const HeroImage = () => {
    let [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        setIsTextVisible(true);
    }, []);
    return(
        <div className="hero_image">
            <Navbar />
            <div className={`heroText ${isTextVisible ? "isVisible" : ""}`}>
                <h1>Nick Milanos</h1>
                <p>Junior Web Developer</p>
            </div>
            <div className="spans">
                <span>Ambition <i className="fas fa-check-circle"></i></span>
                <span>Potential <i className="fas fa-check-circle"></i></span>
                <span>Effort <i className="fas fa-check-circle"></i></span>
            </div>
            <i className="fas fa-angle-double-down fa-2x"></i>
            <blockquote>
                <p>"The only way to do great work,is to love what you do."</p>
                <footer>-Steve Jobs</footer>
            </blockquote>
        </div>
    );
}