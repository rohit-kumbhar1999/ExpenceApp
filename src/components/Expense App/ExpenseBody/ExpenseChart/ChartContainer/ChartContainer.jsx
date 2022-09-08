import React from 'react'
import Chart from '../Chart/Chart'
import "./chartContainer.css"

const ChartContainer = (props) => {

    const monthData = [ 
        {
            month : "JAN",
            entry : 0
        },
        {
            month : "FEB",
            entry : 0
        },
        {
            month : "MAR",
            entry : 0
        },
        {
            month : "APR",
            entry : 0
        },
        {
            month : "MAY",
            entry : 0
        },
        {
            month : "JUN",
            entry : 0
        },
        {
            month : "JUL",
            entry : 0
        },
        {
            month : "AUG",
            entry : 0
        },
        {
            month : "SEP",
            entry : 0
        },
        {
            month : "OCT",
            entry : 0
        },
        {
            month : "NOV",
            entry : 0
        },
        {
            month : "DEC",
            entry : 0
        },
    ]

    for (const expense of props.filteredYear) {

        const expenseMonth = expense.date.getMonth();
    
        monthData[expenseMonth].entry += expense.price;
    
    }

  return (
    <div className='chartOuter'>
        <Chart monthData={monthData} />
    </div>
  )
}

export default ChartContainer