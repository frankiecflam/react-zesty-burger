import "./Drinks.css";
import MenuCard from "../MenuCard";
import DrinksHeader from "./DrinksHeader";
import DrinksBody from "./DrinksBody";

const Drinks = ({ drinkMenu }) => {
  return (
    <MenuCard className="drinks__card">
      <DrinksHeader />
      <DrinksBody drinkMenu={drinkMenu} />
    </MenuCard>
  );
};

export default Drinks;
