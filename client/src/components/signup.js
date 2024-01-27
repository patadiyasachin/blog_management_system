import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
export default function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  return (
    <>
      <div class="row">
        <div class="col mainDiv">
          <div class="container" id="container">
            <div class="form-container sign-in-container">
              <form action="#">
                <h1>Sign Up</h1>
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  onChange={(e) => {
                    setData({ ...data, name: e.target.value });
                  }}
                />
                <input
                  type="text"
                  placeholder="Username"
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
                  onClick={() => {
                    const n = document.getElementById("name").value;
                    const u = document.getElementById("uname").value;
                    const p = document.getElementById("pwd").value;

                    n !== "" && u !== "" && p !== ""
                      ? fetch("http://localhost:3030/signup", {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: { "Content-Type": "application/json" },
                        }).then((res) => {
                          console.log("=====",res);
                          setData(res);
                          localStorage.setItem("user", JSON.stringify(data));
                          // window.location.reload();
                        })
                        .then(()=>{
                          navigate("/login");
                        })
                      : (document.getElementById("printDiv").innerHTML =
                          "Enter all fields first !!");
                  }}
                >
                  Sign Up
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
                      navigate("/login");
                    }}
                  >
                    Sign in
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
