import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TransactionList from './components/TransactionList';

function App() {
  //Variable declarations
  const [balance, setBalance] = useState(0.00);
  const [transactions,setTransactions] = useState([]);
  const changeBalance = (amount) => {
    //Do something if the amount is nothing (prompt user to enter an amount)
    if(isNaN(amount)) { 

    }
    //Otherwise add to the amount if it's not going to give them a negative amount
    else if(balance + parseFloat(amount) >= 0) {
      setBalance(balance+parseFloat(parseFloat(amount).toFixed(2)));
    }
    //If the amount would give them a negative amount, let user know this
    else {

    }
  }
  return (
    <div className="App">
      <h1> {parseFloat(balance).toFixed(2)} </h1>
      <Form 
      transactions={transactions} 
      setTransactions = {setTransactions}
      setBalance={setBalance} 
      balance={balance}/>
      <TransactionList 
      transactions={transactions} 
      setTransactions={setTransactions} 
      balance = {balance} 
      setBalance = {setBalance}/>
      <div className='parallelogram'></div>
      <div className='parallelogram2'></div>
    </div>
  );
}

export default App;
