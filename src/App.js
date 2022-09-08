import React, { useState } from 'react'
import "./App.css"
import ExpenseData from "./components/Expense App/Data/ExpenseData"
import Expense from './components/Expense App/ExpenseBody/Expenses/Expense'
import ExpenseTitle from "./components/Expense App/ExpenseTitle/ExpenseTitle"

const App = () => {

  const [expenseData , setExpenseData] = useState(ExpenseData)

  const addExpense = (data) => {
    // console.log("App" , data)
    setExpenseData((prevExpense) => {
      return [data , ...prevExpense]
    })
    // console.log("App" , expenseData)
  }
  
  return (
    <div className='App'>
      <ExpenseTitle addExpense = {addExpense}/>
      <div>
      <Expense items={expenseData} />
      </div>
    </div>
  )
}

export default App