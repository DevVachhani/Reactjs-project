import classes from "./CartButton.module.css";

import { useDispatch, useSelector } from "react-redux";
import { UIAction } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQunatity);

  const toogleCartHandler = () => {
    dispatch(UIAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
