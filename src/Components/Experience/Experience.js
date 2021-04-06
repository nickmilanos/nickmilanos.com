import React from 'react';

export const Experience = () => {
    return(
        <div className="experience mainSection">
            <h1>Experiences</h1>
            <div className="eduexp">
                <h2>Education</h2>
                <div className="expSection">
                    <span className="expSectionHeader"><span className="boldPart">University of Piraeus</span> (last semester)</span><br />
                    <span className="expSecondarySectionHeader">Department of Informatics - Technology of Software and Intelligent Systems direction</span>
                    <p className="eduExpDetails">
                        Technologies taught: C#, Java, basics of web developmeuunt(HTML, CSS, Javascript), OOP, Machine Learning Algorithms, A.I concepts, Multimedia(compression/decompression algorithms), Unity3D, Android Development and more.<br />
                        I found me more interested in Web Development and Desktop Application Development, using OOP concepts, C#, CSS, HTML, and JavaScript.<br />
                        I had the chance to implement various projects individually and as a member of a team.
                    </p>
                </div>
                <div className="expSection">
                    <span className="expSectionHeader"><span className="boldPart">High School Diploma</span> (2009)</span>
                    <p className="eduExpDetails">
                        Attracted to exact sciences from an early age.<br />I was better at programming,
                        being fascinated by the idea of automating things.<br />Software Development has been my dream job ever since.
                    </p>
                </div>

                <h2>Professional Experience</h2>
                <div className="expSection">
                    <span className="expSectionHeader"><span className="boldPart"><a href="https://www.megaventory.com/">Megaventory Inc.</a></span>  (Jan 2020 - Jun 2020)</span><br />
                    <span className="expSecondarySectionHeader">Fulltime - Junior Full Stack Web Developer</span>
                    <ul className="eduExpDetails">
                        <li>I have worked as a member of the team, both remotely and in person</li>
                        <li>Got myself involved a lot with APIs by integrating Megaventory with third party applications</li>
                        <li>I have gained experience both in front-end and back-end, either by resolving bugs or implementing new features</li>
                        <li>Got involved daily with technologies such as: HTML, CSS, javaScript, VB.Net, C#, SQL, DevExpress, Visual Studio, Git, Ms SQL Server</li>
                    </ul>
                </div>
                <div className="expSection">
                    <span className="expSectionHeader"><span className="boldPart">Barista - Responsible for coffee post</span></span>
                    <p className="eduExpDetails baristaDescription">I have obtained invaluable experiences and skills, such as:</p>
                    <ul className="eduExpDetails">
                        <li>Taking Responsibilities</li>
                        <li>Working under difficult circumstances, on very demanding environments</li>
                        <li>Daily working in a team environment</li>
                        <li>Direct communication, cooperation, organizing with the other members of the team.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}