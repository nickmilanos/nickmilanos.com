import React from 'react';

export const Skills = () => {
    let technologies = ["HTML5", "CSS3 (Flexbox, Media Queries)", "Sass", "JavaScript", "React",
                        "Node.js", "NPM", "Express.js", "JQuery", "C#", "Java", "SQL/ MySql", "Object Oriented Programming"];
    let tools = ["Linux (Ubuntu)", "Windows", "Command Line Interface (Linux Terminal)", 
                 "Vim", "Microsoft Visual Studio", "IntelliJ IDEA", "Microsoft Visual Studio Code", "Git / Github", "Mozilla Firefox", "Google Chrome", "Chrome DevTools"];
    return(
         <div className="skills mainSection">
                <h1>Skills</h1>
                <div id="languages">
                    <h2>Languages</h2>
                    <span><strong>Greek -</strong> Mother Tongue</span><br />
                    <span><strong>English -</strong> Certificate of Proficiency in English-Univercity of Michigan (2007)</span>
                </div>
                <div className="techAndToolsContainer">
                    <div className="tech">
                        <h2>Technologies</h2>
                        <ul> {technologies.map(element => <li key={element}>{element}</li>)} </ul>
                    </div>
                    <div className="tools">
                        <h2>Tools</h2>
                        <ul> {tools.map(element => <li key={element}>{element}</li>)} </ul>
                    </div>
                </div>
            </div>

    );
}