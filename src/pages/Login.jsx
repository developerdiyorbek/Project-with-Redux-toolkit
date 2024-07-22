import { useEffect, useState } from "react";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";

import AuthService from "../service/auth";
import { signUserError, signUserStart, signUserSuccess } from "../slice/auth";
import ValidationError from "../components/ValidationError";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password };

    try {
      const responce = await AuthService.userLogin(user);
      dispatch(signUserSuccess(responce.user));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(signUserError(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return (
    <div className="form-signin w-25 mt-5 m-auto">
      <form onSubmit={onSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
        {error && <ValidationError />}
        <Input
          label={"Email address"}
          type={"email"}
          state={email}
          setState={setEmail}
        />
        <Input
          label={"Password"}
          type={"password"}
          state={password}
          setState={setPassword}
        />
        <button
          className="btn btn-primary w-100 py-2 mt-2"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
