import Button from "../UI/Button";
import "./FormSubmitBtn.css";

const FormSubmitBtn = ({ type, text }) => {
  return <Button type={type} text={text} className="btn__formSubmit"/>;
};

export default FormSubmitBtn;
