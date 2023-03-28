import { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import Cartcontext from "../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(Cartcontext);

  const price = `$${props.price.toFixed(2)}`;

  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addtoCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
