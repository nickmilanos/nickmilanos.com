import React from 'react';

export const Contact = () => {
    return(
        <div className="contact mainSection">
            <h1>Contact</h1>
            <div id="inner_contact">
                <div className="epilogue">
                    <p>
                        Thank you for visiting my website!<br />
                        I would be glad to know your opinion about my work, listen to tips/ recommendations or
                        answer to any question about the implementation.
                        Want to integrate me to your team or assign a project to me?
                        Feel free to contact me!
                    </p>
                </div>
                <div className="contacts">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nick-milanos-879517177/"><i className="fab fa-linkedin fa-2x"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/nickmilanos"><i className="fab fa-github fa-2x"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nikos.milan"><i className="fab fa-facebook-square fa-2x"></i></a>
                    <a href="mailto:nickmilanos@hotmail.com"><i className="fas fa-at fa-2x"></i></a>
                </div>
            </div>
        </div>
    );
}