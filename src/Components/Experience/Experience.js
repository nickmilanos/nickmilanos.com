import React from 'react';
import {ExperienceSection} from './ExprerienceSection/ExperienceSection';

export const Experience = () => {
    return(
        <div className="experience mainSection">
            <h1>Experiences</h1>
            <div className="eduexp">
                <h2>Education</h2>
				<ExperienceSection header="University of Piraeus"
								   subHeader="Department of Informatics - Technology of Software and Intelligent Systems direction"
								   imageSource="/unipi-logo.png"
								   listItems={["Technologies taught: C#, Java, basics of web development(HTML, CSS, Javascript), OOP, Machine Learning Algorithms, A.I concepts, Multimedia(compression/decompression algorithms), Unity3D, Android Development and more.",
											   "I found me more interested in Web Development and Desktop Application Development, using OOP concepts, C#, CSS, HTML, and JavaScript.",
											   "I had the chance to implement various projects individually and as a member of a team."]} />
				<ExperienceSection header="High School Diploma (2009)"
								   subHeader="Direction of Exact / Technological Sciences"
								   fontIconClass="fas fa-graduation-cap"
								   listItems={["Attracted to exact sciences from an early age.", "I was better at programming, being fascinated by the idea of automating things.", "Software Development has been my dream job ever since."]}/>


                <h2>Professional Experience</h2>
				<ExperienceSection header="Freelancing (Sept 2020 - Jul 2021)"
								   subHeader="Fulltime - Junior Full Stack Web Developer"
								   fontIconClass="fas fa-code"
								   listItems={["Requirement Analysis", "Development, deployment and maintenance of all aspects of professional, fully functional websites", "Front-end, Back-end and Database development"]}/>
				<ExperienceSection header="Megaventory Inc. (Jan 2020 - Jun 2020)"
								   subHeader="Fulltime - Junior Full Stack Web Developer"
								   imageSource="/Megaventory_logo.png"
								   listItems={["I have worked as a member of the team, both remotely and in person",
								   		       "Got myself involved a lot with APIs by integrating Megaventory with third party applications",
											   "I have gained experience both in front-end and back-end, either by resolving bugs or implementing new features",
											   "Got involved daily with technologies such as: HTML, CSS, javaScript, VB.Net, C#, SQL, DevExpress, Visual Studio, Git, Ms SQL Server"]}/>
				<ExperienceSection header="Cafeteria &#38; Take Away Coffee Shop (2011 - 2015)"
									subHeader="Barista - Responsible for coffee post"
									fontIconClass="fas fa-mug-hot"
									listItems={["Got used to taking Responsibilities",
												"Worked under difficult circumstances, on very demanding environments",
												"Worked in a team environment on a daily basis",
												"Direct communication, cooperation, organizing with the other members of the team."]}/>
            </div>
        </div>
    );
}