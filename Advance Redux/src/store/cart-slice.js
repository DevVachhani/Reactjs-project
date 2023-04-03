import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQunatity: 0,
    changed: "false",
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
      state.changed = true;
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
      state.changed = true;

      if (exsitingItem === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exsitingItem.Qunatity = exsitingItem.Qunatity - 1;
        exsitingItem.totalPrice = exsitingItem.totalPrice - exsitingItem.price;
      }
    },
  },
});

export const cartAction = cartslice.actions;

export default cartslice;
