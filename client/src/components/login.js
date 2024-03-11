import { useNavigate } from "react-router-dom";
import "../index.css";
import {useState} from "react";
// import { DataContext } from "../contex/DataProvider";
export default function Login() {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  // const {setAccount}=useContext(DataContext)
  return (
    <>
      <div class="row">
        <div class="col mainDiv">
          <div class="container" id="container">
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <input
                  type="text"
                  placeholder="username"
                  id="uname"
                  onChange={(e) => {
                    setData({ ...data, username: e.target.value });
                  }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="pwd"
                  onChange={(e) => {
                    setData({ ...data, password: e.target.value });
                  }}
                />
                <button
                  style={{ marginTop: 9 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const u = document.getElementById("uname").value;
                    const p = document.getElementById("pwd").value;

                    u !== "" && p !== ""
                      ? fetch("http://localhost:3030/login", {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: { "Content-Type": "application/json" },
                        })
                        .then((res)=>{
                          if(res.ok){
                            return res.json()
                          }
                        })
                        .then((res) => {
                          if(data.username=="SachinPatadiyaAdmin" && data.password=="SachinPatadiya@2004" ){
                            return navigate('/admin')
                          }else{
                              console.log("==================",res);
                              console.log("data=",res.d)
                              console.log("res=",res.d._id)
                              setData(res.d)
                              localStorage.setItem("user",JSON.stringify(data))
                              localStorage.setItem("token",res.token);
                              console.warn(localStorage.setItem("userid",res.d._id));  
                              console.log("data is ",data);
                              navigate("/home");
                              window.location.reload()
                            }
                        })
                      : (document.getElementById("printDiv").innerHTML =
                          "Enter all fields first !!");
                  }}
                >
                  Sign In
                </button>
                <div id="printDiv"></div>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    class="ghost"
                    id="signUp"
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
