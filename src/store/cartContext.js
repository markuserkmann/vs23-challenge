import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.slice();
      updatedItems.push(item);
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};