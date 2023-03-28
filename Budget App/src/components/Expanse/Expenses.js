import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setfilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    setfilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
