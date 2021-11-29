import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faAt} from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
	const linksSchema = () => [
		{
			link: "https://www.linkedin.com/in/nick-milanos-879517177/",
			icon: faLinkedin
		},
		{
			link: "https://github.com/nickmilanos",
			icon: faGithub
		},
		{
			link: "https://www.facebook.com/nikos.milan",
			icon: faFacebookSquare
		},
		{
			link: "mailto:nickmilanos@hotmail.com",
			icon: faAt
		}
	]

    return(
        <div className="contact mainSection">
            <h1>Contact</h1>
            <div id="inner_contact">
				<p>
					Thanks for stopping by!<br />
					Feel free to contact me if you have any tips / recommendations, questions or job offers.
				</p>
                <div className="contacts">
					{
						linksSchema().map(link => <a key={link.link} className="contactSectionButton" href={link.link} target="_blank" rel="noopener noreferrer">
													<FontAwesomeIcon icon={link.icon} className="contactIcon"/>
												</a>)
					}
                </div>
            </div>
        </div>
    );
}