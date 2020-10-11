import React from 'react';
import myphotoResized from '../../Resources/myphoto_resized.jpg';
import {fewWordsAboutMe} from '../../Constants';

export const AboutMe = () => {
    return(
        <div className="about_me">
            <h1>About me</h1>
            <div id="about_me_inner">
                <div className="fewWords">
                    <p> {fewWordsAboutMe} </p>
                </div>
                <div id="myPhotoWrap">
                    <img id="myphoto" src={myphotoResized} alt="Nick Milanos"/>
                </div>
                <div className="personalInfo">
                    <h2>Personal Info</h2>
                    <strong>Name</strong><br />
                    Nick Milanos<br />
                    <strong>Age</strong><br />
                    29 years<br />
                    <strong>Location</strong><br />
                    Korydallos, Athens, Greece   <a href="https://www.google.gr/maps/place/%CE%9A%CE%BF%CF%81%CF%85%CE%B4%CE%B1%CE%BB%CE%BB%CF%8C%CF%82/@37.9868148,23.6318729,14z/data=!3m1!4b1!4m5!3m4!1s0x14a1bb6c6e9ae079:0x3428b0c49e5a6363!8m2!3d37.9845574!4d23.6478138" target="_blank"><i class="fas fa-map-marker-alt"></i></a><br />
                    <strong>Marital Status</strong><br />
                    Unmarried<br />
                    <strong>Military Service   <i class="far fa-question-circle"></i></strong><br />
                    Fulfilled
                    <div id="military">
                        <p>
                            <i>In Greece, mandatory military service applies to all capable males.<br />
                                I have served for nine months on a warship of the fleet of hellenic navy, gaining unique experiences and skills, 
                                and being taught patience, responsibility, consistency and how to strictly follow orders.
                            </i>
                        </p>
                    </div>
                </div>
            </div>
            Download my CV:<a href="Resources/CV_Nick_Milanos.pdf" download>Greek        <i class="fas fa-arrow-circle-down"></i></a>
        </div>  
    );
}