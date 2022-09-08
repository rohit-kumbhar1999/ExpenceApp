import React from 'react'
import ChartBar from '../ChartBar/ChartBar'
import "./chart.css"

const Chart = (props) => {
    const dataPoint = props.monthData.map(item=>item.entry)
    const MaxPrice = Math.max(...dataPoint)
  return (
    <div>
        <div className='progressBar'>
        {
            props.monthData.map((item)=>
                <div className='pro' key={item.month}>
                    <ChartBar height={item.entry} MaxPrice={MaxPrice}/>
                    <p id='monthdata'>{item.month}</p>
                </div>   
            )
        }
    </div>
    <hr />

    </div>
  )
}

export default Chart