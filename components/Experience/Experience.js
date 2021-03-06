import { faCode, faGraduationCap, faMugHot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ExperienceSection from './ExprerienceSection/ExperienceSection';

export const Experience = () => {
    return(
        <div className="experience mainSection">
            <h1>Experience</h1>
            <div className="eduexp">
                <h2>Professional Experience</h2>
				<ExperienceSection header="Cognity S.A (Sept 2021 - Present)"
								   subHeader="Fulltime - Web Developer/ React Developer"
								   imageSource="/ccg_logo.png"
								   listItems={["Developing UIs for complex Web Applications (Coorporate Sales Automation tools and more).",
								   			   "Providing support for projects in production.",
											   "Covering the needs and always meeting expectations of clients (Leading TELCO companies of Greece and Eastern EU).",
											   "Occassionally providing features and hot fixes both on Front-end and Back-end."]}/>
				<ExperienceSection header="Freelancing (Sept 2020 - Present)"
								   subHeader="Fulltime - Full Stack Web Developer"
								   fontIconClass={faCode}
								   listItems={["Requirement Analysis.", "Development, deployment and maintenance of all aspects of professional, fully functional websites.", "Front-end, Back-end and Database development."]}/>
				<ExperienceSection header="Megaventory Inc. (Jan 2020 - Jun 2020)"
								   subHeader="Fulltime - Full Stack Web Developer"
								   imageSource="/Megaventory_logo.png"
								   listItems={["Worked as a member of the team, both remotely and in person.",
								   		       "Got myself involved a lot with APIs by integrating Megaventory with third party applications.",
											   "I have gained experience both in front-end and back-end, either by resolving bugs or implementing new features.",
											   "Got involved daily with technologies such as: HTML, CSS, javaScript, VB.Net, C#, SQL, DevExpress, Visual Studio, Git, Ms SQL Server."]}/>
				<ExperienceSection header="Cafeteria &#38; Take Away Coffee Shop (2011 - 2015)"
									subHeader="Barista - Responsible for coffee post"
									fontIconClass={faMugHot}
									listItems={["Got used to taking Responsibilities.",
												"Worked under difficult circumstances, on very demanding environments.",
												"Worked in a team environment on a daily basis.",
												"Direct communication, cooperation, organizing with the other members of the team."]}/>

                <h2>Education</h2>
				<ExperienceSection header="University of Piraeus"
								   subHeader="Department of Informatics - Technology of Software and Intelligent Systems direction"
								   imageSource="/unipi-logo.png"
								   listItems={["Technologies taught: C#, Java, basics of web development(HTML, CSS, Javascript), OOP, Machine Learning Algorithms, A.I concepts, Multimedia(compression/decompression algorithms), Unity3D, Android Development and more.",
											   "I found me more interested in Web Development and Desktop Application Development, using OOP concepts, C#, CSS, HTML, and JavaScript.",
											   "I had the chance to implement various projects individually and as a member of a team."]} />
				<ExperienceSection header="High School Diploma (2009)"
								   subHeader="Direction of Exact / Technological Sciences"
								   fontIconClass={faGraduationCap}
								   listItems={["Attracted to exact sciences from an early age.", "I was better at programming, being fascinated by the idea of automating things.", "Software Development has been my dream job ever since."]}/>
				<ExperienceSection header="Certificate of Proficiency in English (2007)"
								   subHeader="University of Michigan"
								   fontIconClass={faGraduationCap}
								   listItems={["Writing, reading and speaking English since i was a child.", "Able to communicate through text or speech at a professional level."]} />
            </div>
        </div>
    );
}