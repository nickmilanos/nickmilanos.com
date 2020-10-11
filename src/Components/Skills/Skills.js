import React from 'react';
import {technologies, tools} from '../../Constants';

export const Skills = () => {
    return(
         <div id="skills">
                <h1>Skills</h1>
                <div id="languages">
                    <h2>Languages</h2>
                    <h4>Greek -</h4> Mother Tongue<br />
                    <h4>English -</h4> Certificate of Proficiency in English-Univercity of Michigan (2007)
                </div>
                <div class="techAndToolsContainer">
                    <div>
                        <h2>Technologies</h2>
                        <ul>
                            {technologies.map(element => <li key={element}>{element}</li>)}
                        </ul>
                    </div>
                    <div id="tools">
                        <h2>Tools</h2>
                        <ul>
                            {tools.map(element => <li key={element}>{element}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

    );
}