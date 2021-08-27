import React from 'react';
import {scrollDown} from '../../UtilityFunctions';

class Navbar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isNavbarVisible: false,
			width: ""
		};
	}

	getWindowDimensions(){
        const {innerWidth: width, innerHeight: height} = window;
        return {width, height};
    }

	componentDidMount(){
		this.setState({width: this.getWindowDimensions()});
	}

    onClickHandler = () => {
		this.setState(isNavbarVisible => ({isNavbarVisible: !isNavbarVisible}));
    }

    clickPortfolioHandler = () => {
        scrollDown(".portfolio");
		this.setState({isNavbarVisible: false});
    }

    clickSkillsHandler = () => {
        scrollDown(".skills");
		this.setState({isNavbarVisible: false});
    }

    clickExperienceHandler = () => {
        scrollDown(".experience");
		this.setState({isNavbarVisible: false});
    } 

    clickContactHandler = () => {
        scrollDown(".contact");
		this.setState({isNavbarVisible: false});
    }

	render(){

		return(
			<div className="navbarWrapper">
				<div></div>
				<ul className={`navbar ${this.state.isNavbarVisible && this.state.width < 812 ? "navbarVisible" : ""}`}>
						<li onClick={this.clickPortfolioHandler}>Portfolio</li>
						<li onClick={this.clickSkillsHandler}>Skills</li>
						<li onClick={this.clickExperienceHandler}>Experience</li>
						<li onClick={this.clickContactHandler}>Contact</li>
				</ul>
				<div id="burger" onClick={this.onClickHandler} className={this.state.isNavbarVisible && this.state.width < 812 ? "burgerWhenNavbarVisible" : ""}>
					<i className="fa fa-bars"></i>
				</div>
			</div>
		);

	}

}

export default Navbar;