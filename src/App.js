import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TransactionList from './components/TransactionList';

function App() {
  //Variable declarations
  const [balance, setBalance] = useState(0.00);
  const [transactionsDict, setTransactionsDict] = useState({});

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

  return (
    <div className="App">
      <h1 className='balanceMain'> {parseFloat(balance).toFixed(2)} </h1>
      <Form 
      transactionsDict = {transactionsDict}
      setTransactionsDict = {setTransactionsDict}
      setBalance={setBalance} 
      balance={balance}/>
      <TransactionList 
      transactionsDict = {transactionsDict}
      setTransactionsDict = {setTransactionsDict} 
      balance = {balance} 
      setBalance = {setBalance}/>
      <div className='parallelogram'></div>
      <div className='parallelogram2'></div>
    </div>
  );
}

export default App;
