import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const ExperienceSection = ({imageSource, fontIconClass, header, subHeader, listItems}) => {

	useEffect(() => {
		Aos.init({
			delay: 0
		});
	}, []);

	return(
		<div className="expSection" data-aos="fade-right">
			<div className="eduHeaderSection">
				{imageSource ? <img src={imageSource} /> : <span className="iconWrapper"><FontAwesomeIcon icon={fontIconClass}/></span>}
				<div className="eduHeaderDescription">
					<span className="expSectionHeader"><strong>{header}</strong></span><br />
					<span className="expSecondarySectionHeader"><strong>{subHeader}</strong></span>
				</div>
			</div>
			<ul className="eduExpDetails">
				{listItems.map((item, index) => <li key={`${header}${index}`}>{item}</li>)}
			</ul>
		</div>
	);

}

export default ExperienceSection;