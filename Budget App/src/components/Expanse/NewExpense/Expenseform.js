import React, { useState } from "react";

import "./Expenseform.css";

const Expenseform = (props) => {
  const [enterTitle, setenterTitle] = useState("");
  const [enterAmount, setenterAmount] = useState("");
  const [enterDate, setenterDate] = useState("");

  // const [userInput, setuserInput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: "",
  // });
  const titleChangehandler = (event) => {
    setenterTitle(event.target.value);
    // setuserInput({ ...userInput, enterTitle: event.target.value });
  };

  const amountChangeHandler = (event) => {
    // setuserInput({ ...userInput, enterAmount: event.target.value });
    setenterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setuserInput({ ...userInput, enterDate: event.target.value });
    setenterDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setenterTitle("");
    setenterAmount("");
    setenterDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangehandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enterDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expanse</button>
          <button type="submit" onClick={props.onCancel}>
            Cancle
          </button>
        </div>
      </div>
    </form>
  );
};

export default Expenseform;
