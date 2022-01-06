import React from 'react';
import '../App.css';
//List of ALL transactions goes in here
const Transaction = ({transactionsDict, setTransactionsDict, name, amount, comment, date, id, balance, setBalance}) => {
    //Delete transaction if button is pressed
    const deleteHandler = () => {
        //Delete transaction only if removing that transaction will NOT leave a negative amount
        //When a transaction gets deleted, adjust the balance accordingly
        if(balance - amount >= 0) {
            let tempDict = {...transactionsDict};
            tempDict[date] = tempDict[date].filter(el => el.id !== id);
            //If a date doesn't contain any transactions, than remove the date so it doesn't render unneccessarily
            if(tempDict[date].length === 0) {
                delete tempDict[date];
            }
            setTransactionsDict(tempDict);
            setBalance(balance-amount);
        }
        //Give warning to the user if they delete a transaction that will cause them to get a negative balance. They're not allowed to do this
        else {
            document.getElementById('error').style.visibility = 'visible';
            document.getElementById('error').style.left = '50%';
            document.getElementById('error').innerHTML = "Error: Removing this transaction will cause balance to go negative";
            //Error disappears in 3 seconds
            setTimeout(function(){
                document.getElementById('error').style.visibility = 'hidden';
            }, 3000);
        }
    }
    return(
        <div className='transaction' key = {id}>   
            <li className='transaction-item'>
                <h1> {name} </h1>
                <h1 className={amount >= 0 ? 'positive' : 'negative'}> {amount} </h1>
                <h1> {comment} </h1>
            </li>
            <button className='garbage' onClick = {deleteHandler}/>
        </div>
    );
}

export default Transaction;
