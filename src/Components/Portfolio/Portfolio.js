import React from 'react';
import {ProjectReview} from './ProjectPreview/ProjectPreview';

export const Portfolio = () => {
    return(
            <div className="portfolio mainSection">
                <h1>Portfolio</h1>
                <div className="professionalProjects">
                    <h2>Professional Projects</h2>
					<div className="projectPreview2">
						<div className="gremshinovaImage"></div>
						<p>
							<span className="projectTitle">Gremshinova.gr: </span> Presentational website for a small technical renovation office.
						</p>
						<div className="projectPreviewButtonWrapper"><span></span><a className="regularButton visitDemoButton" href="https://www.gremshinova.gr" target="_blank" rel="noopener noreferrer">Visit Website</a></div>
					</div>
					<div className="projectPreview2">
						<div className="topokatImage"></div>
						<p>
							<span className="projectTitle">Topokat.gr: </span> Professional network for architects, topographers and civil-engineers. Professionals create their profile and potential clients from all over Greece are able to search for a professional near them, by location or by service.<br />
						</p>
						<div className="projectPreviewButtonWrapper"><span></span><a className="regularButton visitDemoButton" href="https://www.nmtest1.com" target="_blank" rel="noopener noreferrer">View Demo</a></div>
					</div>
					{/* <ProjectReview /> */}
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
                    </div>
                </div>
                <h4 className="findMoreNotice"><i>Find more of my work at my <a href="https://github.com/nickmilanos" target="_blank" rel="noopener noreferrer">Github Account</a></i></h4>
            </div>

    );
}