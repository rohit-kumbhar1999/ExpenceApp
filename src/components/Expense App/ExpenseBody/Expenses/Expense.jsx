import React, { useState } from 'react'
import ChartContainer from '../ExpenseChart/ChartContainer/ChartContainer'
import Card from '../../UI/card/Card'
import ExpenseList from '../ExpenseList/ExpenseList'
import FilteredExpense from '../FilteredExpense/FilteredExpense'
import "./expense.css"

const Expense = (props) => {
  const [SelectedYear , setSelectedYear ] = useState("2022")

  const filterChangeHandler = (e) => {
    setSelectedYear(e)
  }

  const filteredYear = props.items.filter((expense) => {return expense.date.getFullYear().toString() === SelectedYear})

  return(
    <Card className = "expense">
      <FilteredExpense selected = {SelectedYear} onChangeFilter={filterChangeHandler} />
      <ChartContainer filteredYear={filteredYear}/>
      <ExpenseList filteredYear ={filteredYear} />
    </Card>
  )
}

export default Expense