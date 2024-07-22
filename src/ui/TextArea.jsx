// eslint-disable-next-line react/prop-types
function TextArea({ label, state, setState, height = "100px" }) {
  return (
    <div className="form-floating">
      <textarea
        className="form-control mb-2"
        placeholder={label}
        id="floatingTextarea2"
        style={{ height: height }}
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
}

export default TextArea;
