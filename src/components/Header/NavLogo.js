import "./NavLogo.css";
import { NavLink } from "react-router-dom";
import { GiHamburger } from "react-icons/gi";

const NavLogo = () => {
  return (
    <div className="nav__brand">
      <NavLink to="/" className="nav__logoLink">
        <div className="nav__logo">
          <GiHamburger />
          <p>Zesty Burger</p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavLogo;
