import Input from "../../UI/Input";
import "./ContactInput.css";

const ContactInput = ({ type, id, required, onChange, value }) => {
  return (
    <Input
      type={type}
      id={id}
      required={required}
      className="contact__input"
      onChange={onChange}
      value={value}
    />
  );
};

export default ContactInput;
