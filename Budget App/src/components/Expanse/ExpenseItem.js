import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const Expenseitem = (props) => {
  //   const [title, setTitle] = useState(props.title);

  //   const clickHandler = () => {
  //     console.log(title);

  //     setTitle("updated");
  // };

  return (
    <li>
      <Card className="expense-item ">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default Expenseitem;
