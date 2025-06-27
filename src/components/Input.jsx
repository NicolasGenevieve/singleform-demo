const Input = ({
  id,
  title,
  type,
  placeholder,
  name,
  value,
  onChange,
  hasError = false,
}) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input
        className={hasError ? "mdp" : ""}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(event) => {
          onChange(event.target.value);
        }}
        value={value}
      />
    </>
  );
};

export default Input;
