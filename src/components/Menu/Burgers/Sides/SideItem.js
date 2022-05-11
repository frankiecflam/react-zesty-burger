import "./SideItem.css";
import ItemAddBtn from "../../../Buttons/ItemAddBtn";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../store/slices/CartSlice";
import { useState } from "react";

const SideItem = ({ item }) => {
  const [itemClicked, setItemClicked] = useState(false);
  const { title, price, description } = item;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    setItemClicked(true);
    dispatch(addItem(item));

    setTimeout(() => {
      setItemClicked(false);
    }, 1000);
  };

  return (
    <div className="sides__item">
      <div className="sides__item-header">
        <h2 className="sides__item-title">{title}</h2>
        <p className="sides__item-description">{description}</p>
      </div>
      <p className="sides__item-price">£{price}</p>
      <ItemAddBtn onAddItem={handleAddItem} active={itemClicked} />
    </div>
  );
};

export default SideItem;
