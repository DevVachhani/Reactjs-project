import React from "react";

const Cartcontext = React.createContext({
  item: [],
  totalAmount: 0,

  addItem: (item) => {},
  removeItem: (id) => {},
});

export default Cartcontext;
