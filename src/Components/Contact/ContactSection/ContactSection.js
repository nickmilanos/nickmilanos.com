import React from 'react';

export const ContactSection = ({icon, link, linkText, text}) => {
	return(
		<div className="contactSection">
			<div className="contactSectionIcon"><i className={icon}></i></div>
			<span>{text}</span>
			<a className="visitDemoButton contactSectionButton" href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
		</div>
	);
}