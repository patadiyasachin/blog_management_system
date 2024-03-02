import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Layout from "./components/layout";
import Home from "./components/Home";
import Post from "./components/Post";
import SelectType from "./components/selectType";
import DetailPost from "./components/DetailPost";
import EditPost from "./components/EditPost";
import About from "./components/About";
import Contact from "./components/Contact";
import UserProfile from "./components/userProfile";
import HomePage from "./components/HomePage";
// import DataProvider from "./contex/DataProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
const auth = localStorage.getItem("user");
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/" element={<Layout />}>
          {/* <DataProvider> */}
          {/* </DataProvider> */}

            {
              auth?
                <>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/post" element={<Post/>}></Route>
                <Route path="/:id" element={<DetailPost/>}></Route>  
                <Route path="/editpost/:id" element={<EditPost/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>  
                
                <Route path="/select" element={<SelectType/>}></Route>
                <Route path="/alltype" element={<Post/>}></Route>
                <Route path="/movie" element={<Post/>}></Route>
                <Route path="/music" element={<Post/>}></Route>
                <Route path="/sport" element={<Post/>}></Route>
                <Route path="/tech" element={<Post/>}></Route>
                <Route path="/fashion" element={<Post/>}></Route>
                <Route path="/userprofile" element={<UserProfile/>}></Route>
                </>
              :
                <>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                </>
            }
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
