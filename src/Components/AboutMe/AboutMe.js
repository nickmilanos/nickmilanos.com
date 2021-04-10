import React from 'react';
import myphotoResized from '../../Resources/myphoto_resized.jpg';

export const AboutMe = () => {
    return(
        <div className="about_me mainSection">
            <h1>About me</h1>
            <div id="about_me_inner">
                <div className="fewWords">
                    <p>
                        I am always trying to develop quality, readable and efficient code, regardless of the technologies used.
                        Paying attention to details is of great importance in order to deliver top quality software.
                        I am able to responsibly follow orders and complete tasks on time.
                        I enjoy working on my own and as part of a team.
                        I consider myself an adaptive programmer, ready and willing to learn any technology.
                    </p>
                </div>
                <img id="myphoto" src={myphotoResized} alt="Nick Milanos"/>
                <div className="personalInfo">
                    <h2>Personal Info</h2>
                    <span className="infoHeader">Name</span>
                    <span className="infoElement">Nick Milanos</span>
                    <span className="infoHeader">Age</span>
                    <span className="infoElement">29 years</span>
                    <span className="infoHeader">Location</span>
                    <span className="infoElement">Korydallos, Athens, Greece<a href="https://www.google.gr/maps/place/%CE%9A%CE%BF%CF%81%CF%85%CE%B4%CE%B1%CE%BB%CE%BB%CF%8C%CF%82/@37.9868148,23.6318729,14z/data=!3m1!4b1!4m5!3m4!1s0x14a1bb6c6e9ae079:0x3428b0c49e5a6363!8m2!3d37.9845574!4d23.6478138" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a></span>
                    <span className="infoHeader">Marital Status</span>
                    <span className="infoElement">Unmarried</span>
                    <span className="infoHeader">Military Service</span>
                    <span className="infoElement">Fulfilled</span>
                    {/* <div className="military">
                        <p>
                            <i>
                                In Greece, mandatory military service applies to all capable males.<br />
                                I have served for nine months on a warship of the fleet of hellenic navy, gaining unique experiences and skills, 
                                and being taught patience, responsibility, consistency and how to strictly follow orders.
                            </i>
                        </p>
                    </div> */}
                </div>
            </div>
        </div>  
    );
}

// <i className="fas fa-angle-double-up fa-2x"></i>
