import React from 'react';

class ProjectReview extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			width: window.innerWidth
		};
	}

	render(){

		return(
			<div className={`${this.state.width < 768 ? "projectPreviewMobile" : "projectPreview"}`}>
				<div className={`projectPreviewOverlappingSection ${this.props.extraClasses}`}></div>
				<div className="projectPreviewMainSection">
					<div className="projectPreviewMainSectionInner">
						<div className="headerAndDescription">
							<h2>{this.props.header}</h2>
							<p>{this.props.description}</p>
						</div>
						<a className={`visitDemoButton ${this.props.extraButtonClass}`} href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.buttonText}</a>
					</div>
				</div>
			</div>
		);

	}

}

export default ProjectReview;