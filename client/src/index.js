import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Layout from "./components/layout";
import Home from "./components/Home";
import Post from "./components/Post";
// import DataProvider from "./contex/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const auth = localStorage.getItem("user");
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <DataProvider> */}
            <Route path="/login" element={<Login />}></Route>
          {/* </DataProvider> */}
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/post" element={<Post/>}></Route>

            <Route path="/alltype" element={<Post/>}></Route>
            <Route path="/movie" element={<Post/>}></Route>
            <Route path="/music" element={<Post/>}></Route>
            <Route path="/sport" element={<Post/>}></Route>
            <Route path="/tech" element={<Post/>}></Route>
            <Route path="/fashion" element={<Post/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
