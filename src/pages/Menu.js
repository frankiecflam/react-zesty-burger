import "./Menu.css";
import Container from "../components/UI/Container";
import Burgers from "../components/Menu/Burgers/Burgers";
import Drinks from "../components/Menu/Drinks/Drinks";

import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://react-zestyburgers-default-rtdb.europe-west1.firebasedatabase.app/menu.json"
      );
      if (!response.ok) throw new Error("Unable to load menu data");

      const data = await response.json();
      let loadedMenu = [];

      for (const key in data) {
        loadedMenu.push(data[key]);
      }
      setMenu(loadedMenu);
    };
    fetchMenu();
  }, []);

  const sortedMenu = menu.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });

  const burgerMenu = sortedMenu.filter(
    (item) => item.category === "burgers" || item.category === "sides"
  );

  const drinkMenu = sortedMenu.filter((item) => item.category === "drinks");

  return (
    <div className="menu">
      <Container className="menu__body">
        <Burgers burgerMenu={burgerMenu} />
        <Drinks drinkMenu={drinkMenu} />
      </Container>
    </div>
  );
};

export default Menu;
