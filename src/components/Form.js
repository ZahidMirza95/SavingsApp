import React from 'react'
import '../App.css'

const Form = ({setBalance, balance, setTransactionsDict, transactionsDict}) => {
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
        //If the amount entered is null or invalid, show a message
        else if(isNaN(amountInput) || amountInput === null) {
            document.getElementById('error').style.visibility = 'visible';
            document.getElementById('error').style.left = '100px';
            document.getElementById('error').innerHTML = "Error: You must specify a valid amount";
            //Error disappears in 3 seconds
            setTimeout(function(){
                document.getElementById('error').style.visibility = 'hidden';
            }, 3000);
            /*document.getElementsByClassName("errorMessage")[0].left = "500px";
            document.getElementsByClassName("errorMessage")[0].top = "500px";
            document.getElementsByClassName("errorMessage")[0].visibility = true;*/
        }
        //If amount entered will cause balance to become negative, show a message here
        else {
            document.getElementById('error').style.visibility = 'visible';
            document.getElementById('error').style.left = '100px';
            document.getElementById('error').innerHTML = "Error: Adding this transaction will cause balance to go negative";
            //Error disappears in 3 seconds
            setTimeout(function(){
                document.getElementById('error').style.visibility = 'hidden';
            }, 3000);
        }
    }

    /**Logic for figuring out today's date in YYYY-mm-dd format*/
    const current = new Date();
    var month = current.getMonth()+1;
    var day = current.getDate();
    if(month < 10) month = '0' + month;
    if(day < 10) day = '0' + day;
    const today = `${current.getFullYear()}-${month}-${day}`;

    return(
        <form className='transactionForm'>
            <h1 className='enterTransaction'> Enter Transaction Info </h1>
            <label htmlFor= 'tName'>Name</label>
            <input type="text" className = 'nameInput' id ='tName'></input>
            <br/>
            <label htmlFor="tAmount">Amount</label>
            <input type="number" className='amountInput' id='tAmount'></input>
            <br/>
            <div className='comment'>
            <label htmlFor="tComment">Comment</label>
            <textarea className = 'commentInput' id='tComment' rows='5' cols='21'/>
            </div>
            <br/>
            <label htmlFor="tDate">Date</label>
            <input defaultValue={today} max={today} type="date" className = 'dateInput'id='tDate'></input>
            <br/>
            <button type='submit' className='transactionSubmit' onClick={submitTransaction}>
                Add Transaction
            </button>
        </form>
    );
}

export default Form;