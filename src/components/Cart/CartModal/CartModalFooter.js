import "./CartModalFooter.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartModalFooter = ({
  onCloseModal,
  onFooterBtnClick,
  orderState,
  orderReceived,
}) => {
  const cartHaveItems = useSelector((state) => state.items.length > 0);

  return (
    <footer className="cartModal__footer">
      {!cartHaveItems && !orderReceived && (
        <NavLink
          to="/menu"
          className="cartModal__footer-btn"
          onClick={onCloseModal}
        >
          view menu
        </NavLink>
      )}
      {cartHaveItems && orderState === "checkout" && (
        <button className="cartModal__footer-btn" onClick={onFooterBtnClick}>
          checkout
        </button>
      )}

      {orderState === "submission" && (
        <button className="cartModal__footer-btn" onClick={onFooterBtnClick}>
          close
        </button>
      )}
    </footer>
  );
};

export default CartModalFooter;
