import React, { useState, useEffect } from 'react';
import '../App.css';
import Form from '../components/Form';
import TransactionList from '../components/TransactionList';
import ErrorMessageBox from '../components/ErrorMessageBox';
import { Link } from 'react-router-dom';

function HomePage() {
    //Variable declarations
    const [balance, setBalance] = useState(0.00);
    const [lastAmount, setLastAmount] = useState(0.00);
    const [transactionsDict, setTransactionsDict] = useState({});
    const [amountsAdded, setAmountAdded] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
  
    useEffect(() => {
      getLocalTransactions();
    }, []);
  
    useEffect(() => {
      saveLocalTransactions();
    }, [transactionsDict]);
  
    const saveLocalTransactions = () => {
      /*console.log("saving transactions");
      console.log(localStorage.getItem("transactions"));
      console.log(transactionsDict);*/
      localStorage.setItem("transactions", JSON.stringify(transactionsDict));
      localStorage.setItem("balance", JSON.stringify(balance));
    };
  
    const getLocalTransactions = () => {
      /*console.log("getting transactions");
      console.log(localStorage.getItem("transactions"));*/
      if(localStorage.getItem("transactions") === null) {
        localStorage.setItem("transactions", JSON.stringify({}));
      }
      else {
        const localTransactions = localStorage.getItem("transactions");
        setTransactionsDict(JSON.parse(localTransactions));
      }
      if(isNaN(localStorage.getItem("balance")) || localStorage.getItem("balance") === null) {
        localStorage.setItem("balance", JSON.stringify(0));
      }
      else {
        setBalance(JSON.parse(localStorage.getItem("balance")));
      }
    };
  
    //Makes the navbar appear on scroll
    /*window.onscroll = function() {scrollFunction()};
  
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-50px";
      }
    }*/
  
    return (
      <div className="App">
        <div id='navbar'>
          <p className='balance'>{parseFloat(balance).toFixed(2)}</p>
          <Link to={"/achievements"} state={[balance, transactionsDict]}>Achievements</Link>
          <Link to={"/stats"} state={[balance, transactionsDict]}> Stats </Link>
          <Link to={"/"}> Home </Link>
          <p className= {lastAmount >= 0.0 ? 'lastAmount positive':'lastAmount negative'} id='lastAmount'>
          {lastAmount}
          </p>
        </div>
        <h1 className='balanceMain'> {parseFloat(balance).toFixed(2)} </h1>
        <Form 
        transactionsDict = {transactionsDict}
        setTransactionsDict = {setTransactionsDict}
        setBalance={setBalance} 
        balance={balance}
        setLastAmount={setLastAmount}/>
        <TransactionList 
        transactionsDict = {transactionsDict}
        setTransactionsDict = {setTransactionsDict} 
        balance = {balance} 
        setBalance = {setBalance}/>
        <ErrorMessageBox
        message="TEST MESSAGE"
        xPos={200}
        yPos={300}
        invisible={true}
        />
      </div>
    );
  }
  
  export default HomePage;
