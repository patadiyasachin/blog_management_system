import { Link, useNavigate} from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [data,setData]=useState([])
  const [tempData,setTempData]=useState([])
  const [tempArr,setArr]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3030/getAllPost')
        .then((res) =>{return res.json()})
        .then((res) => {
          setData(res)
          setTempData(res)
          console.log(data)
        })
  }, [])
  
  var formatedPost = tempData.map((e) => {
    return (
      <>
      <div className="col-4 p-2">
        <div class="container">
          <div class="wrapper">
            <img src={e.picture} class="banner-image"/>
            <h2 className="text-white">{e.title}</h2>
            <p>{e.description}</p>
            </div>
            <div class="button-wrapper"> 
              <Link to={`/${e._id}`} class="btn fill">More</Link>
              <Link to={`/editpost/${e._id}`} class="btn fill ms-2">Edit</Link>
              <button class="btn fill m-2" onClick={() => {
                  fetch(`http://localhost:3030/${e._id}`,{ method: "DELETE" })
                  setTempData(data.filter((data)=>{return data._id!==e._id}))
              }}>Delete</button>
            </div>
          </div>
        </div>
      </>
        // <div className="col-4 p-2 con">
        //     <div class="card">
        //         <img src={e.picture} class="card-img-top setHeightWidth" alt="..." />
        //         <video width="320" height="240" controls>
        //           <source src={e.picture} type="video/mp4"/>
        //           <source src={e.picture} type="video/ogg"/>
        //           Your browser does not support the video tag.
        //         </video>
        //         <div class="card-body">
        //             <div class="content">
        //                 <h5 class="card-title">{e.title}</h5>
        //                 <p class="card-text">{e.description}</p>
        //                 <Link to={`/${e._id}`} className="btn btn-primary">More...</Link>
        //                 <Link to={`/editpost/${e._id}`} className="btn btn-primary ms-1">Edit</Link>
        //                 <button class="btn btn-primary ms-1" onClick={() => {
        //                   fetch(`http://localhost:3030/${e._id}`,{ method: "DELETE" })
        //                   setTempData(data.filter((data)=>{return data._id!==e._id}))
        //                 }}>Delete</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
})
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row">
          <img src="./images/new.jpg" className="" alt="load.. " />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="col">
            <table class="table table-bordered text-center">
              <tbody>
                <thead>
                  <tr className="border-0">
                    <button
                      className="m-2 ms-0 fontSize"
                      onClick={() => {
                        navigate("/select");
                      }}
                    >
                      CREATE BLOG
                    </button>
                  </tr>
                </thead>
                <tr>
                  <td onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories=="alltype"}))
                    console.log(tempData)
                  }}>All Type</td>
                </tr>
                <tr>
                  <td onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories=="music"}))
                  }}>Music</td>
                </tr>
                <tr>
                  <td onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories=="movie"}))
                    console.log(data)
                  }}>Movies</td>
                </tr>
                <tr>
                  <td onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories=="sport"}))
                    console.log(data)
                  }}>Sports</td>
                </tr>
                <tr>
                  <td onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories=="tech"}))
                    console.log(data)
                  }}>Tech</td>
                </tr>
                <tr>
                  <td onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories=="fashion"}))
                    console.log(data)
                  }}>Fashion</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {formatedPost}
          </div>
        </div>
      </div>
    </div>
  );
}
