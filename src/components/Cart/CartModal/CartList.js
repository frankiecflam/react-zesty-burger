import "./CartList.css";

const CartList = ({ category, children }) => {
  return (
    <li className="cartList">
      <p className="cartList__category">{category}</p>
      {children}
    </li>
  );
};

export default CartList;
