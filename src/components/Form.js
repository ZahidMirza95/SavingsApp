import React from 'react'
import '../App.css'

const Form = ({setBalance, balance, setTransactions, transactions, setTransactionsDict, transactionsDict}) => {
    const submitTransaction = (e) => {
        e.preventDefault(); //Prevents reloading the page
        var amountInput = parseFloat(parseFloat(document.getElementById('tAmount').value).toFixed(2));
        var dateInput = document.getElementById('tDate').value
        //If amount isn't null, add it to list. Otherwise don't add it (need to add amount for transaction to be valid)
        //Additionally need to make sure the transaction doesn't cause the balance to go negative.
        //Transactions are stored in a hash table, with the key being the date of the transaction (i.e. transactions are grouped by date)
        if(!isNaN(amountInput) && amountInput !== null && balance + amountInput >= 0) {
            //If date already exists, just append to the existing one
            if(transactionsDict.hasOwnProperty(dateInput)) {
                let tempDict = {...transactionsDict};
                tempDict[dateInput] = [...tempDict[dateInput], {name: document.getElementById('tName').value, amount: amountInput, comment: document.getElementById('tComment').value, id: Math.random()*1000}];
                setTransactionsDict(tempDict);
            }
            //If it doesn't, create a new entry by adding the new date to the dictionary
            else {
                let tempDict = {...transactionsDict};
                tempDict[dateInput] = [{name: document.getElementById('tName').value, amount: amountInput, comment: document.getElementById('tComment').value, id: Math.random()*1000}];
                setTransactionsDict(tempDict);
            }
            setBalance(balance+amountInput);
        }
    }

    return(
        <form>
            <h1 className='enterTransaction'> Enter Transaction Info </h1>
            <label htmlFor= 'tName'>Name</label>
            <input type="text" className = 'nameInput' id ='tName'></input>
            <br/>
            <label htmlFor="tAmount">Amount</label>
            <input type="number" className='amountInput' id='tAmount'></input>
            <br/>
            <div className='comment'>
            <label htmlFor="tComment">Comment</label>
            <textarea className = 'commentInput' id='tComment' rows='5'/>
            </div>
            <br/>
            <label htmlFor="tDate">Date</label>
            <input type="date" className = 'dateInput'id='tDate'></input>
            <br/>
            <button type='submit' className='transactionSubmit' onClick={submitTransaction}>
                Add Transaction
            </button>
        </form>
    );
}

export default Form;