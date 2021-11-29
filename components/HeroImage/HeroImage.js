import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { scrollDown } from '../../UtilityFunctions';
import Navbar from '../Navbar/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';

const HeroImage = ({}) => {

	let [isTextVisible, setIsTextVisible] = useState(false);
	let [width, setWidth] = useState("");
	let [personalInfo, setPersonalInfo] = useState({});

	useEffect(() => {
		setIsTextVisible(true);
		setWidth(typeof window !== undefined ? window.innerWidth : "");
		setPersonalInfo({
			Age: `${new Date().getFullYear() - 1991} years`,
			Location: width > 768 ? <a className="location" href="https://www.google.gr/maps/place/%CE%9A%CE%BF%CF%81%CF%85%CE%B4%CE%B1%CE%BB%CE%BB%CF%8C%CF%82/@37.9868148,23.6318729,14z/data=!3m1!4b1!4m5!3m4!1s0x14a1bb6c6e9ae079:0x3428b0c49e5a6363!8m2!3d37.9845574!4d23.6478138" target="_blank" rel="noopener noreferrer">Korydallos, Athens, Greece</a> : "Korydallos, Athens",
			"Military Service": "Fulfilled"
		});
		Aos.init({
			delay: 500,
			duration: 1000
		});
	}, []);

	const scrollDownButtonHandler = () => {
		scrollDown(".portfolio");
	}

	return(
		<div className="hero_image">
			<Navbar />
			<div className="heroTextOutter" data-aos="fade-up">
				<div className={`heroText ${isTextVisible ? "isVisible" : ""}`}>
					<h1>Nick Milanos</h1>
				</div>
				<div className="heroDescriptionAndSeeMoreButton">
					<div className="heroDescription">
						<p className="fewWords">
							Web Developer, always trying to create readable and efficient code.
							I enjoy creating eye-catching, intuitive UIs as much as getting involved with backend code and business logic.
							I have worked both as a member of a team and as an individual freelancer and enjoyed both a lot.
							Curious with new technologies, i try to learn something new everyday or master something i already know.
						</p>
						{width > 768 ? <div className="infoListAndSocialMedia">
						<ul>
							{Object.keys(personalInfo).map(key => <li key={key}> <span className="infoHeader">{key}</span> <span className="infoElement">{personalInfo[key]}</span> </li>)}
						</ul>
						<div className="socialMedia">
							<a className="socialMediaIcon" href="https://www.linkedin.com/in/nick-milanos-879517177/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
							<a className="socialMediaIcon" href="https://github.com/nickmilanos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
							<a className="socialMediaIcon" href="https://www.facebook.com/nikos.milan" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookSquare} /></a>
							<a className="socialMediaIcon" href="mailto:nickmilanos@hotmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faAt} /></a>
						</div>
						</div> : 
						<ul>
							{Object.keys(personalInfo).map(key => <li key={key}> <span className="infoHeader">{key}</span> <span className="infoElement">{personalInfo[key]}</span> </li>)}
						</ul> }
					</div>
					<div className="seeMoreButton btn btn-5" onClick={scrollDownButtonHandler}>SCROLL FOR MORE</div>
				</div>
			</div>
		</div>
	);

}

export default HeroImage;