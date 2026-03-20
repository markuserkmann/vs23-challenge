import { useReducer, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContext } from "./store/cartContext";

const cartReducer = (state, action) => {
  if (action.type !== "ADD_ITEM") {
    return state;
  }

  const existingItem = state.items.find((item) => item.id === action.item.id);

  if (!existingItem) {
    return {
      items: [...state.items, { ...action.item, quantity: 1 }],
    };
  }

  return {
    items: state.items.map((item) =>
      item.id === action.item.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ),
  };
};

const App = () => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const openCart = () => {
    setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  return (
    <CartContext.Provider value={{ items: cartState.items, addItem }}>
      <Cart open={cartIsOpen} onClose={closeCart} />
      <Header onOpenCart={openCart} />
      <Meals />
    </CartContext.Provider>
  );
};

export default App;
