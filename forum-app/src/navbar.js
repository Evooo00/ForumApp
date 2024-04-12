import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar({ token }) {
  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <header>
      {token && token.user ? (
        <p className="accountUserName">Welcome {token.user.email}</p>
      ) : (
        <p className="accountUserName">Welcome</p>
      )}
      {!token ? (
        <div className="loginRegisterButtons">
          <Link to="/login">
            <button className="login btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="register btn">Register</button>
          </Link>
        </div>
      ) : (
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
}

export default Navbar;
