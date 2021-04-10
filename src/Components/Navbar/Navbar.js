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
        <>
            <ul className={`navbar ${isNavbarVisible && width < 812 ? "navbarVisible" : ""}`}>
                    <li onClick={clickAboutMeHandler}>About me</li>
                    <li onClick={clickPortfolioHandler}>Portfolio</li>
                    <li onClick={clickSkillsHandler}>Skills</li>
                    <li onClick={clickExperienceHandler}>Experiences</li>
                    <li onClick={clickContactHandler}>Contact</li>
            </ul>
            <div id="burger" onClick={onClickHandler} className={isNavbarVisible && width < 812 ? "burgerWhenNavbarVisible" : ""}>
                <i className="fa fa-bars"></i>
            </div>
        </>
    );
}