import React from 'react';
import {moveToTop} from '../../UtilityFunctions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';

export const UpButton = ({visibility}) => {
    return(
        <button className={`upButton ${visibility ? 'visible' : 'invisible'}`} onClick={moveToTop} aria-label="Go To Top">
			<FontAwesomeIcon icon={faAngleDoubleUp} className="upButtonIcon"/>
        </button>
    );
}