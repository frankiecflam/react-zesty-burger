import "./CartItemSummary.css";

const CartItemSummary = ({ totalAmount }) => {
  return (
    <div className="cartSummary">
      <p className="cartSummary__total">total</p>
      <p className="cartSummary__amount">£{totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default CartItemSummary;
