import "./CartItemList.css";
import CartItem from "./CartItem";

const CartItemList = ({ items }) => {
  const sortedItems = items.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });

  return (
    <ul className="cartItem__list">
      {sortedItems.map((item) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

export default CartItemList;
