import { useNavigate } from 'react-router-dom'
import '../App.css'
export default function SelectType(){
    const navigate=useNavigate()
    return(
        <div class='styleForBtn'>
            {/* <h3>Select Types Of Blog</h3> */}
            <button class="button-33 m-3 me-5 widthAdjust" onClick={()=>{
                navigate('/alltype')
                localStorage.setItem("type","alltype")
            }}>Personal</button>
            <button class="button-33 m-3 me-5 widthAdjust" onClick={()=>{
                navigate('/music')
                localStorage.setItem("type","music")
            }}>Music</button>
            <button class="button-33 m-3 me-5 widthAdjust" onClick={()=>{
                navigate('/movie')
                localStorage.setItem("type","movie") 
            }}>Movie</button>
            <button class="button-33 m-3 me-5 widthAdjust" onClick={()=>{
                navigate('/sport')
                localStorage.setItem("type","sport")
            }}>Sport</button>
            <button class="button-33 m-3 me-5 widthAdjust" onClick={()=>{
                navigate('/tech')
                localStorage.setItem("type","tech")
            }}>Tech</button>
            <button class="button-33 m-3 me-5 widthAdjust" onClick={()=>{
                navigate('/fashion')
                localStorage.setItem("type","fashion")
            }}>Fashion</button>
        </div>
      
    )
}