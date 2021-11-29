import React, { useEffect, useState } from 'react';

const ProjectReview = ({extraClasses, header, description, extraButtonClass, link, buttonText}) => {
	let [width, setWidth] = useState();

	useEffect(() => {
		setWidth(typeof window !== undefined ? window.innerWidth : "");
	}, []);

	return(
		<div className={`${width < 768 ? "projectPreviewMobile" : "projectPreview"}`}>
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

export default ProjectReview;