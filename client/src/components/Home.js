import { Link, useNavigate} from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [data,setData]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3030/getAllPost')
        .then((res) =>{return res.json()})
        .then((res) => {
          setData(res)
          console.log(data)
        })
  }, [])
  
  var formatedPost = data.map((e) => {
    return (
        <div className="col-4 p-2 con">
            <div class="card">
                <img src={e.picture} class="card-img-top setHeightWidth" alt="..." />
                <div class="card-body">
                    <div class="content">
                        <h5 class="card-title">{e.title}</h5>
                        <p class="card-text">{e.description}</p>
                        <Link to={`/${e._id}`} className="btn btn-primary">More...</Link>
                        <Link to={`/editpost/${e._id}`} className="btn btn-primary ms-1">Edit</Link>
                        <button class="btn btn-primary ms-1" onClick={() => {
                          fetch(`http://localhost:3030/${e._id}`,{ method: "DELETE" })
                          setData(data.filter((data)=>{return data._id!==e._id}))
                        }}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
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
                  <td>All Type</td>
                </tr>
                <tr>
                  <td>Music</td>
                </tr>
                <tr>
                  <td>Movies</td>
                </tr>
                <tr>
                  <td>Sports</td>
                </tr>
                <tr>
                  <td>Tech</td>
                </tr>
                <tr>
                  <td>Fashion</td>
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
