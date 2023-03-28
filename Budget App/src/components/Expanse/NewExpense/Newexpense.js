import React, { useState } from "react";
import "./Newexpense.css";
import Expenseform from "./Expenseform";

const Newexpense = (props) => {
  const [isEditing, setisEditing] = useState(false);
  const saveExpenseDatahandler = (enterExpensedata) => {
    const expenseData = {
      ...enterExpensedata,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const stopEditingHandler = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <Expenseform
          onSaveExpenseData={saveExpenseDatahandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default Newexpense;
