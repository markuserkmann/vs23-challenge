import { useContext } from "react";
import Modal from "./UI/Modal";
import Button from "./Button";
import { CartContext } from "../store/cartContext";

const Cart = ({ open, onClose }) => {
  const cartContext = useContext(CartContext);

  const cartTotal = cartContext.items.reduce(
    (total, item) => total + item.quantity * Number(item.price),
    0
  );

  return (
    <Modal open={open}>
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartContext.items.map((item) => (
            <li key={item.id} className="cart-item">
              <p>
                {item.name} <b>x {item.quantity}</b>
              </p>
              <p>
                {Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(Number(item.price) * item.quantity)}
              </p>
            </li>
          ))}
        </ul>
        <p className="cart-total">
          {Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(cartTotal)}
        </p>
        <p className="modal-actions">
          <Button textOnly onClick={onClose}>
            Close
          </Button>
        </p>
      </div>
    </Modal>
  );
};

export default Cart;
