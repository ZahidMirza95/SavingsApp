import React from 'react'
import '../App.css'

const Form = ({setBalance, balance, setTransactions, transactions}) => {
    const submitTransaction = (e) => {
        e.preventDefault(); //Prevents reloading the page
        var amount = parseFloat(parseFloat(document.getElementById('tAmount').value).toFixed(2));
        //If amount isn't null, add it to list. Otherwise don't add it (need to add amount for transaction to be valid)
        //Also need to make sure that the balance when added to the amount doesn't go below 0
        if(!isNaN(amount) && amount !== null && balance + amount >= 0) {
            setTransactions([
                ...transactions, {name: document.getElementById('tName').value, amount: document.getElementById('tAmount').value, comment: document.getElementById('tComment').value, date: document.getElementById('tDate').value, id: Math.random()*1000}
            ]);
            setBalance(balance+amount);
        }
    }

    return(
        <form>
            <input type="text" id ='tName'></input>
            <input type="number" className='amountInput' id='tAmount'></input>
            <input type="text" id='tComment'></input>
            <input type="date" id='tDate'></input>
            <button type='submit' onClick={submitTransaction}>
                Add Transaction
            </button>
        </form>
    );
}

export default Form;