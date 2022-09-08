import React from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'

const NewExpense = (props) => {

  const onSaveData = (enteredData) => {
    const data = {
      ...enteredData,
      id : Math.random().toString()
    }
    // console.log("newExpense"  , data)
    props.addExpense(data)
  }

  return (
    <div>
        <ExpenseForm onSaveData = {onSaveData} setDisplay={props.setDisplay}/>
    </div>
  )
}

export default NewExpense