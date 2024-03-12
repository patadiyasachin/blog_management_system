import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../index.css";
export default function Layout() {
  const location=useLocation()
  const path=location.pathname;
  let isContactPage=false;
  if(path==="/select" || path==="/signup" || path==="/login"){
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
          
          <ul class="nav nav-underline d-flex justify-content-center noneNav lobster-regular">
            {auth ? (
              <>
                <li class="nav-item" style={{marginLeft:"27rem"}}>
                  <Link class="nav-link" to="/home">
                     <i class="fa-solid fa-house" style={{color:"rgba(0, 212, 255, 0.9)"}}></i> Home
                  </Link>
                  
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                     <i class="fa-solid fa-info" style={{color:"rgba(0, 212, 255, 0.9)"}}></i> About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact" id="contac">
                    <i class="fa-solid fa-phone" style={{color:"rgba(0, 212, 255, 0.9)"}}></i> Contact Me
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/userprofile" id="contac"><i class="fa-solid fa-user" style={{color:"rgba(0, 212, 255, 0.9)"}}></i> Profile</Link>
                </li>
                <li class="nav nav-underline" style={{marginLeft:"15rem",color:"rgba(0, 212, 255, 0.9)"}}>
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
                    <i class="fa-solid fa-right-from-bracket"></i> LogOut ({auth?JSON.parse(auth).username:""}) 
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">
                    Create Account
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
