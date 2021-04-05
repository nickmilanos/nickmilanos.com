import React from 'react';

export const Portfolio = () => {
    return(
            <div className="portfolio mainSection">
                <h1>Portfolio</h1>
                <div className="professionalProjects">
                    <h2>Professional Projects</h2>
                    <div className="topokatImage"></div>
                    <p>
                        <span className="projectTitle">Topokat.gr - freelancing project: </span> A professional network for architects, topographers and civil-engineers. Professionals create their personal profile and their information is available to all users who seek 
                        someone to provide specific services. Users from all over Greece have the ability to search for a professional by location or by service.<br />
                        <span className="projectTitle">Future features:</span> A knowledgebase for all users to educate themselves
                        on various topics and services of the domain of constructions, and more.
                    </p>
                    <a className="regularButton visitDemoButton" target="_blank" rel="noopener noreferrer" href="https://www.nmtest1.com">Visit Demo</a>
                </div>
                <div className="otherProjects">
                    <h2>Other Projects</h2>
                    <div className="inner_portfolio">
                        <div id="memoryGameWrap" className="projectWraps">
                            <h4>Memory Game</h4>
                            <div id="memoryGame" className="projects"></div>
                            <p><span className="technologiesUsed">Technologies used:</span> C#, Object-Oriented Programming principles</p>
                            <a className="regularButton" href="https://github.com/nickmilanos/Memory-Game" target="_blank" rel="noopener noreferrer">Github Repository</a>
                        </div>
                        <div className="projectWraps">
                            <h4>Color Game</h4>
                            <div id="colorGame" className="projects"></div>
                            <p><span className="technologiesUsed">Technologies used:</span> HTML, CSS, JavaScript</p>
                            <a className="regularButton" href="https://github.com/nickmilanos/Color-Game" target="_blank" rel="noopener noreferrer">Github Repository</a>
                        </div>
                    </div>
                </div>
                <h4 className="findMoreNotice"><i>Find more of my work at my <a href="https://github.com/nickmilanos" target="_blank" rel="noopener noreferrer">Github Account</a></i></h4>
            </div>

    );
}