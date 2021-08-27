import React from 'react';

export const ExperienceSection = ({header, subHeader, imageSource, fontIconClass, listItems}) => {
	return(
		<div className="expSection">
			<div className="eduHeaderSection">
				{imageSource ? <img src={imageSource} /> : <i className={fontIconClass}></i>}
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