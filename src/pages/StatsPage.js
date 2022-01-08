import React from "react";
import '../App.css';
import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

function StatsPage() {
    const location = useLocation();
    const balance = location.state[0];
    const transactionsDict = location.state[1];
    return(
        <div className="App">
            <NavBar balance = {balance} transactionsDict={transactionsDict}/>
            <h1> {balance} </h1>
        </div>
    );
}

export default StatsPage;