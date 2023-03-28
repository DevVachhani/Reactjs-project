import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import Cartcontext from "../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnisHighlited, setbtnisHighlited] = useState(false);
  const CartCtx = useContext(Cartcontext);

  const { items } = CartCtx;

  const NumberOfCartitem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasss = `${classes.button} ${btnisHighlited ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnisHighlited(true);
    const timer = setTimeout(() => {
      setbtnisHighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasss} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumberOfCartitem}</span>
    </button>
  );
};

export default HeaderCartButton;
