import { NavLink } from "react-router-dom";
import "./OrderNowBtn.css";

const OrderNowButton = () => {
  return (
    <NavLink to="/menu" className="orderBtn">
      order now
    </NavLink>
  );
};

export default OrderNowButton;
