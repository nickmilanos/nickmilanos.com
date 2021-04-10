import React, {useEffect, useState} from 'react';
import '../Styles/App.scss';
import {AboutMe} from './AboutMe/AboutMe';
import {Contact} from './Contact/Contact';
import {Experience} from './Experience/Experience';
import {HeroImage} from './HeroImage/HeroImage';
import {Portfolio} from './Portfolio/Portfolio';
import {Skills} from './Skills/Skills';
import {UpButton} from './UpButton/UpButton';

export const App = () =>  {
  let [isUpButtonVisible, setIsupButtonVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsupButtonVisible(document.documentElement.scrollTop !== 0);
    });
  }, [])

  return (
    <div>
      <HeroImage />
      <div className="mainContainer">
        <AboutMe />
        <Portfolio />
        <Skills />
        <Experience />
        <Contact />
      </div>
      <UpButton visibility={isUpButtonVisible} />
    </div>
  );
}