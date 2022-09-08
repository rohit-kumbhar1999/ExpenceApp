import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpenseList = (props) => {
    let filterExpenses = <h1> No expenses Found </h1>

    if(props.filteredYear.length > 0){
      filterExpenses = props.filteredYear.map(item=>(
        <ExpenseItem 
          key = {item.id}
          title = {item.title}
          price = {item.price}
          date = {item.date}
        />
      ))
    }
  return (
    <div>
        {filterExpenses}
    </div>
  )
}

export default ExpenseList