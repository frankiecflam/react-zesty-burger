const Input = ({ type, id, required, className, onChange }) => {
  return (
    <input
      type={type}
      id={id}
      className={className && className}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
