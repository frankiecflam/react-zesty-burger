import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ to, title, onClick }) => {
  return (
    <NavLink
      to={to}
      className={(navData) =>
        navData.isActive ? "nav__item active" : "nav__item"
      }
      onClick={onClick}
    >
      {title}
    </NavLink>
  );
};

export default NavItem;
