import "./MobileBtn.css";

const MobileBtn = ({ onClick, mobileNavOpen }) => {
  const classes = mobileNavOpen ? "mobileBtn open" : "mobileBtn";

  return <div className={classes} onClick={onClick}></div>;
};

export default MobileBtn;
