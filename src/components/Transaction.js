import React from 'react';
import '../App.css';
//List of ALL transactions goes in here
const Transaction = ({setTransactions, transactions, transactionsDict, setTransactionsDict, name, amount, comment, date, id, balance, setBalance}) => {
    //Delete transaction if button is pressed
    const deleteHandler = () => {
        //Delete transaction only if removing that transaction will NOT leave a negative amount
        //When a transaction gets deleted, adjust the balance accordingly
        /*if(balance - amount >= 0) {
            setTransactions(transactions.filter(el => el.id !== id))
            setBalance(balance-amount);
        }
        //Give a warning if the balance - amount reaches a negative value (i.e. invalid, can't have a negative balance)
        else {

        }*/
        if(balance - amount >= 0) {
            let tempDict = {...transactionsDict};
            tempDict[date] = tempDict[date].filter(el => el.id !== id);
            //If it becomes empty, than remove the date so it doesn't render unneccessarily
            if(tempDict[date].length === 0) {
                delete tempDict[date];
            }
            setTransactionsDict(tempDict);
            setBalance(balance-amount);
        }
        //Give warning to the user if they delete a transaction that will cause them to get a negative balance. They're not allowed to do this
        else {

        }
    }
    return(
        <div className='transaction'>   
            <li className='transaction-item' key={id}>
                <h1> {name} </h1>
                <h1> {amount} </h1>
                <h1> {comment} </h1>
            </li>
            <button className='garbage' onClick = {deleteHandler}>
                <i key={id} className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Transaction;