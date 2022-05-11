import "./CartModal.css";
import Container from "../../UI/Container";
import CartModalHeader from "./CartModalHeader";
import CartModalBody from "./CartModalBody";
import CartModalFooter from "./CartModalFooter";
import { useState } from "react";

const CartModal = ({ onCloseModal }) => {
  const [cartOrderState, setCartOrderState] = useState("checkout");
  const [orderReceived, setOrderReceived] = useState(null);

  const handleCartBtnClick = () => {
    if (cartOrderState === "checkout") {
      setCartOrderState("confirmation");
    }
    if (cartOrderState === "confirmation") {
      setCartOrderState("submission");
    }
    if (cartOrderState === "submission") {
      setCartOrderState("checkout");
      onCloseModal();
    }
  };

  const handleOrderReceived = (state) => {
    setOrderReceived(state);
  };

  return (
    <Container className="cart__modal">
      <CartModalHeader onCloseModal={onCloseModal} />
      <CartModalBody
        orderState={cartOrderState}
        orderReceived={orderReceived}
        onOrderReceived={handleOrderReceived}
        onFooterBtnClick={handleCartBtnClick}
      />
      <CartModalFooter
        orderState={cartOrderState}
        orderReceived={orderReceived}
        onCloseModal={onCloseModal}
        onFooterBtnClick={handleCartBtnClick}
      />
    </Container>
  );
};

export default CartModal;
