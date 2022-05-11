import "./CartModalBody.css";
import CartItems from "./CartItems";
import CartOrderForm from "./CartOrderForm/CartOrderForm";
import CartSubmission from "./CartSubmission";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartReset } from "../../../store/slices/CartSlice";

const CartModalBody = ({
  orderState,
  onFooterBtnClick,
  onOrderReceived,
  orderReceived,
}) => {
  const [orderID, setOrderID] = useState("");
  const cart = useSelector((state) => state);
  const { items, totalAmount } = cart;
  const dispatch = useDispatch();

  const cartHaveItems = items.length > 0;
  const sendAPIToSever = async (order) => {
    onOrderReceived(null);

    try {
      const response = await fetch(
        "https://react-zestyburgers-default-rtdb.europe-west1.firebasedatabase.app/order.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        }
      );

      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      onOrderReceived(true);
      setOrderID(order.id);
      dispatch(cartReset());
    } catch (error) {
      onOrderReceived(false);
    }
  };

  const handleOrderSubmit = (customerData) => {
    const {
      name: customerName,
      phone: customerContact,
      address: customerAddress,
    } = customerData;
    const date = new Date(Date.now());
    const orderID = Math.floor(date.getTime() * (Math.random() * 10))
      .toString()
      .slice(0, 6);

    const order = {
      id: orderID,
      date,
      items,
      totalAmount,
      customerName,
      customerContact,
      customerAddress,
    };

    sendAPIToSever(order);
    onFooterBtnClick();
  };

  return (
    <div className="cartModal__body">
      {orderState !== "submission" && (
        <React.Fragment>
          <CartItems />
          {cartHaveItems && orderState === "confirmation" && (
            <CartOrderForm onOrderSubmit={handleOrderSubmit} />
          )}
        </React.Fragment>
      )}
      {orderState === "submission" && (
        <CartSubmission orderReceived={orderReceived} orderID={orderID} />
      )}
    </div>
  );
};

export default CartModalBody;
