import React from 'react';

export const Contact = () => {
    return(
        <div className="contact mainSection">
            <h1>Contact</h1>
            <div id="inner_contact">
				<p>
					Thanks for stopping by!<br />
					Feel free to contact me if you have any tips / recommendations, questions or job offers.
				</p>
                <div className="contacts">
					<a className="contactSectionButton" href="https://www.linkedin.com/in/nick-milanos-879517177/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
					<a className="contactSectionButton" href="https://github.com/nickmilanos" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>
					<a className="contactSectionButton" href="https://www.facebook.com/nikos.milan" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
					<a className="contactSectionButton" href="mailto:nickmilanos@hotmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-at fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
}