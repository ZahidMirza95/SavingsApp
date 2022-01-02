import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TransactionList from './components/TransactionList';

function App() {
  //Variable declarations
  const [balance, setBalance] = useState(0.00);
  const [transactions,setTransactions] = useState([]);
  const [transactionsDict, setTransactionsDict] = useState({});
  return (
    <div className="App">
      <h1 className='balanceMain'> {parseFloat(balance).toFixed(2)} </h1>
      <Form 
      transactions={transactions} 
      setTransactions = {setTransactions}
      transactionsDict = {transactionsDict}
      setTransactionsDict = {setTransactionsDict}
      setBalance={setBalance} 
      balance={balance}/>
      <TransactionList 
      transactions={transactions} 
      setTransactions={setTransactions}
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
