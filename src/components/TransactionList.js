import React from 'react';
import '../App.css';
import Transaction from '../components/Transaction';
//List of ALL transactions goes in here
const TransactionList = ({transactionsDict, setTransactionsDict, transactions, setTransactions, balance, setBalance}) => {
    //let dates = Object.keys(transactionsDict);
    //console.log("DICT TRANSACTIONS");
    //console.log(transactionsDict);
    //let listDates;
    //listDates = dates.map(date => (<h1> {date} </h1>))
    let listToRender = [];
    for(var date in transactionsDict) {
        listToRender.push(<h1 key={date}>{date}</h1>);
        for(var i = 0; i < transactionsDict[date].length; i++) {
            listToRender.push(<Transaction
                transactions={transactions}
                setTransactions={setTransactions}
                transactionsDict={transactionsDict}
                setTransactionsDict={setTransactionsDict}
                id = {transactionsDict[date][i].id}
                name = {transactionsDict[date][i].name}
                amount = {transactionsDict[date][i].amount}
                comment = {transactionsDict[date][i].comment}
                date = {date}
                balance = {balance}
                setBalance = {setBalance}
            />);
        }
    }
    return(
        <div className ="transactions">
            <ul className='transactionList'>
                {/*Map each transaction from the list to a React Component*/}
                {/*dates.map(date => (
                    <li>{date}</li>
                ))*/
                }
                {listToRender}
            </ul>
        </div>
    );
}

export default TransactionList;