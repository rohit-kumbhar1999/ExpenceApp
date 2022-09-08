import React from 'react'
import { useState } from 'react'
import NewExpense from '../NewExpense/NewExpenseItem/NewExpense'
import "./expenseTitle.css"

const ExpenseTitle = (props) => {
  const [display , setDisplay] = useState(true)
  
  const showDisplay = () => {
    setDisplay(!display)
  }

  return (
    <div className='container'>
        <button onClick={showDisplay} id='title' > Add New Expense </button>
        <div>{display ?  "" : 
          <NewExpense addExpense = {props.addExpense} setDisplay={setDisplay}/>
        }
        </div>
    </div>
  )
}

export default ExpenseTitle