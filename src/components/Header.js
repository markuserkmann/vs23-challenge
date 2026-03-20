import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "../store/cartContext";

const Header = ({ onOpenCart }) => {
  const cartContext = useContext(CartContext);
  const cartItemsCount = cartContext.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <h1>Meals App</h1>
      </div>
      <Button textOnly onClick={onOpenCart}>
        Cart ({cartItemsCount})
      </Button>
    </header>
  );
};

export default Header;
