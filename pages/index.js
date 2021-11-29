import React, {useState, useEffect} from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import {Portfolio} from '../components/Portfolio/Portfolio';
import {Skills} from '../components/Skills/Skills';
import {Experience} from '../components/Experience/Experience';
import {Contact} from '../components/Contact/Contact';
import BottomNavbar from '../components/BottomNavbar/BottomNavbar';
import {UpButton} from '../components/UpButton/UpButton';
import Head from 'next/head';

const Home = () => {
	let [isUpButtonVisible, setIsupButtonVisible] = useState(false);

	useEffect(() => {
		if(typeof window !== undefined){
			window.addEventListener('scroll', () => {
				setIsupButtonVisible(document.documentElement.scrollTop !== 0);
			});
		}
	}, [])
  
	return (
	  <div>
		  <Head>
				<title>Nick Milanos</title>
				<meta name="author" content="Nick Milanos"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Nick Milanos's Personal Website/ Interactive Portfolio, made with React.js/Next/js"/>
				<link rel="shortcut icon" type="image/x-icon" href="/laptop.ico"></link>
		  </Head>
		  <HeroImage />
		  <div className="mainContainer">
				<Portfolio />
				<Skills />
				<Experience />
				<Contact />
				<BottomNavbar />
		  </div>
		  <UpButton visibility={isUpButtonVisible} />
	  </div>
	);
}

export default Home;