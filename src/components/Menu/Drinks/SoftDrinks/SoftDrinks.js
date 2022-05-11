import "./SoftDrinks.css";
import DrinksItems from "../DrinksItems";
import DrinkItem from "../DrinksItem";

const SoftDrinks = ({ softDrinkMenu }) => {
  return (
    <DrinksItems>
      <h2 className="softdrinks__heading-primary">Soft Drinks</h2>
      {softDrinkMenu.map((item) => {
        return <DrinkItem item={item} key={item.id} />;
      })}
    </DrinksItems>
  );
};

export default SoftDrinks;
