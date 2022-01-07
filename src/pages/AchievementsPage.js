import React from "react";
import { useLocation } from "react-router-dom";
import '../App.css';
import Achievement from "../components/Achievement";
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBar";

function AchievementsPage(props) {
    const location = useLocation();
    const balance = location.state[0];
    const transactionsDict = location.state[1];
    const dates = Object.keys(transactionsDict);
    var totalTransactions = 0;
    for(var date in transactionsDict) {
        totalTransactions += transactionsDict[date].length;
    }

    return(
        <div className="App">
            <NavBar balance = {balance} transactionsDict={transactionsDict}/>
            <h1 className="balanceMain"> Achievements </h1>
            <ul className="achievementList">
                <li><Achievement name ="Entered 1 Transaction" message = {Math.min(totalTransactions, 1) + "/1"}/></li>
                <li><Achievement name ="Entered 5 Transactions" message = {Math.min(totalTransactions, 5) + "/5"}/></li>
                <li><Achievement name ="Entered 10 Transactions" message = {Math.min(totalTransactions, 10) + "/10"}/></li>
                <li><Achievement name ="Entered 100 Transactions" message = {Math.min(totalTransactions, 100) + "/100"}/></li>
                <li><Achievement name ="Entered 1 Transaction" message = {Math.min(dates.length, 1) + "/1"}/></li>
                <li><Achievement name ="Entered 1 Transaction" message = {Math.min(dates.length, 1) + "/1"}/></li>
            </ul>
            
        </div>
    );
}

export default AchievementsPage;
