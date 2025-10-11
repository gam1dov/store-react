function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </fieldset>
  );
}

export default FormInput;
