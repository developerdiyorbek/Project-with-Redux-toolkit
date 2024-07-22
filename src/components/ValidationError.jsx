import { useCallback } from "react";
import { useSelector } from "react-redux";

function ValidationError() {
  const { error } = useSelector((state) => state.auth);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name} - ${msg} `;
    });
  }, [error]);

  return (
    <div className="alert alert-danger pb-0 p-2" role="alert">
      {errorMessage().map((error) => (
        <p key={error}>{error}</p>
      ))}
    </div>
  );
}

export default ValidationError;
