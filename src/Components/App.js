import React from 'react';
import '../Styles/App.scss';
import {AboutMe} from './AboutMe';
import {Contact} from './Contact/Contact';
import {Experience} from './Experience/Experience';
import {HeroImage} from './HeroImage';
import {Portfolio} from './Portfolio/Portfolio';
import {Skills} from './Skills/Skills';

export const App = () =>  {
  return (
    <div>
      <HeroImage />
      <div id="mainContainer">
        <AboutMe />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}