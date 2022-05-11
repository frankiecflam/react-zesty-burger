import "./BurgerChicken.css";
import { GiChicken } from "react-icons/gi";
import BurgerItem from "../BurgerItem";
import BurgerItems from "../BurgerItems";

const BurgerChicken = ({ chickenMenu }) => {
  return (
    <div className="burgers__chicken">
      <div className="burgers__chicken-header">
        <GiChicken />
      </div>
      <BurgerItems>
        {chickenMenu.map((item) => {
          return <BurgerItem item={item} key={item.id} />;
        })}
      </BurgerItems>
    </div>
  );
};

export default BurgerChicken;
