import React from 'react';
import { ContactSection } from './ContactSection/ContactSection';

export const Contact = () => {
    return(
        <div className="contact mainSection">
            <h1>Contact</h1>
            <div id="inner_contact">
                <div className="epilogue">
                    <p>
                        Thanks for stopping by!<br />
                        Feel free to contact me if you have any tips / recommendations, questions or job offers.
                    </p>
                </div>
                <div className="contacts">
					<ContactSection icon="fab fa-linkedin fa-2x" link="https://www.linkedin.com/in/nick-milanos-879517177/" linkText="Linkedin Profile" text=""/>
					<ContactSection icon="fab fa-github fa-2x" link="https://github.com/nickmilanos" linkText="Github Account" text=""/>
					<ContactSection icon="fab fa-facebook-square fa-2x" link="https://www.facebook.com/nikos.milan" linkText="Facebook Account" text=""/>
					<ContactSection icon="fas fa-at fa-2x" link="mailto:nickmilanos@hotmail.com" linkText="Message Me" text=""/>
                </div>
            </div>
        </div>
    );
}