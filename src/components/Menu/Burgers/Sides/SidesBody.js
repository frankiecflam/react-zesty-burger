import "./SidesBody.css";
import SideItem from "./SideItem";

const SidesBody = ({ sideMenu }) => {
  return (
    <div className="sides__body">
      {sideMenu.map((item) => {
        return <SideItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default SidesBody;
