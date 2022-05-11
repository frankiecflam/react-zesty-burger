import "./BurgerItem.css";
import BurgerItemCard from "./BurgerItemCard";
import ItemAddBtn from "../../Buttons/ItemAddBtn";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/slices/CartSlice";
import { useState } from "react";

const BurgerItem = ({ item }) => {
  const [itemClicked, setItemClicked] = useState(false);

  const { title, description, price } = item;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setItemClicked(true);
    dispatch(addItem(item));

    setTimeout(() => {
      setItemClicked(false);
    }, 1000);
  };

  const titleKeyWord = title.split(" ")[0];

  return (
    <BurgerItemCard>
      <div className="burgerItem">
        <h1 className="burgerItem__heading">{titleKeyWord}</h1>
        <p className="burgerItem__description">{description}</p>
        <p className="burgerItem__price">£{price}</p>
        <ItemAddBtn onAddItem={handleAddItem} active={itemClicked} />
      </div>
    </BurgerItemCard>
  );
};

export default BurgerItem;
