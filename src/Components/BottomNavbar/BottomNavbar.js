import React from 'react';
import {scrollDown} from '../../UtilityFunctions';

const BottomNavbar = () => {

    const clickPortfolioHandler = () => {
        scrollDown(".portfolio");
    }

    const clickSkillsHandler = () => {
        scrollDown(".skills");
    }

    const clickExperienceHandler = () => {
        scrollDown(".experience");
    } 

	return(
		<ul className="bottomNavbar">
			<li onClick={clickPortfolioHandler}>PORTFOLIO</li>
			<li onClick={clickSkillsHandler}>SKILLS</li>
			<li onClick={clickExperienceHandler}>EXPERIENCE</li>
		</ul>
	);

}

export default BottomNavbar