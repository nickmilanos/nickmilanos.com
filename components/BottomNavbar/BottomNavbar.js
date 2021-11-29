import React from 'react';
import {scrollDown} from '../../UtilityFunctions';

class BottomNavbar extends React.Component {

    clickPortfolioHandler = () => {
        scrollDown(".portfolio");
    }

    clickSkillsHandler = () => {
        scrollDown(".skills");
    }

    clickExperienceHandler = () => {
        scrollDown(".experience");
    } 

	clickContactHandler = () => {
		scrollDown(".contact");
	}

	render(){

		return(
			<ul className="bottomNavbar">
				<li onClick={this.clickPortfolioHandler}>PORTFOLIO</li>
				<li onClick={this.clickSkillsHandler}>SKILLS</li>
				<li onClick={this.clickExperienceHandler}>EXPERIENCE</li>
				<li onClick={this.clickContactHandler}>CONTACT</li>
			</ul>
		);

	}

}

export default BottomNavbar