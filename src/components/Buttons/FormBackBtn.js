import "./FormBackBtn.css";
import { NavLink } from "react-router-dom";

const FormBackBtn = ({ to, text }) => {
  return (
    <NavLink to={to} className="btn__formBack">
      {text}
    </NavLink>
  );
};

export default FormBackBtn;
