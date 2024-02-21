import { Link, useLocation, useNavigate} from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
export default function Home() {
  const location=useLocation()
  const [data,setData]=useState([])
  const [tempData,setTempData]=useState([])
  const navigate = useNavigate();
  var isVedio=false
  var emptyArray=false
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
    const splt=e.picture.split('.')
    const len=splt.length-1
    if(e.picture.split('.')[len]==="mp4"){
      isVedio=true
    }else{
      isVedio=false
    }
    console.log("================",isVedio);
    return (
      <>
      <div className="col-4 p-2">
        <div class="container">
          <div class="wrapper">
          {
            isVedio?
            <video width="320" height="240" controls>
            <source src={e.picture} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
            :<img src={e.picture} class="banner-image"/>
          }
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
    )
})
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./images/new.jpg" style={{aspectRatio:3/1,objectFit:"cover"}} className="w-100" alt="load.. " />
            </div>
            <div class="carousel-item">
              <img src="./images/icons-social-media-social-media-wallpaper-preview.jpg" className="w-100" style={{aspectRatio:3/1,objectFit:"cover"}} alt="load.. " />
            </div>
            <div class="carousel-item">
               <img src="./images/Improving-Design-Efficiency-by-Leveraging-Cloud-Based-CAD-Collaboration-Tools_Blog-Header.png" style={{aspectRatio:3/1,objectFit:"cover"}} className="w-100" alt="load.. " />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="col">
            <table class="table table-bordered text-center">
              <tbody>
                <thead>
                  <tr className="border-0" style={{backgroundColor:"#f6f5f7"}}>
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
                  <td style={{backgroundColor:"#f6f5f7"}} onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories==="alltype"}))
                    console.log(tempData)
                  }}>All Type</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"#f6f5f7"}} onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories==="music"})) 
                  }}>Music</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"#f6f5f7"}} onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories==="movie"}))
                    console.log(data)
                  }}>Movies</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"#f6f5f7"}} onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories==="sport"}))
                    console.log(data)
                  }}>Sports</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"#f6f5f7"}} onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories==="tech"}))
                    console.log(data)
                  }}>Tech</td>
                </tr>
                <tr>
                  <td style={{backgroundColor:"#f6f5f7"}} onClick={()=>{
                    setTempData(data.filter((data)=>{return data.catagories==="fashion"}))
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
