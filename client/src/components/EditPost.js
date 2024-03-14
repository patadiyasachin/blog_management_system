import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import '../App.css'
export default function EditPost(){
    const [loader,setLoader]=useState(false)
    const [data,setData]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3030/${id}`)
        .then((res)=>{return res.json()})
        .then((res)=>{setData(res)})
    },[])

    function editData(){
        const formData=new FormData()
        formData.append("user_image",data.user_image)
        formData.append("title",data.title)
        formData.append("description",data.description)
        formData.append("catagories",data.catagories)
        setLoader(true)
        axios.put(`http://localhost:3030/editpost/${id}`,formData)
        .then((res)=>{
            setLoader(false)
            navigate('/home')
        })
    }   
    return(
        <>
            <div class="parentDiv">
                <div class="containerForEdit">
                    {/* <div class="brand-logo"></div> */}
                    {loader?<span class="loader"></span>:""}
                    <div class="brand-title">Edit Blog Here !</div>
                    <div class="inputsForEdit">
                        <label>Title</label>
                        <input type="text" value={data.title} onChange={(e) => { setData({ ...data, title: e.target.value }) }}/>
                        <label>Description</label>
                        <input type="text" value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }}/>
                        <label>Catagorie</label>
                        <input type="text" value={data.catagories} onChange={(e) => { setData({ ...data, catagories: e.target.value }) }}/>
                        <label>Select File</label>
                        <input type="file" id="imgInput" name="user_image"style={{width:200,backgroundColor:"#f6f5f7",padding:"14px"}} onChange={(e)=>{
                            setData({...data,user_image:e.target.files[0]})
                            console.log(data);
                        }}/>
                        <button type="submit" onClick={() => {
                            editData()
                            console.warn(data)
                        }}>EDIT</button>
                    </div>
                </div>
            </div>
        </>
    )
}