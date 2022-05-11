import "./DrinksBody.css";
import SoftDrinks from "./SoftDrinks/SoftDrinks";
import Alcohol from "./Alcohol/Alcohol";

const DrinksBody = ({ drinkMenu }) => {
  const softDrinkMenu = drinkMenu.filter(
    (item) => item.subCategory === "soft drinks"
  );

  const alcoholMenu = drinkMenu.filter(
    (item) => item.subCategory === "alcohol"
  );

  return (
    <div className="drinks__body">
      <SoftDrinks softDrinkMenu={softDrinkMenu} />
      <Alcohol alcoholMenu={alcoholMenu} />
    </div>
  );
};

export default DrinksBody;
