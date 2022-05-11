import "./Alcohol.css";
import DrinksItems from "../DrinksItems";
import DrinkItem from "../DrinksItem";

const Alcohol = ({ alcoholMenu }) => {
  return (
    <DrinksItems>
      <h2 className="alcohol__heading-primary">Alcohol</h2>
      {alcoholMenu.map((item) => {
        return <DrinkItem item={item} key={item.id} />;
      })}
    </DrinksItems>
  );
};

export default Alcohol;
