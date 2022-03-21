import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Aos from "aos";

const SkillsSection = ({header, listItems, icon}) => {

	useEffect(() => {
		Aos.init({
			delay: 0
		});
	}, []);

	return (
		<div className="skillsSection" data-aos="fade-up">
			<FontAwesomeIcon icon={icon} className="skillsSectionIcon"/>
			<h2>{header}</h2>
			<ul className="skillsSectionList">
				{listItems.map(listItem => <li key={listItem} className={`skillsSectionItem`}>
												<span>{listItem.name}</span>
												<span className="skillsSectionItemNote">{listItem.note}</span>
										   </li>)}
			</ul>
		</div>
	);

}

export default SkillsSection;