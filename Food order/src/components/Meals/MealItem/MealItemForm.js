import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItem = (props) => {
  const [amountisvalid, setamountisvalid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enterdamount = amountInputRef.current.value;
    const enterdamountnum = +enterdamount;

    if (
      enterdamount.trim().length === 0 ||
      enterdamountnum < 1 ||
      enterdamountnum > 5
    ) {
      setamountisvalid(false);
      return;
    }

    props.onAddToCart(enterdamountnum);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button> + Add </button>
      {!amountisvalid && <p>Please enter a valid amount!</p>}
    </form>
  );
};

export default MealItem;
