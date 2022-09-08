import React from 'react'
import { useState } from 'react'
import "./expenseForm.css"

const ExpenseForm = (props) => {
    const [detail , setDetail] = useState({});

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setDetail(values =>({...values , [name]: value}))
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title : detail.title,
            price : +detail.price,
            date : new Date(detail.date)
        }
        // console.log("form" , expenseData)
        props.onSaveData(expenseData);
        props.setDisplay(true)

        // setShow(true)
        // setDetail(values=>({}))

    }
    // const [title , setTitle] = useState("");
    // const [amt , setAmt] = useState(0);
    // const [date , setDate] = useState("");

    // const setTitleName = (event) => {
    //     setTitle(event.target.value)
    // }

    // const setAmountValue = (event) => {
    //     setAmt(event.target.value)
    // }

    // const setDateValue = (event) => {
    //     setDate(event.target.value)
    // }

    // const displayDetail = () => {
    //     console.log(title)
    //     console.log(amt)
    //     console.log(date)
    //     setTitle("")
    //     setAmt("")
    //     setDate("")
    // }
  return (
    <>
        <div className="form">
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your expense!</div>
            <form onSubmit={onHandleSubmit}>
            <div className="input-container ic1">
                <input
                 name="title"
                 id="ExpenseTitle"
                 className="input"
                 type="text"
                 onChange={handleChange}
                 value={detail.title || ""}
                />
                <label className="placeholder">Expense Title</label>
            </div>
            <div className="input-container ic2">
                <input
                 name="price"
                 id="ExpenseAmount"
                 className="input"
                 type="number"
                 onChange={handleChange}
                 value={detail.price || ""}
                />
                <label className="placeholder">Expense Amount</label>
            </div>
            <div className="input-container ic2">
                <input
                 name="date"
                 id="date"
                 className="input"
                 type="date"
                 onChange={handleChange}
                 value={detail.date || ""}
                />
                <label className="placeholder">Date</label>
            </div>
                <input type="submit" className="submit" />
            </form>
        </div>
    </>
  )
}

export default ExpenseForm