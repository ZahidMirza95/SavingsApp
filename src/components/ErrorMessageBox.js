import React from 'react';
import '../App.css';
//List of ALL transactions goes in here
const ErrorMessageBox = ({message, xPos, yPos, invisible}) => {
    return(
        <div className='errorMessage' id = 'error' style={{left: xPos + 'px', top: yPos + 'px', visibility: invisible ? 'hidden':'visible'}}>
            {message}
        </div>
    );
};

export default ErrorMessageBox;
