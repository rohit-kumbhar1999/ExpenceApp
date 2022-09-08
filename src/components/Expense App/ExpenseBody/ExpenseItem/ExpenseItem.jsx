import React from 'react'
import { useState } from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import "./expenseItem.css"

const ExpenseItem = (props) => {
    const [title , setTitle] = useState(props.title)

    const changeTitle = () => {
        setTitle("PEN");
    }
  return (
    <div>
        <div className="row">
            <div className="col" id="expense-date">
                <div><strong><ExpenseDate date={props.date}/></strong></div>
            </div>
            <div className="col">
                <p id='expenseItem-title'><strong>{title}</strong></p>
            </div>
            <div className="col">
                <div className="btnRow">
                    <div className="col" id='expenseItem-price'>
                        <h2>₹ {props.price}</h2>
                    </div>
                    <div className="col" id='expenseItem-add'>
                        <button onClick={changeTitle}> <h2>Click Me</h2></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpenseItem