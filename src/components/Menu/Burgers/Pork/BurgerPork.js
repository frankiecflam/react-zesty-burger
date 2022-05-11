import "./BurgerPork.css";
import { GiPig } from "react-icons/gi";
import BurgerItems from "../BurgerItems";
import BurgerItem from "../BurgerItem";

const BurgerPork = ({ porkMenu }) => {
  return (
    <div className="burgers__pork">
      <div className="burgers__pork-header">
        <GiPig />
      </div>
      <BurgerItems>
        {porkMenu.map((item) => {
          return <BurgerItem item={item} key={item.id} />;
        })}
      </BurgerItems>
    </div>
  );
};

export default BurgerPork;
