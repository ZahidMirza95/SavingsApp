import React from 'react';
import '../App.css';
//List of ALL transactions goes in here
const Achievement = ({name, message}) => {
    return(
        <div className='achievement'>
            <div className='achievementCircle'>
                <h1> {name} </h1>
                <p> {message} </p>
            </div>
        </div>
    );
};

export default Achievement;
