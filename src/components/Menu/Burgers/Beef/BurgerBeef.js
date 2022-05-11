import { GiCow } from "react-icons/gi";
import "./BurgerBeef.css";
import BurgerItems from "../BurgerItems";
import BurgerItem from "../BurgerItem";

const BurgerBeef = ({ beefMenu }) => {
  return (
    <div className="burgers__beef">
      <div className="burgers__beef-header">
        <GiCow />
      </div>
      <BurgerItems>
        {beefMenu.map((item) => {
          return <BurgerItem item={item} key={item.id} />;
        })}
      </BurgerItems>
    </div>
  );
};

export default BurgerBeef;
