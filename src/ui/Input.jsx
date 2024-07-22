// eslint-disable-next-line react/prop-types
function Input({ label, type = "text", state, setState }) {
  return (
    <div className="form-floating mb-2">
      <input
        type={type}
        value={state}
        className="form-control"
        placeholder={label}
        autoComplete="true"
        onChange={(e) => setState(e.target.value)}
        required
      />
      <label htmlFor="floatingPassword">{label}</label>
    </div>
  );
}

export default Input;
