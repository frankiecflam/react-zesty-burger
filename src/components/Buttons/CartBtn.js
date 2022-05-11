import "./CartBtn.css";
import { GrBasket } from "react-icons/gr";
import Cart from "../Cart/Cart";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const [cartModalOpen, setCartModalOpen] = useState(false);
  const [cartQuantityBump, setCartQuantityBump] = useState(false);
  const cartItems = useSelector((state) => state.items);

  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartQuantityClasses = `${
    cartQuantityBump ? "cartBtn__quantity bump" : "cartBtn__quantity"
  }`;

  const handleCartModalClick = () => {
    setCartModalOpen(!cartModalOpen);
  };

  useEffect(() => {
    if (cartQuantity === 0) {
      return;
    }

    setCartQuantityBump(true);

    setTimeout(() => {
      setCartQuantityBump(false);
    }, 300);
  }, [cartQuantity]);

  return (
    <React.Fragment>
      <button className="btn__cart" onClick={handleCartModalClick}>
        <GrBasket />
        <p className={cartQuantityClasses}>{cartQuantity}</p>
      </button>
      {cartModalOpen && <Cart onCloseModal={handleCartModalClick} />}
    </React.Fragment>
  );
};

export default CartBtn;
