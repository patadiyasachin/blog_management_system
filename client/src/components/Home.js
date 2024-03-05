import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"
import "../index.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState([])
  const [tempData, setTempData] = useState([])
  const [len, setLen] = useState(0)
  const navigate = useNavigate();
  const uId = localStorage.getItem("userid")
  var isVedio = false
  useEffect(() => {
    fetch(`http://localhost:3030/allPost/${uId}`)
      .then((res) => { return res.json() })
      .then((res) => {
        setData(res)
        setTempData(res)
        console.log(data)
      })
  }, [])

  // const myStyle=()=>{
  //   document.getElementById('sportType').style.transition="smooth"
  // }

  var formatedPost = tempData.map((e, index) => {
    localStorage.setItem("total_blog", index + 1)
    const splt = e.picture.split('.')
    const len = splt.length - 1
    console.log("length is ", len);
    if (e.picture.split('.')[len] === "mp4") {
      isVedio = true
    } else {
      isVedio = false
    }
    console.log("================", isVedio);
    console.log("================", tempData.length);
    return (
      <>
        {
          <div className="col-4 p-2" data-aos="zoom-in">
            <div class="container">
              <div class="wrapper">
                {
                  isVedio ?
                    <video width="320" height="240" controls>
                      <source src={e.picture} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    : <img src={e.picture} class="banner-image" alt="loading.." />
                }
                <h2 className="text-white">{e.title}</h2>
                <p>{e.description}</p>
              </div>
              <div class="button-wrapper">
                <Link to={`/${e._id}`} class="btn fill">More</Link>
                <Link to={`/editpost/${e._id}`} class="btn fill ms-2">Edit</Link>
                <button class="btn fill m-2" onClick={() => {
                  fetch(`http://localhost:3030/${e._id}`, { method: "DELETE" })
                  setTempData(data.filter((data) => { return data._id !== e._id }))
                }}>Delete</button>
              </div>
            </div>
          </div>
        }
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
                <img src="./images/new.jpg" style={{ aspectRatio: 3 / 1, objectFit: "cover" }} className="w-100" alt="load.. " />
              </div>
              <div class="carousel-item">
                <img src="./images/icons-social-media-social-media-wallpaper-preview.jpg" className="w-100" style={{ aspectRatio: 3 / 1, objectFit: "cover" }} alt="load.. " />
              </div>
              <div class="carousel-item">
                <img src="./images/Improving-Design-Efficiency-by-Leveraging-Cloud-Based-CAD-Collaboration-Tools_Blog-Header.png" style={{ aspectRatio: 3 / 1, objectFit: "cover" }} className="w-100" alt="load.. " />
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
                  <tr className="border-0" style={{ backgroundColor: "#f6f5f7" }}>
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
                  <td style={{ backgroundColor: "#f6f5f7" }} onClick={() => {
                    setTempData(data.filter((data) => { return data.catagories === "alltype" }))
                    setLen(tempData.length)
                    console.log(data, len)
                  }}>All Type</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#f6f5f7" }} onClick={() => {
                    setTempData(data.filter((data) => { return data.catagories === "music" }))
                    setLen(tempData.length)
                    console.log(data, len);
                  }}>Music</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#f6f5f7" }} onClick={() => {
                    setTempData(data.filter((data) => { return data.catagories === "movie" }))
                    setLen(tempData.length)
                    console.log(data, len)
                  }}>Movies</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#f6f5f7" }} id="sportType" onClick={() => {
                    setTempData(data.filter((data) => { return data.catagories === "sport" }))
                    setLen(tempData.length)
                    console.log(data, len)
                  }}>Sports</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#f6f5f7" }} onClick={() => {
                    setTempData(data.filter((data) => { return data.catagories === "tech" }))
                    setLen(tempData.length)
                    console.log(data, len)
                  }}>Tech</td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: "#f6f5f7" }} onClick={() => {
                    setTempData(data.filter((data) => { return data.catagories === "fashion" }))
                    setLen(tempData.length)
                    console.log(data, len)
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
          <div id="dataNotFoundDiv" style={{ textAlign: "center" }}>
            {/* Data not found !! */}
          </div>
        </div>
      </div>
    </div>
  );
}
