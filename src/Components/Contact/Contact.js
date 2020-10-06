import React from 'react';

export const Contact = () => {
    return(
        <div id="contact">
            <h1>Contact</h1>
            <div id="inner_contact">
                <div id="epilogue">
                    <p>
                        <i>Thank you for visiting my website!<br />
                            It was an honour.<br />
                            I would be glad to know your opinion about my work or
                            answer any question about the implementation.
                            If you have any tips/recommendations that will make me a better programmer,
                            i would be glad to hear from you.
                            Furthermore, if you would like to integrate me to your team, hire me, or just assign a project to me, 
                            feel free to contact me.
                        </i>
                    </p>
                </div>
                <div id="contacts">
                    <a target="_blank" href="https://www.linkedin.com/in/nick-milanos-879517177/"><i class="fab fa-linkedin fa-2x"></i><span>https://www.linkedin.com/in/nick-milanos-879517177/</span></a><br />
                    <a target="_blank" href="https://github.com/nickmilanos"><i class="fab fa-github fa-2x"></i><span>https://github.com/nickmilanos</span></a><br />
                    <a target="_blank" href="https://www.facebook.com/nikos.milan"><i class="fab fa-facebook-square fa-2x"></i><span>https://www.facebook.com/nikos.milan</span></a><br />
                    <a id="mail"><i class="fas fa-at fa-2x"></i><span>nickmilanos@hotmail.com</span></a>
                </div>
            </div>
            <div id="backToTop"><i class="fas fa-angle-double-up fa-2x"></i></div>
        </div>
    );
}