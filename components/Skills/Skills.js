import React from 'react';
import SkillsSection from './Section';
import { faCode, faLaptopCode, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export const Skills = () => {

	const skillSections = [
		{
			icon: faCode,
			name: "Development",
			listItems: [
				{ name: "HTML5" },
				{
					name: "CSS3",
					note: "+ Flexbox, Media Queries, Animations"
				},
				{ name: "Sass" },
				{
					name: "JavaScript",
					note: "+ DOM Manipulation, AJAX, JQuery"
				},
				{
					name: "React",
					note: "+ React Router, Redux, Hooks, Functional Components"
				},
				{
					name: "Node.js ",
					note: "Express.js, NPM"
				},
				{ name: "Java" },
				{ name: "Object Oriented Programming" },
				{ name: "SQL/ MySQL" }
			]
		},
		{	
			icon: faLaptopCode,
			name: "Tools",
			listItems: [
				{
					name: "Linux ",
					note: "Ubuntu"
				},
				{ name: "Windows" },
				{ name: "Vim" },
				{ name: "Microsoft Visual Studio" },
				{ name: "Microsoft Visual Studio Code" },
				{ name: "Intellij IDEA" }
			]
		}, 
		{
			icon: faEllipsisH,
			name: "Other",
			listItems: [
				{
					name: "Command Line Interface",
					note: "Linux Terminal"
				},
				{
					name: "Git",
					note: "Git CLI, Github, BitBucket"
				},
				{
					name: "Browsers' Dev Tools",
					note: "Firefox, Chrome"
				},
				{
					name: "Agile/ Scrum/ Kanban",
					note: "Github, Jira, Trello"
				}
			]
		}
	];

    return(
         <div className="skills mainSection">
                <h1>Skills</h1>
                <div id="languages">
                    <h2>Languages</h2>
                    <span className="language">Greek</span><span>Mother Tongue</span><br />
                    <span className="language">English</span><span>Full Professional Proficiency (Certificate of Proficiency in English-University of Michigan)</span>
                </div>
				<div className='techAndToolsContainer2'>
					{skillSections.map(skillSection => <SkillsSection key={skillSection.name} icon={skillSection.icon} header={skillSection.name} listItems={skillSection.listItems}/>)}
				</div>
            </div>

    );
}
