import "./CartOverlay.css";

const CartOverlay = ({ onCloseModal }) => {
  return <div className="cart__overlay" onClick={onCloseModal}></div>;
};

export default CartOverlay;
