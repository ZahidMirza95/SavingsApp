import React from 'react';
import '../App.css';
import Transaction from '../components/Transaction';
//List of ALL transactions goes in here
const TransactionList = ({transactions, setTransactions, balance, setBalance}) => {
    console.log(transactions);
    return(
        <div className ="transactions">
            <ul className='transactionList'>
                {/*Map each transaction from the list to a React Component*/}
                {transactions.map(transaction => (
                    <Transaction
                    transactions={transactions}
                    setTransactions={setTransactions}
                    id = {transaction.id}
                    name = {transaction.name}
                    amount = {transaction.amount}
                    comment = {transaction.comment}
                    date = {transaction.date}
                    balance = {balance}
                    setBalance = {setBalance}/>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;