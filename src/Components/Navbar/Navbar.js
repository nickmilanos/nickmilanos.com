import React, {useState} from 'react';
import {scrollDown, useWindowDimensions} from '../../UtilityFunctions';

export const Navbar = () => {
    let [isNavbarVisible, setIsNavbarVisible] = useState(false);
    let {width} = useWindowDimensions();
    const onClickHandler = () => {
        setIsNavbarVisible(isNavbarVisible => !isNavbarVisible);
    }

    const clickAboutMeHandler = () => {
        scrollDown(".about_me");
        setIsNavbarVisible(false);
    }

    const clickPortfolioHandler = () => {
        scrollDown(".portfolio");
        setIsNavbarVisible(false);
    }

    const clickSkillsHandler = () => {
        scrollDown(".skills");
        setIsNavbarVisible(false);
    }

    const clickExperienceHandler = () => {
        scrollDown(".experience");
        setIsNavbarVisible(false);
    } 

    const clickContactHandler = () => {
        scrollDown(".contact");
        setIsNavbarVisible(false);
    }

    return(
        <div>
            <div className={`navbar ${isNavbarVisible && width < 700 ? "navbarVisible" : ""}`}>
                    <span className="right" onClick={clickAboutMeHandler}>About me</span>
                    <span className="right" onClick={clickPortfolioHandler}>Portfolio</span>
                    <span className="right" onClick={clickSkillsHandler}>Skills</span>
                    <span className="right" onClick={clickExperienceHandler}>Experiences</span>
                    <span className="right" onClick={clickContactHandler}>Contact</span>
            </div>
            <div id="burger" onClick={onClickHandler} className={isNavbarVisible && width < 700 ? "burgerWhenNavbarVisible" : ""}>
                <i className="fa fa-bars"></i>
            </div>
        </div>
    );
}