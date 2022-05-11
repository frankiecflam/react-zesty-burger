import "./Sides.css";
import SidesHeader from "./SidesHeader";
import SidesBody from "./SidesBody";

const Sides = ({sideMenu}) => {
  return (
    <div className="sides">
      <SidesHeader />
      <SidesBody sideMenu={sideMenu}/>
    </div>
  );
};

export default Sides;
