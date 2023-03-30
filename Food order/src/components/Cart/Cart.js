import { Fragment, useContext, useState } from "react";
import Cartcontext from "../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setisCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didsubmit, setdidsubmit] = useState(false);
  const cartCtx = useContext(Cartcontext);

  const totalamount = `${cartCtx.totalamount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setisCheckout(true);
  };

  const submitOrderHandler = async (userdata) => {
    setisSubmitting(true);
    await fetch(
      "https://react-demo-7523d-default-rtdb.firebaseio.com/orderd.json",
      {
        method: "post",
        body: JSON.stringify({
          user: userdata,
          orderdItem: cartCtx.items,
        }),
      }
    );
    setisSubmitting(false);
    setdidsubmit(true);
    cartCtx.clearCart();
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

  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <Fragment>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalAction}
    </Fragment>
  );

  const isSubmittingModalContant = <p>sending order data...</p>;

  const didsubmitModalContant = (
    <Fragment>
      <p>Successfully order send !! </p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          close
        </button>
      </div>
    </Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didsubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContant}
      {!isSubmitting && didsubmit && didsubmitModalContant}
    </Modal>
  );
};

export default Cart;
