import "./Header.css";

import Container from "../UI/Container";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const { pathname: currentPath } = location;
  const classes = currentPath === "/menu" ? "header menuView" : "header";

  return (
    <header className={classes}>
      <Container>
        <Nav />
      </Container>
    </header>
  );
};

export default Header;
