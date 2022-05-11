import "./CartModalHeader.css";
import { AiOutlineClose } from "react-icons/ai";

const CartModalHeader = ({ onCloseModal }) => {
  return (
    <header className="cartModal__header">
      <h1 className="cartModal__heading-primary">basket</h1>
      <div className="cartModal__close" onClick={onCloseModal}>
        <AiOutlineClose />
      </div>
    </header>
  );
};

export default CartModalHeader;
