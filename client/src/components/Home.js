import { useNavigate, useParams } from "react-router-dom";
import { catagories } from "./data";
import "../index.css"
export default function Home() {
  const navigate=useNavigate();
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row">
          <img src="./images/flowers-interior-room-home.jpg" className="" />
        </div>
      </div>
      <div className="col-2">
        <div className="col">
          <table class="table table-bordered text-center">
            <tbody>
              <thead>
                <tr className="border-0">
                  <button className="m-2" onClick={()=>{navigate("/post")
                  localStorage.setItem("type","alltype")    
                  }}>CREATE BLOG</button>
                </tr>
              </thead>
              <tr>
                <td onClick={()=>{
                  navigate('/alltype')
                  localStorage.setItem("type","alltype")
                }
                  }>All Type</td>
              </tr>
              <tr>
                <td onClick={()=>{
                  navigate('/music')
                  localStorage.setItem("type","music")}}>Music</td>
              </tr>
              <tr>
                <td onClick={()=>{navigate('/movie')
                localStorage.setItem("type","movie")
              }}>Movies</td>
              </tr>
              <tr>
                <td onClick={()=>{navigate('/sport')
              localStorage.setItem("type","sport")
              }}>Sports</td>
              </tr>
              <tr>
                <td onClick={()=>{navigate('/tech')
              localStorage.setItem("type","tech")
              }}>Tech</td>
              </tr>
              <tr>
                <td onClick={()=>{navigate('/fashion')
              localStorage.setItem("type","fashion")
              }}>Fashion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
