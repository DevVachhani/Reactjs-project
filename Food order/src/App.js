import Header from "./components/Layout/Header";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CardProvider from "./components/store/CardProvider";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  };

  const hideCarthandler = () => {
    setcartIsShown(false);
  };

  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onshowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
