import "./ItemAddBtn.css";

const ItemAddBtn = ({ onAddItem, active }) => {
  const classes = `btn__itemAdd ${active ? "active" : ""}`;

  return (
    <button className={classes} onClick={onAddItem}>
      add
    </button>
  );
};

export default ItemAddBtn;
