import CartItemList from "../CartItemList";
import CartList from "../CartList";

const CartDrinkList = ({ items }) => {
  return (
    <CartList category="drinks">
      <CartItemList items={items} />
    </CartList>
  );
};

export default CartDrinkList;
