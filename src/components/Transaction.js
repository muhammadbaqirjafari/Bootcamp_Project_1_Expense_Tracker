import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transaction = (props) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = props.amount < 0 ? '-' : '+';

    return (
        <>
            <li className={props.amount >=0 ? 'plus' : 'minus'} key={props.id}>
                {props.text} <span>{sign}${Math.abs(props.amount)}</span>
                <button className="delete-btn" onClick={() => deleteTransaction(props.id)}></button>
            </li>  
        </>
    )
}
