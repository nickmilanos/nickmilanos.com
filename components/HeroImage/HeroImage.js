import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { scrollDown } from '../../UtilityFunctions.ts';
import Navbar from '../Navbar/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SocialMediaIconsSchema from './SocialMediaIconsSchema';
import PersonalInfoSchema from './PersonalInfoSchema';

const HeroImage = ({}) => {

	let [isTextVisible, setIsTextVisible] = useState(false);
	let [width, setWidth] = useState("");

	useEffect(() => {
		setIsTextVisible(true);
		setWidth(typeof window !== undefined ? window.innerWidth : "");
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
							{PersonalInfoSchema().map(item => <li key={item}> <span className="infoHeader">{item.header}</span> <span className="infoElement">{item.content}</span> </li>)}
						</ul>
						<div className="socialMedia">
							{
								SocialMediaIconsSchema().map(item => <a className="socialMediaIcon" href={item.link} target="_blank" rel="noopener noreferrer" key={item.link}><FontAwesomeIcon icon={item.icon}/></a>)
							}
						</div>
						</div> : 
						<ul>
							{PersonalInfoSchema().map(item => <li key={item}> <span className="infoHeader">{item.header}</span> <span className="infoElement">{item.content}</span> </li>)}
						</ul> }
					</div>
					<div className="seeMoreButton btn btn-5" onClick={scrollDownButtonHandler}>SCROLL FOR MORE</div>
				</div>
			</div>
		</div>
	);

}

export default HeroImage;