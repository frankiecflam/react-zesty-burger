import "./Nav.css";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import MobileBtn from "../Buttons/MobileBtn";
import CartBtn from "../Buttons/CartBtn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileNavOpen = () => {
    setMobileNavOpen((prevState) => {
      return !prevState;
    });
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    navigate(path);

    const navList = e.target.closest(".nav__list");
    // Update state only if mobile nav is open -> Ignore desktop nav
    if (navList.classList.contains("mobileNavOpen")) {
      setMobileNavOpen((prevState) => !prevState);
    }
  };

  const handleMobileNavClose = (e) => {
    if (e.target.classList.contains("nav__item")) return;

    setMobileNavOpen(false);
  };

  return (
    <nav className="nav">
      <NavLogo />
      <NavList
        mobileNavOpen={mobileNavOpen}
        onLinkClick={handleNavLinkClick}
        onNavClose={handleMobileNavClose}
      />
      <CartBtn />
      <MobileBtn onClick={handleMobileNavOpen} mobileNavOpen={mobileNavOpen} />
    </nav>
  );
};

export default Nav;
