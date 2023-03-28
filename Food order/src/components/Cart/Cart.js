import { useContext } from "react";
import Cartcontext from "../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(Cartcontext);

  const totalamount = `$${cartCtx.totalamount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
        {hasItems && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
