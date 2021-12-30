import React from 'react';
import ProjectReview from './ProjectPreview/ProjectPreview';

export const Portfolio = () => {
    return(
            <div className="portfolio mainSection">
                <h1>Portfolio</h1>
                <div className="projects">
                    <h2>Professional Projects</h2>
					<div className="professionalProjectsInnerWrapper">
						<ProjectReview header="Topokat.gr"
									   description="Professional network for architects, topographers and civil-engineers. Professionals create their profile and potential clients from all over Greece are able to search for a professional near them, by location or by service."
									   link="https://www.topokat.gr"
									   extraClasses="topokatOverlappingSection"
									   buttonText="Visit Website" />
					</div>
                </div>
                <div className="projects">
                    <h2>Other Projects</h2>
					<div className="otherProjectsInnerWrapper">
						<ProjectReview header="Memory Game"
								       description="Technologies used: C#, Object-Oriented Programming principles"
									   link="https://github.com/nickmilanos/Memory-Game"
									   extraClasses="memoryGameOverlappingSection"
									   extraButtonClass="memoryGameButton"
									   buttonText="View Gihub Repository"/>
					</div>
                </div>
            </div>

    );
}