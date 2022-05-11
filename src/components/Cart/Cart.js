import "./Cart.css";
import CartModal from "./CartModal/CartModal";
import CartOverlay from "./CartOverlay";

import React from "react";
import ReactDOM from "react-dom";

const Cart = ({ onCloseModal }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <CartOverlay onCloseModal={onCloseModal} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <CartModal onCloseModal={onCloseModal} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Cart;
