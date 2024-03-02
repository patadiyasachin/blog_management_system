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
          
          <ul class="nav nav-underline d-flex justify-content-center noneNav">
            {auth ? (
              <>
                <li class="nav-item" style={{marginLeft:"27rem"}}>
                  <Link class="nav-link" to="/home">
                    Home <i class="fa-solid fa-house" style={{color:"gray"}}></i>
                  </Link>
                  
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About <i class="fa-solid fa-info" style={{color:"gray"}}></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact" id="contac">
                    Contact Me <i class="fa-solid fa-phone" style={{color:"gray"}}></i>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/userprofile" id="contac">Profile <i class="fa-solid fa-user" style={{color:"gray"}}></i></Link>
                </li>
                <li class="nav nav-underline" style={{marginLeft:"20rem",color:"gray"}}>
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
                    LogOut ({auth?JSON.parse(auth).username:""}) <i class="fa-solid fa-right-from-bracket"></i>
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
