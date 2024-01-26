import { useNavigate} from "react-router-dom";
import "../index.css"
import SelectType from "./selectType";
export default function Home() {
  // const history=useHistory()
  const navigate=useNavigate();
  return (
    <div className="container-fluid">
      <div className="col">
        <div className="row">
          <img src="./images/new.jpg" className="" alt="load.. "/>
        </div>
      </div>
      <div className="col-2">
        <div className="col">
          <table class="table table-bordered text-center">
            <tbody>
              <thead>
                <tr className="border-0">
                  <button className="m-2" onClick={()=>{
                    navigate("/select") 
                  }}>CREATE BLOG</button>
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
    </div>
  );
}
