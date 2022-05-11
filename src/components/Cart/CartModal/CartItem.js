import "./CartItem.css";
import { addItem, removeItem } from "../../../store/slices/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { title, quantity, price } = item;
  const dispatch = useDispatch();

  const handleAddItemClick = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItemClick = () => {
    dispatch(removeItem(item));
  };

  return (
    <li className="cartModal__item">
      <p className="cartItem__title">{title}</p>
      <div className="cartItem__quantity">
        <button
          className="cartItem__quantity-btn"
          onClick={handleRemoveItemClick}
        >
          -
        </button>
        <p className="cartItem__quantity-text">x{quantity}</p>
        <button className="cartItem__quantity-btn" onClick={handleAddItemClick}>
          +
        </button>
      </div>
      <p className="cartItem__price">£{price.toFixed(2)}</p>
    </li>
  );
};

export default CartItem;
