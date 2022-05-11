import "./DrinksItem.css";
import ItemAddBtn from "../../Buttons/ItemAddBtn";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/slices/CartSlice";
import { useState } from "react";

const DrinkItem = ({ item }) => {
  const [itemClicked, setItemClicked] = useState(false);
  const { title, price } = item;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setItemClicked(true);
    dispatch(addItem(item));

    setTimeout(() => {
      setItemClicked(false);
    }, 1000);
  };

  return (
    <div className="drinkItem">
      <h2 className="drinkItem__title">{title}</h2>
      <p className="drinkItem__price">£{price}</p>
      <ItemAddBtn onAddItem={handleAddItem} active={itemClicked} />
    </div>
  );
};

export default DrinkItem;
