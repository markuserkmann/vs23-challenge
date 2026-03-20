import { useReducer, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import { CartContext } from "./store/cartContext";

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
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
  }

  if (action.type === "CLEAR_CART") {
    return {
      items: [],
    };
  }

  return state;
};

const App = () => {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const openCart = () => {
      setCartIsOpen(true);
  };

  const closeCart = () => {
    setCartIsOpen(false);
  };

  const handleCheckout = () => {
    alert("Order placed successfully.");
    clearCart();
    closeCart();
  };

  return (
    <CartContext.Provider value={{ items: cartState.items, addItem, clearCart }}>
      <Cart open={cartIsOpen} onClose={closeCart} onCheckout={handleCheckout} />
      <Header onOpenCart={openCart} />
      <Meals />
    </CartContext.Provider>
  );
};

export default App;
