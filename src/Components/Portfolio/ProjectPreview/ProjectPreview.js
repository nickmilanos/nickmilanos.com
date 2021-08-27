import React from 'react';

export const ProjectReview = ({header, description, link, extraClasses, buttonText, extraButtonClass = ""}) => {
	return(
		<div className="projectPreview">
			<div className={`projectPreviewOverlappingSection ${extraClasses}`}></div>
			<div className="projectPreviewMainSection">
				<div className="projectPreviewMainSectionInner">
					<div className="headerAndDescription">
						<h2>{header}</h2>
						<p>{description}</p>
					</div>
					<a className={`visitDemoButton ${extraButtonClass}`} href={link} target="_blank" rel="noopener noreferrer">{buttonText}</a>
				</div>
			</div>
		</div>
	);
}