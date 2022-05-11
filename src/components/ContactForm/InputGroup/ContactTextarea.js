import "./ContactTextarea.css";

const ContactTextarea = ({ id, rows, cols, required, onChange, value }) => {
  return (
    <textarea
      className="contact__textarea"
      id={id}
      rows={rows}
      cols={cols}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
};

export default ContactTextarea;
