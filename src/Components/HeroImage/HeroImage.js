import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { scrollDown } from '../../UtilityFunctions';
import Navbar from '../Navbar/Navbar';

class HeroImage extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isTextVisible: false,
			width: window.innerWidth,
			personalInfo: {
			}
		};
	}

	componentDidMount(){
		this.setState((prevState) => ({
			isTextVisible: true,
			personalInfo: {
				Age: `${new Date().getFullYear() - 1991} years`,
				Location: prevState.width > 768 ? <a className="location" href="https://www.google.gr/maps/place/%CE%9A%CE%BF%CF%81%CF%85%CE%B4%CE%B1%CE%BB%CE%BB%CF%8C%CF%82/@37.9868148,23.6318729,14z/data=!3m1!4b1!4m5!3m4!1s0x14a1bb6c6e9ae079:0x3428b0c49e5a6363!8m2!3d37.9845574!4d23.6478138" target="_blank" rel="noopener noreferrer">Korydallos, Athens, Greece<i className="fas fa-map-marker-alt"></i></a> : "Korydallos, Athens",
				"Military Service": "Fulfilled"
			}
		}));
		Aos.init({
			delay: 500,
			duration: 1000
		});
	}

	scrollDownButtonHandler = () => {
		scrollDown(".portfolio");
	}

	render(){
		return(
			<div className="hero_image">
				<Navbar />
				<div className="heroTextOutter" data-aos="fade-up">
					<div className={`heroText ${this.state.isTextVisible ? "isVisible" : ""}`}>
						<h1>Nick Milanos</h1>
						{/* <p>Junior Web Developer</p> */}
					</div>
					<div className="heroDescriptionAndSeeMoreButton">
						<div className="heroDescription">
							<p className="fewWords">
								I am always trying to develop quality, readable and efficient code, regardless of the technologies used.
								Paying attention to details is of great importance in order to deliver top quality software.
								I am able to responsibly follow orders and complete tasks on time.
								I enjoy working on my own and as part of a team.
								I consider myself an adaptive programmer, ready and willing to learn any technology.
							</p>
							<ul>
								{Object.keys(this.state.personalInfo).map(key => <li key={key}> <span className="infoHeader">{key}</span> <span className="infoElement">{this.state.personalInfo[key]}</span> </li>)}
							</ul>
						</div>
						<div className="seeMoreButton btn btn-5" onClick={this.scrollDownButtonHandler}>SCROLL FOR MORE</div>
					</div>
				</div>
					{/* <span onClick={() => scrollDown(".about_me")}><i className="fas fa-angle-double-up fa-2x"></i></span> */}
			</div>
		);
	}

}

export default HeroImage