import CartItemList from "../CartItemList";
import CartList from "../CartList";

const CartBurgerList = ({ items }) => {
  return (
    <CartList category="burgers">
      <CartItemList items={items} />
    </CartList>
  );
};

export default CartBurgerList;
