import { useState,useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "../index.css";
export default function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      console.warn("file is ",file);
      console.log("-------",URL.createObjectURL(file));
      setData({...data,user_signup_image:file})
      // Handle the selected file
    }
  };
  
  return (
    <>
      <div class="row">
        <div class="col mainDiv">
          <div class="container" id="container" style={{ height: "100vh" }}>
            <div class="form-container sign-in-container">
              <form>
                <h2 style={{ fontWeight: "bolder" }}>Sign Up</h2>
                <img name="user_signup_image" alt="loading.." src={selectedImage==null?"https://cdn.pixabay.com/photo/2017/08/16/00/29/add-person-2646097_1280.png":selectedImage} onClick={handleClick} style={{width:"100px",height:"100px",borderRadius:"50%",boxShadow:"0px 0px 7px black"}}/>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden="true"
                  onChange={handleFileChange}/>
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

                <input
                  type="number"
                  placeholder="Mobile Number"
                  id="monumber"
                  onChange={(e) => {
                    setData({ ...data, phoneNo: e.target.value });
                  }}
                />

                <input
                  type="text"
                  placeholder="About You"
                  id="about"
                  onChange={(e) => {
                    setData({ ...data, about: e.target.value });
                  }}
                />
                <button
                  style={{ marginTop: 9 }}
                  onClick={async (e) => {
                    e.preventDefault()
                    console.log("Data is ",data);
                    let printErr=document.getElementById("printDiv")
                    const formData=new FormData()
                    formData.append("name",data.name)
                    formData.append("username",data.username)
                    formData.append("password",data.password)
                    formData.append("user_signup_image",data.user_signup_image)
                    formData.append("phoneNo",data.phoneNo)
                    formData.append("about",data.about)
                    axios.post('http://localhost:3030/signup',formData)

                    .then((response) => {
                      console.log("response is",response);
                      if (response.status===200){
                          console.log("response data is",response.data);
                          setData(response.d);
                          console.log("=====", data);
                          localStorage.setItem("signupuser", JSON.stringify(data));
                          localStorage.setItem("token", response.data.token);
                          navigate("/login");
                      } else {
                         printErr.innerHTML = "Enter all fields first !!"
                      }
                    })

                    // const n = document.getElementById("name").value;
                    // const u = document.getElementById("uname").value;
                    // const p = document.getElementById("pwd").value;
                    // const m = document.getElementById("monumber").value;
                    // const a = document.getElementById("about").value;
                    // n !== "" && u !== "" && p !== "" && m !== "" && a !== ""
                  
                    // fetch("http://localhost:3030/signup", {
                    //   method: "POST",
                    //   body: JSON.stringify(data),
                    //   headers: { "Content-Type": "application/json" },
                    // })

                    //   .then((res) => {
                    //     if(res.ok){
                    //       return res.json()
                    //     }else{
                    //       printErr.innerHTML = "Enter all fields first !!"
                    //     }
                    //   })
                    //   .then((res) => {
                    //     console.log(res);
                    //       setData(res.d);
                    //       console.log("=====", res);
                    //       console.log("=====", data);
                    //       localStorage.setItem("signupuser", JSON.stringify(data));
                    //       localStorage.setItem("token", res.token);
                    //       navigate("/login");
                    //   })
                  }}
                >
                  Sign Up
                </button>
                <div id="printDiv" style={{height:"20vh",margin:"0",marginTop:"10px"}}></div>
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
