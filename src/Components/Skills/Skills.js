import React from 'react';

export const Skills = () => {
	const technologies = {
		html5: {
			icon: <i className="fab fa-html5"></i>,
			name: "HTML5",
			extras: ""
		},
		CSS3: {
			icon: <i className="fab fa-css3-alt"></i>,
			name: "CSS3",
			extras: "(+ Flexbox, Media Queries, Animations)"
		},
		sass: {
			icon: <i className="fab fa-sass"></i>,
			name: "Sass",
			extras: ""
		},
		javascript: {
			icon: <i className="fab fa-js"></i>,
			name: "JavaScript",
			extras: "(+ DOM Manipulation, AJAX, JQuery)"
		},
		react: {
			icon: <i className="fab fa-react"></i>,
			name: "React",
			extras: "(+ React Router, Redux, Hooks, Functional Components)"
		},
		node: {
			icon: <i className="fab fa-node"></i>,
			name: "Node.js",
			extras: "(+ Express.js)"
		},
		npm: {
			icon: <i className="fab fa-npm"></i>,
			name: "NPM",
			extras: ""
		},
		java: {
			icon: <i className="fab fa-java"></i>,
			name: "Java",
			extras: ""
		},
		oop: {
			icon: <i className="fas fa-sitemap"></i>,
			name: "Object Oriented Programming",
			extras: ""
		},
		sql: {
			icon: <i className="fas fa-database"></i>,
			name: "SQL / MySql",
			extras: ""
		}
	};

	const tools = {
		ubuntu: {
			icon: <i className="fab fa-ubuntu"></i>,
			name: "Linux",
			extras: "(Ubuntu)"
		},
		windows: {
			icon: <i className="fab fa-windows"></i>,
			name: "Windows",
			extras: ""
		},
		cli: {
			icon: <i className="fas fa-terminal"></i>,
			name: "Command Line Interface",
			extras: "(Linux Terminal)"
		},
		git: {
			icon: <i className="fas fa-code-branch"></i>,
			name: "Git / Github",
			extras: ""
		},
		firefox: {
			icon: <i className="fab fa-firefox"></i>,
			name: "Mozilla Firefox",
			extras: ""
		},
		chrome: {
			icon: <i className="fab fa-chrome"></i>,
			name: "Google Chrome",
			extras: ""
		},
		devTools: {
			icon: <i className="fas fa-tachometer-alt"></i>,
			name: "Chrome DevTools",
			extras: ""
		},
		vim: {
			icon: <i class="far fa-file-code"></i>,
			name: "Vim",
			extras: ""
		},
		msvs: {
			icon: <i class="far fa-file-code"></i>,
			name: "Microsoft Visual Studio",
			extras: ""
		},
		vscode: {
			icon: <i class="far fa-file-code"></i>,
			name: "Microsoft Visual Studio Code",
			extras: ""
		},
		intellij: {
			icon: <i class="far fa-file-code"></i>,
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
																		<span className="techIcon">{technologies[tech].icon}</span> <span className="techName">{technologies[tech].name}</span> <span className="techExtras">{technologies[tech].extras}</span>
																	</li>)}
						</ul>
                    </div>
                    <div className="tools">
                        <h2>Tools</h2>
						<ul>
							{Object.keys(tools).map(tool => <li key={tools[tool].name}>
																<span className="toolIcon">{tools[tool].icon}</span> <span className="toolName">{tools[tool].name}</span> <span className="toolExtras">{tools[tool].extras}</span>
															</li>)}
						</ul>
                    </div>
                </div>
            </div>

    );
}
