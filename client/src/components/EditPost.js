import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
export default function EditPost(){
    const [data,setData]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3030/editpost/${id}`)
        .then((res)=>{return res.json()})
        .then((res)=>{setData(res)})
    },[])

    function editData(){
        const formData=new FormData()
        formData.append("user_image",data.user_image)
        formData.append("title",data.title)
        formData.append("description",data.description)
        formData.append("catagories",data.catagories)
        // fetch(`http://localhost:3030/editpost/${id}`,{
        //     method:"PUT",
        //     body:JSON.stringify(data),
        //     headers:{"Content-Type": "application/json"} 
        // })
        // .then(()=>{
        //     navigate('/home')
        // })

        axios.put(`http://localhost:3030/editpost/${id}`,formData)
        .then((res)=>{
            navigate('/home')
        })
    }   
    return(
        <>
            <div className="">
                <input type='text' className='mt-2 border-1 border-radius-3 w-50' value={data.title} placeholder="Title" onChange={(e) => { setData({ ...data, title: e.target.value }) }} /><br/>
                <input type='text' className='mt-2 border-1 border-radius-3 w-50' value={data.description} placeholder="Description" onChange={(e) => { setData({ ...data, description: e.target.value }) }} /><br/>
                <input type='text' className='mt-2 border-1 border-radius-3 w-50' value={data.catagories} placeholder="Catagorie" onChange={(e) => { setData({ ...data, catagories: e.target.value }) }} /><br/>
                <input type="file" name="user_image"style={{width:200,backgroundColor:"white"}} onChange={(e)=>{
                    setData({...data,user_image:e.target.files[0]})
                }}/>
                <button className='mt-2 border border-radius-3 ' onClick={() => {
                     editData()
                     console.warn(data)
                }}>Update</button>  
            </div>    
        </>
    )
}