import { Link, Outlet, useNavigate } from "react-router-dom";
import "../index.css";
export default function Layout() {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  function logout() {
    localStorage.clear();
    navigate("/signup");
    window.location.reload();
  }
  return (
    <>
      <div className="row clr">
        <div className="col">
          <ul class="nav nav-underline d-flex justify-content-center noneNav">
            {auth ? (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link">Contact Me</Link>
                </li>
                <li class="nav nav-underline">
                  <Link
                    class="nav-link"
                    style={{ color: "red" }}
                    to="./signup"
                    onClick={() => {
                      logout();
                    }}
                  >
                    LogOut ({JSON.parse(auth).username})
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
}
