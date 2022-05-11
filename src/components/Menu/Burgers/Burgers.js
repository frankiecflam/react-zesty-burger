import "./Burgers.css";
import MenuCard from "../MenuCard";
import BurgersHeader from "./BurgersHeader";
import BurgersBody from "./BurgersBody";

const Burgers = ({ burgerMenu }) => {
  return (
    <MenuCard className="burgers__card">
      <BurgersHeader />
      <BurgersBody burgerMenu={burgerMenu} />
    </MenuCard>
  );
};

export default Burgers;
