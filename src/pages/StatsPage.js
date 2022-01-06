import React from "react";
import '../App.css';

function StatsPage(props) {
    const { data } = props.location.state;
    return(
        <div className="App">
            <div id='navbar'>
                <p className='balance'>{parseFloat(data[0]).toFixed(2)}</p>
                <a> Achievements </a>
                <a> Stats </a>
                <a> Home </a>
            </div>
        </div>
    );
}

export default StatsPage;