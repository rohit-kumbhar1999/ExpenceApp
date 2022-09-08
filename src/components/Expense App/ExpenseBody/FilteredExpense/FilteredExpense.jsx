import React from 'react'
import "./filteredExpense.css"

const year = [2022,2021,2020,2019]
const FilteredExpense = (props) => {

    const filteredYear = (e) => {
        props.onChangeFilter(e.target.value)
    }

  return (
    <div id='filter'>
        <h2><strong>Filter By Years</strong> </h2>
        <select name="select" id="select" value={props.Selected} onChange={filteredYear} >
            {
                year.map(item=>{
                    return <option key={item} value={item}>{item}</option>
                })
            }
        </select>
    </div>
  )
}

export default FilteredExpense