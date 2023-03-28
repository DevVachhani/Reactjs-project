import { useReducer } from "react";
import Cartcontext from "./cart-context";

const defaultCartState = {
  items: [],
  totalamount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalamount + action.item.price * action.item.amount;

    const existingCartItemIdenx = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIdenx];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIdenx] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalamount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItem];
    const updateTotalAmount = state.totalamount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItem] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(
    CartReducer,
    defaultCartState
  );
  const AdditemCartHandler = (item) => {
    dispatchcartAction({ type: "ADD", item: item });
  };

  const RemoveCartHandler = (id) => {
    dispatchcartAction({ type: "Remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: AdditemCartHandler,
    removeItem: RemoveCartHandler,
  };

  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CardProvider;
