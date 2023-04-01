import { createSlice } from "@reduxjs/toolkit";
import { UIAction } from "./ui-slice";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQunatity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQunatity = action.payload.totalQunatity;
      state.items = action.payload.items;
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const exsitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQunatity++;
      if (!exsitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          Qunatity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exsitingItem.Qunatity = exsitingItem.Qunatity + 1;
        exsitingItem.totalPrice = exsitingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const exsitingItem = state.items.find((item) => item.id === id);
      state.totalQunatity--;

      if (exsitingItem === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exsitingItem.Qunatity = exsitingItem.Qunatity - 1;
        exsitingItem.totalPrice = exsitingItem.totalPrice - exsitingItem.price;
      }
    },
  },
});

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

export const cartAction = cartslice.actions;

export default cartslice;
