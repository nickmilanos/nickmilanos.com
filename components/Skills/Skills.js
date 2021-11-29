import { faChrome, faCss3Alt, faFirefox, faHtml5, faJava, faJs, faNode, faNpm, faReact, faSass, faUbuntu, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faDatabase, faFileCode, faSitemap, faTachometerAlt, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Skills = () => {
	const technologies = {
		html5: {
			icon: faHtml5,
			name: "HTML5",
			extras: ""
		},
		CSS3: {
			icon: faCss3Alt,
			name: "CSS3",
			extras: "(+ Flexbox, Media Queries, Animations)"
		},
		sass: {
			icon: faSass,
			name: "Sass",
			extras: ""
		},
		javascript: {
			icon: faJs,
			name: "JavaScript",
			extras: "(+ DOM Manipulation, AJAX, JQuery)"
		},
		react: {
			icon: faReact,
			name: "React",
			extras: "(+ React Router, Redux, Hooks, Functional Components)"
		},
		node: {
			icon: faNode,
			name: "Node.js",
			extras: "(+ Express.js)"
		},
		npm: {
			icon: faNpm,
			name: "NPM",
			extras: ""
		},
		java: {
			icon: faJava,
			name: "Java",
			extras: ""
		},
		oop: {
			icon: faSitemap,
			name: "Object Oriented Programming",
			extras: ""
		},
		sql: {
			icon: faDatabase,
			name: "SQL / MySql",
			extras: ""
		}
	};

	const tools = {
		ubuntu: {
			icon: faUbuntu,
			name: "Linux",
			extras: "(Ubuntu)"
		},
		windows: {
			icon: faWindows,
			name: "Windows",
			extras: ""
		},
		cli: {
			icon: faTerminal,
			name: "Command Line Interface",
			extras: "(Linux Terminal)"
		},
		git: {
			icon: faCodeBranch,
			name: "Git / Github",
			extras: ""
		},
		firefox: {
			icon: faFirefox,
			name: "Mozilla Firefox",
			extras: ""
		},
		chrome: {
			icon: faChrome,
			name: "Google Chrome",
			extras: ""
		},
		devTools: {
			icon: faTachometerAlt,
			name: "Chrome DevTools",
			extras: ""
		},
		vim: {
			icon: faFileCode,
			name: "Vim",
			extras: ""
		},
		msvs: {
			icon: faFileCode,
			name: "Microsoft Visual Studio",
			extras: ""
		},
		vscode: {
			icon: faFileCode,
			name: "Microsoft Visual Studio Code",
			extras: ""
		},
		intellij: {
			icon: faFileCode,
			name: "IntelliJ IDEA",
			extras: ""
		}
	};

    return(
         <div className="skills mainSection">
                <h1>Skills</h1>
                <div id="languages">
                    <h2>Languages</h2>
                    <span className="language">Greek</span><span>Mother Tongue</span><br />
                    <span className="language">English</span><span>Certificate of Proficiency in English-Univercity of Michigan</span>
                </div>
                <div className="techAndToolsContainer">
                    <div className="tech">
                        <h2>Technologies</h2>
						<ul> {Object.keys(technologies).map(tech => <li key={technologies[tech].name}>
																		<FontAwesomeIcon icon={technologies[tech].icon} className="techIconInner"/><span className="techName">{technologies[tech].name}</span> <span className="techExtras">{technologies[tech].extras}</span>
																	</li>)}
						</ul>
                    </div>
                    <div className="tools">
                        <h2>Tools</h2>
						<ul>
							{Object.keys(tools).map(tool => <li key={tools[tool].name}>
																<FontAwesomeIcon icon={tools[tool].icon} className="toolIconInner"/><span className="toolName">{tools[tool].name}</span> <span className="toolExtras">{tools[tool].extras}</span>
															</li>)}
						</ul>
                    </div>
                </div>
            </div>

    );
}
