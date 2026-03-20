import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../store/cartContext";

const Header = () => {
  const cartContext = useContext(CartContext);
  return (
    <header id="main-header">
      <div id="title">
        <h1>Meals App</h1>
      </div>
      <Button textOnly>Cart ({cartContext.items.length})</Button>
    </header>
  );
};

export default Header;
