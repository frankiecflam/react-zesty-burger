import "./CartItems.css";

import CartBurgerList from "./CartBurgers/CartBurgerList";
import CartSidesList from "./CartSides/CartSidesList";
import CartDrinkList from "./CartDrinks/CartDrinkList";
import CartItemSummary from "./CartItemSummary";

import { useSelector } from "react-redux";
import React from "react";

const CartItems = () => {
  const items = useSelector((state) => state.items);

  const cartHaveItems = items.length > 0;
  const cartTotalAmount = useSelector((state) => state.totalAmount);

  const burgerItems = items.filter((item) => item.category === "burgers");
  const sideItems = items.filter((item) => item.category === "sides");
  const drinkItems = items.filter((item) => item.category === "drinks");

  return (
    <React.Fragment>
      <ul className="cartModal__list">
        {!cartHaveItems && (
          <div className="cartList__empty">
            <h1 className="cartList__empty-message">
              your basket is currently empty!
            </h1>
          </div>
        )}
        {cartHaveItems && (
          <React.Fragment>
            {burgerItems.length > 0 && <CartBurgerList items={burgerItems} />}
            {sideItems.length > 0 && <CartSidesList items={sideItems} />}
            {drinkItems.length > 0 && <CartDrinkList items={drinkItems} />}
          </React.Fragment>
        )}
      </ul>
      {cartHaveItems && <CartItemSummary totalAmount={cartTotalAmount} />}
    </React.Fragment>
  );
};

export default CartItems;
