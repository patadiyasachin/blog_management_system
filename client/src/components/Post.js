import { useState } from "react";
import "../index.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Post = () => {
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const [data,setData]=useState({})
    const username=JSON.parse(localStorage.getItem('user')).username
    const catagoty=localStorage.getItem('type')
    const uId=localStorage.getItem('userid')
  return (
        <div className="container-fluid">
            <div className="row">
                {(() => {
                if (catagoty==="music") {
                    return (
                        <img src="./images/dfff083e4b609cab84f89b7324a4f86c.webp" class="h-50" style={{aspectRatio:4/1,objectFit:"cover"}} alt="loading.."/>
                    )
                } else if (catagoty==="alltype") {
                    return (
                        <img src="./images/retrosupply-jLwVAUtLOAQ-unsplash (1).jpg" class="h-50" alt="loading.."/>
                    )
                } else if (catagoty==="movie") {
                    return (
                        <img src="./images/deadpool-movie-background-ultra-hd-4k-340792.jpg" style={{aspectRatio:4/1,objectFit:"cover"}} class="h-50" alt="loading.."/>
                    )
                } else if (catagoty==="sport") {
                    return (
                        <img src="./images/sports-cricket-wallpaper-preview.jpg" style={{aspectRatio:4/1,objectFit:"cover"}} class="h-50" alt="loading.."/>
                    )
                } else if (catagoty==="tech") {
                    return (
                        <img src="./images/backlit-blogging-business-coding.jpg" class="h-50" style={{aspectRatio:4/1,objectFit:"cover"}} alt="loading.."/>
                    )
                } else if (catagoty==="fashion") {
                    return (
                        <img src="./images/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg" style={{aspectRatio:4/1,objectFit:"cover"}} class="h-50" alt="loading.."/>
                    )
                } 
                })()}            
            </div>
        <div className="row">
                <div className="col-2">
                    <input type="file" name="user_image" style={{width:200,backgroundColor:"white"}} onChange={(e)=>{
                        setData({...data,user_image:e.target.files[0]})
                    }}/>
                </div>
                <div className="col-6">
                    <input type="text" placeholder="Add Title" style={{width:400,fontSize:18,backgroundColor:"white",border:"2px solid lightgrey"}} onChange={(e)=>{
                        setData({...data,title:e.target.value})
                    }}/>
                </div>
                <div className="col-4">
                    <button className="mt-2" onClick={async()=>{
                        setLoading(true)
                        const formData=new FormData()
                        formData.append("userid",uId)
                        formData.append("user_image",data.user_image)
                        formData.append("title",data.title)
                        formData.append("description",data.description)
                        formData.append("username",username)
                        formData.append("catagories",catagoty)
                        await axios.post('http://localhost:3030/addpost',formData)
                        .then(()=>{
                            setLoading(false)
                            navigate('/home')
                        })
                        console.log(data)
                        console.log(username)
                        console.log(catagoty)
                    }}>Publish</button>
                </div>  
                {/* <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> */}
            </div>
                
            <div className="row">
                <textarea style={{height:90,width:600,margin:20,maxHeight:90,minHeight:90,borderRadius:10,border:"2px solid lightgrey"}} onChange={(e)=>{
                        setData({...data,description:e.target.value})
                    }} placeholder="Add Discription ..."/>
                {loading?<span class="loader"></span>:""}
            </div>
    </div>
  );
};

export default Post;
