import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ExperienceSection = ({imageSource, fontIconClass, header, subHeader, listItems}) => {
	let [isImageVisible, setIsImageVisible] = useState(false);

	useEffect(() => {
		Aos.init({
			delay: 0
		});
		if(typeof window !== "undefined"){
			let windowWidth = window.innerWidth;
			if(windowWidth > 380) setIsImageVisible(true);
		}
	}, []);

	return(
		<div className="expSection" data-aos="fade-right">
			<div className="eduHeaderSection">
				{isImageVisible ? imageSource ? <div className="imageWrapper"><Image src={imageSource} alt="Experience Section Image" width="60" height="60" className="expSectionImage"/></div> : <FontAwesomeIcon icon={fontIconClass} className="expSectionIcon"/> : null}
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