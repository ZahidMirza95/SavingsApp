import React from "react";
import "../App.css";
import {Link} from 'react-router-dom';

const NavBar = ({balance, transactionsDict}) => {

    return(
        <div id='navbar'>
            <p className='balance'>{parseFloat(balance).toFixed(2)}</p>
            <Link to={"/achievements"} state={[balance, transactionsDict]}>
                Achievements
            </Link>
            <Link to={"/stats"} state={[balance, transactionsDict]}>
                Stats
            </Link>
            <Link to={"/"}>
                Home
            </Link>
        </div>
    );
};

export default NavBar;