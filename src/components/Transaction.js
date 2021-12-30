import React from 'react';
import '../App.css';
//List of ALL transactions goes in here
const Transaction = ({setTransactions, transactions, name, amount, comment, date, id, balance, setBalance}) => {
    //Delete transaction if button is pressed
    const deleteHandler = () => {
        setTransactions(transactions.filter(el => el.id !== id))
        //When a transaction gets deleted, adjust the balance accordingly
        setBalance(balance-amount);
    }
    return(
        <div className='transaction'>   
            <li className='transaction-item'>
                <h1> {date} </h1>
                <h1> {name} </h1>
                <h1> {amount} </h1>
                <h1> {comment} </h1>
            </li>
            <button className='garbage' onClick = {deleteHandler}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Transaction;