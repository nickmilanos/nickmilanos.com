import React from 'react';

export const Portfolio = () => {
    return(
            <div className="portfolio mainSection">
                <h1>Portfolio</h1>
                <div className="professionalProjects">
                    <h2>Professional Projects</h2>
                    <div className="topokatImage"></div>
                </div>
                <div className="otherProjects">
                    <h2>Other Projects</h2>
                    <div className="inner_portfolio">
                        <div id="memoryGameWrap" className="projectWraps">
                            <h4>Memory Game</h4>
                            <div id="memoryGame" className="projects">
                                <h4>C# OOP</h4>
                            </div>
                            <a href="https://github.com/nickmilanos/Memory-Game" target="_blank">Github Link</a>
                        </div>
                        <div className="projectWraps">
                            <h4>Color Game</h4>
                            <div id="colorGame" className="projects">
                                <h4>HTML CSS Javascript</h4>
                            </div>
                            <a href="https://github.com/nickmilanos/Color-Game" target="_blank">Github Link</a>
                        </div>
                    </div>
                </div>
                <h4><i>Find more of my work at my <a href="https://github.com/nickmilanos" target="_blank">Github Account</a></i></h4>
            </div>

    );
}