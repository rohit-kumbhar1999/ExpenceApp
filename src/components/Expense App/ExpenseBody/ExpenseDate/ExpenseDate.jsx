import React from 'react'
import "./expenseDate.css"

const ExpenseDate = (props) => {
    const d = new Date(props.date)
    const month = d.toLocaleString("en-US",{month : "long"})
    const day = d.toLocaleString("en-US",{day : "2-digit"})
    const year = d.getFullYear()
  return (
    <div>
        <p><strong>{month}</strong> </p>
        <p id='day'>{day} , <span>{year}</span></p>
    </div>
  )
}

export default ExpenseDate