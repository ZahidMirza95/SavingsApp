import React from 'react';
import '../App.css';
//List of ALL transactions goes in here
const LastAmount = ({amount}) => {
    return(
        <div className= {amount >= 0.0 ? 'lastAmount positive':'lastAmount negative'} id='lastAmount'>
        {amount}
        </div>
    );
};

export default LastAmount;