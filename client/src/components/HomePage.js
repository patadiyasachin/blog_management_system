import { useNavigate } from 'react-router-dom'
import '../css/homePage.css'
export default function HomePage(){
    const navigate=useNavigate()
    const token=localStorage.getItem('token')
    return(
        <div className="container-fluid">
            <div className="row">
                <div class="imageDiv">
                    <button class="button-75" role="button" onClick={()=>{
                        {token?navigate('/home'):navigate('/signup')}
                    }}><span class="text">Home  <i class="fa-solid fa-arrow-right-long fa-bounce" style={{color:"black",marginLeft:"10px"}}></i></span></button>
                    <div class="myText">
                        <h1>"Welcome to our blog"</h1>
                        <h3> We're delighted to have you join our community of <br/> passionate bloggers and content creators.</h3>
                    </div>
                </div>
            </div>  
        </div>   
    )
}