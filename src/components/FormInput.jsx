function FormInput({ label, name, type, defaultValue }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input"
      />
    </fieldset>
  );
}

export default FormInput;
