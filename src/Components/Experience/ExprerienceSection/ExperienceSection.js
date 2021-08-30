import Aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

class ExperienceSection extends React.Component {

	componentDidMount(){

		Aos.init({
			delay: 0
		});

	}

	render(){

		return(
			<div className="expSection" data-aos="fade-right">
				<div className="eduHeaderSection">
					{this.props.imageSource ? <img src={this.props.imageSource} /> : <i className={this.props.fontIconClass}></i>}
					<div className="eduHeaderDescription">
						<span className="expSectionHeader"><strong>{this.props.header}</strong></span><br />
						<span className="expSecondarySectionHeader"><strong>{this.props.subHeader}</strong></span>
					</div>
				</div>
				<ul className="eduExpDetails">
					{this.props.listItems.map((item, index) => <li key={`${this.props.header}${index}`}>{item}</li>)}
				</ul>
			</div>
		);

	}

}

export default ExperienceSection;