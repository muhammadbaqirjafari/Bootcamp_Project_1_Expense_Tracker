import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
    // Two states for storing amount entered and text entered
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    
    // Desctructuring addTransaction callBack fn
    const {addTransaction} = useContext(GlobalContext);

    function onSubmit(e) {
        e.preventDefault();

        // Creating new Transaction
        const newTransaction = {
            id: Math.floor(Math.random()* 100000000), // Random ID
            text,
            amount: +amount // Plus before the var means it is number variable
        }

        // Clearing Form
        if(text) setText('');
        if(amount) setAmount(0);

        // Adding it to transactions list
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                     <br /> (negative - expense, positive - income)
                     </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
