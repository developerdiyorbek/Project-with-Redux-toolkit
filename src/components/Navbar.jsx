import { Link, useNavigate } from "react-router-dom";
import Logo from "/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../slice/auth";
import Loader from "../ui/Loader";

function Navbar() {
  const { loggedIn, user, isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(logOutUser());
    navigate("/login");
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>
        <img src={Logo} alt="logo" width={50} />
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <div className="d-flex gap-4 align-items-center">
            <p className="m-0 badge fs-6 rounded-pill text-bg-primary p-2">
              {user.username}
            </p>
            <Link to={"/create-article"}>create Article</Link>
            <button className="btn btn-danger" onClick={logOut}>
              LogOut
            </button>
          </div>
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <Link
              to={"/login"}
              className="me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="me-3 py-2 link-body-emphasis text-decoration-none"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
