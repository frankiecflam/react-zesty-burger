import CartItemList from "../CartItemList";
import CartList from "../CartList";

const CartSidesList = ({ items }) => {
  return (
    <CartList category="sides">
      <CartItemList items={items} />
    </CartList>
  );
};

export default CartSidesList;
