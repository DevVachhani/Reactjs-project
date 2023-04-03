import { useDispatch } from "react-redux";
import { UIAction } from "./ui-slice";

export const fetchCartdata = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-demo-7523d-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("could not fetch cart data");
      }

      const data = await response.json();

      return;
    };

    try {
      const cartData = await fetchData();
    } catch (error) {
      dispatch(
        UIAction.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data not found",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UIAction.showNotification({
        status: "success",
        title: "Success...",
        message: "sent cart data successfully",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-7523d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending Cart data failed");
      }
    };
    try {
      await sendRequest();
      dispatch(
        UIAction.showNotification({
          status: "success",
          title: "Success...",
          message: "sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        UIAction.showNotification({
          status: "error",
          title: "Error!",
          message: "sending cart data failed.",
        })
      );
    }
  };
};
