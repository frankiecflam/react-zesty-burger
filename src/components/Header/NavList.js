import "./NavList.css";
import NavItem from "./NavItem";

const NavList = ({ mobileNavOpen, onLinkClick, onNavClose }) => {
  const classes = mobileNavOpen ? "nav__list mobileNavOpen" : "nav__list";

  return (
    <ul className={classes} onClick={onNavClose}>
      <li>
        <NavItem to="/" title="Home" onClick={onLinkClick} />
      </li>
      <li>
        <NavItem to="/about" title="About" onClick={onLinkClick} />
      </li>
      <li>
        <NavItem to="/menu" title="Menu" onClick={onLinkClick} />
      </li>
      <li>
        <NavItem to="/contact" title="Contact" onClick={onLinkClick} />
      </li>
    </ul>
  );
};

export default NavList;
