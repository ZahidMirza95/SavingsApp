import React from 'react';
import '../App.css';
import Transaction from '../components/Transaction';

const TransactionList = ({transactionsDict, setTransactionsDict, balance, setBalance}) => {
    let listToRender = [];
    //The transactions are rendered as follows:
    //Date of the transaction will be listed above ALL of the transactions of that specific date
    //Right now it's sort of inefficient, as it rerenders EVERY single time. Fix this
    for(var date in transactionsDict) {
        listToRender.push(<h1 key={date}>{date}</h1>);
        for(var i = 0; i < transactionsDict[date].length; i++) {
            listToRender.push(<div key = {transactionsDict[date][i].id}>
                <Transaction
                transactionsDict={transactionsDict}
                setTransactionsDict={setTransactionsDict}
                id = {transactionsDict[date][i].id}
                name = {transactionsDict[date][i].name}
                amount = {transactionsDict[date][i].amount}
                comment = {transactionsDict[date][i].comment}
                date = {date}
                balance = {balance}
                setBalance = {setBalance}
                />
            </div>);
        }
    }
    return(
        <div className ="transactions">
            <ul className='transactionList'>
                {listToRender}
            </ul>
        </div>
    );
}

export default TransactionList;