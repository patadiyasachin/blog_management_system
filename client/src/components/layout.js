import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../index.css";
export default function Layout() {
  const location=useLocation()
  const path=location.pathname;
  let isContactPage=false;
  if(path=="/contact" || path=="/select"){
    isContactPage=true
  }else{
    isContactPage=false
  }
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  return (
    <>
      <div className="row clr">
        <div className="col" style={{display:isContactPage?"none":"block"}}>
          <ul class="nav nav-underline d-flex justify-content-center noneNav">
            {auth ? (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact" id="contac">Contact Me</Link>
                </li>
                <li class="nav nav-underline">
                  <Link
                    class="nav-link"
                    style={{ color: "red" }}
                    to="/signup"
                    onClick={() => {
                      navigate("/signup");
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    LogOut ({auth?JSON.parse(auth).username:""})
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
