import { useNavigate } from "react-router-dom";
import "../index.css";
import { useContext, useState } from "react";
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
                        }).then((res) => {
                          console.log("==================",res);
                          if (res.ok) {
                            console.log("data=",res.data)
                            console.log("res=",res)
                            setData(res)
                            localStorage.setItem("user",JSON.stringify(data))
                            navigate("/home");
                            window.location.reload()
                          } else {
                            document.getElementById("printDiv").innerHTML =
                              "Invalid data !!";
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
