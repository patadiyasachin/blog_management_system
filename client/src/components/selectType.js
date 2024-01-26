import { useNavigate } from 'react-router-dom'
import '../App.css'
export default function SelectType(){
    const navigate=useNavigate()
    return(
        <div class='styleForBtn'>
            <h3>Select Types Of Blog</h3>
            <button class="button-56 m-3 widthAdjust" role="button" onClick={()=>{
                navigate('/alltype')
                localStorage.setItem("type","alltype")
            }}>All Type</button>
            <button class="button-56 m-3 widthAdjust" role="button" onClick={()=>{
                navigate('/music')
                localStorage.setItem("type","music")
            }}>Music</button>
            <button class="button-56 m-3 widthAdjust" role="button" onClick={()=>{
                navigate('/movie')
                localStorage.setItem("type","movie") 
            }}>Movie</button>
            <button class="button-56 m-3 widthAdjust" role="button" onClick={()=>{
                navigate('/sport')
                localStorage.setItem("type","sport")
            }}>Sport</button>
            <button class="button-56 m-3 widthAdjust" role="button" onClick={()=>{
                navigate('/tech')
                localStorage.setItem("type","tech")
            }}>Tech</button>
            <button class="button-56 m-2 widthAdjust" role="button" onClick={()=>{
                navigate('/fashion')
                localStorage.setItem("type","fashion")
            }}>Fashion</button>
        </div>
      
    )
}