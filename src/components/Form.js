import React from 'react'
import '../App.css'

const Form = ({setBalance, balance, setTransactions, transactions, setTransactionsDict, transactionsDict}) => {
    const submitTransaction = (e) => {
        e.preventDefault(); //Prevents reloading the page
        var amountInput = parseFloat(parseFloat(document.getElementById('tAmount').value).toFixed(2));
        var dateInput = document.getElementById('tDate').value
        //If amount isn't null, add it to list. Otherwise don't add it (need to add amount for transaction to be valid)
        //Also need to make sure that the balance when added to the amount doesn't go below 0
        //Original Implementation
        /*if(!isNaN(amountInput) && amountInput !== null && balance + amountInput >= 0) {
            setTransactions([
                ...transactions, {name: document.getElementById('tName').value, amount: amountInput, comment: document.getElementById('tComment').value, date: document.getElementById('tDate').value, id: Math.random()*1000}
            ]);
            setBalance(balance+amountInput);
        }*/
        //Dictionary Implementation
        if(!isNaN(amountInput) && amountInput !== null && balance + amountInput >= 0) {
            //If date already exists, just append
            if(transactionsDict.hasOwnProperty(dateInput)) {
                console.log("HERE");
                let tempDict = {...transactionsDict};
                tempDict[dateInput] = [...tempDict[dateInput], {name: document.getElementById('tName').value, amount: amountInput, comment: document.getElementById('tComment').value, id: Math.random()*1000}];
                setTransactionsDict(tempDict);
            }
            //If it doesn't, create a new entry by adding the new date to the dictionary
            else {
                console.log(typeof(dateInput));
                let tempDict = {...transactionsDict};
                tempDict[dateInput] = [{name: document.getElementById('tName').value, amount: amountInput, comment: document.getElementById('tComment').value, id: Math.random()*1000}];
                setTransactionsDict(tempDict);
            }
            for(var key in transactionsDict) {
                console.log(key);
                console.log(transactionsDict[key]);
            }
            setTransactions([
                ...transactions, {name: document.getElementById('tName').value, amount: amountInput, comment: document.getElementById('tComment').value, date: dateInput, id: Math.random()*1000}
            ]);
            setBalance(balance+amountInput);
        }
    }

    return(
        <form>
            <input type="text" className = 'nameInput' id ='tName'></input>
            <input type="number" className='amountInput' id='tAmount'></input>
            <input type="text" className = 'commentInput' id='tComment'></input>
            <input type="date" className = 'dateInput'id='tDate'></input>
            <button type='submit' onClick={submitTransaction}>
                Add Transaction
            </button>
        </form>
    );
}

export default Form;