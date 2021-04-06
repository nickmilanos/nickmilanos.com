import {useEffect, useState} from 'react';

export const moveToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

export const scrollDown = (target) => document.querySelector(target).scrollIntoView();

export const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        const {innerWidth: width, innetHeight: height} = window;
        return {width, height};
    }

    let [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        let timeoutId = null;
        const resizeHandler = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setWindowDimensions(getWindowDimensions());
            }, 100)
        }
        
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return windowDimensions;
}