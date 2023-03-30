import React from "react";

const Cartcontext = React.createContext({
  items: [],
  totalAmount: 0,

  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default Cartcontext;
