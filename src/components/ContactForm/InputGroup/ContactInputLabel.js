import Label from "../../UI/Label";
import "./ContactInputLabel.css";

const ContactInputLabel = ({ htmlFor, text }) => {
  return <Label htmlFor={htmlFor} className="contact__input-label" text={text} />;
};

export default ContactInputLabel;
