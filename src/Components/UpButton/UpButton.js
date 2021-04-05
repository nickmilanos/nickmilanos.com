import React from 'react';
import {moveToTop} from '../../UtilityFunctions';

export const UpButton = ({visibility}) => {
    return(
        <button className={`upButton ${visibility ? 'visible' : 'invisible'}`} onClick={moveToTop} aria-label="Go To Top">
            <i className="fas fa-angle-double-up fa-2x"></i>
        </button>
    );
}