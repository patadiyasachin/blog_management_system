import { useState } from "react";
import "../index.css";
import axios from 'axios'
const Post = () => {
    const [data,setData]=useState({})
    const username=JSON.parse(localStorage.getItem('user')).username
    const catagoty=localStorage.getItem('type')
  return (
    <div className="container-fluid">
        <div className="row">
            <img src="./images/retrosupply-jLwVAUtLOAQ-unsplash (1).jpg" class="h-50" alt="loading.."/>
        </div>
        <div className="row">
                <div className="col-2">
                    <input type="file" name="user_image"style={{width:200,backgroundColor:"white"}} onChange={(e)=>{
                        setData({...data,user_image:e.target.files[0]})
                    }}/>
                </div>
                <div className="col-6">
                    <input type="text" placeholder="Add Title" style={{width:400,fontSize:18,backgroundColor:"white",border:"2px solid lightgrey"}} onChange={(e)=>{
                        setData({...data,title:e.target.value})
                    }}/>
                </div>
                <div className="col-4">
                    <button className="mt-2" onClick={()=>{
                        const formData=new FormData()
                        formData.append("user_image",data.user_image)
                        formData.append("title",data.title)
                        formData.append("description",data.description)
                        formData.append("username",username)
                        formData.append("catagories",catagoty)
                        axios.post('http://localhost:3030/addpost',formData)
                        console.log(data)
                        console.log(username)
                        console.log(catagoty)
                    }}>Publish</button>
                </div>  
            </div>

            <div className="row">
                <textarea style={{height:90,width:600,margin:20,maxHeight:90,minHeight:90,borderRadius:10,border:"2px solid lightgrey"}} onChange={(e)=>{
                        setData({...data,description:e.target.value})
                    }} placeholder="Add Discription ..."/>
            </div>
    </div>
  );
};

export default Post;