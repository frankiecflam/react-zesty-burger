import "./MenuCard.css";

const MenuCard = ({ children, className }) => {
  const classes = className ? `menuCard ${className}` : "menuCard";

  return <div className={classes}>{children}</div>;
};

export default MenuCard;
