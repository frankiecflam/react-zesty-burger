import "./BurgersBody.css";
import BurgerChicken from "./Chicken/BurgerChicken";
import BurgerBeef from "./Beef/BurgerBeef";
import BurgerPork from "./Pork/BurgerPork";
import Sides from "./Sides/Sides";

const BurgersBody = ({ burgerMenu }) => {
  const chickenMenu = burgerMenu.filter(
    (item) => item.subCategory === "chicken"
  );

  const beefMenu = burgerMenu.filter((item) => item.subCategory === "beef");
  const porkMenu = burgerMenu.filter((item) => item.subCategory === "pork");
  const sideMenu = burgerMenu.filter((item) => item.category === "sides");

  return (
    <div className="burgers__body">
      <BurgerChicken chickenMenu={chickenMenu} />
      <BurgerBeef beefMenu={beefMenu} />
      <BurgerPork porkMenu={porkMenu} />
      <Sides sideMenu={sideMenu} />
    </div>
  );
};

export default BurgersBody;
