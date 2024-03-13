import { Link, useNavigate } from 'react-router-dom';
import '../css/adminpage.css'
import { useEffect, useState } from "react";

export default function Admin() {
    const [userData,setUserData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('http://localhost:3030/admin/getAllUsers')
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setUserData(res)
        })
    },[])

    const formatedUsers=userData.map((user,index)=>{
        return(
            <div class="cont">
            <ul class="responsive-table">
                <span class="temp">
                <li class="table-row">
                    <div class="col col-1" data-label="Job Id" style={{fontSize:"15px"}}>{index+1}</div>
                    {/* <img class="card__thumb" src={user.userImage}/> */}
                    <div class="col col-3" data-label="Customer Name" style={{fontSize:"15px"}}>{user.username}</div>
                    <div class="col col-2" data-label="Amount" style={{fontSize:"15px"}}>{user.phoneNo?user.phoneNo:"___"}</div>
                    <div class="col col-5" data-label="Payment Status"><i class="fa-solid fa-eye" style={{fontSize:"18px",marginRight:"15px"}} onClick={()=>{
                        navigate(`/admin/profile/${user.username}`)
                    }}></i> 
                    <i class="fa-solid fa-list-ul" style={{fontSize:"18px",marginRight:"15px"}} onClick={()=>{
                        navigate(`/admin/addblogs/${user._id}`)
                    }}></i>
                    <i class="fa-solid fa-trash" style={{fontSize:"18px"}} onClick={()=>{
                        fetch(`http://localhost:3030/admin/deleteuser/${user.username}`,{method:"DELETE"})
                        .then((res)=>{
                            setUserData(userData.filter((data)=>{return data.username!==user.username}))
                            localStorage.removeItem('signupuser')
                            localStorage.removeItem('userid')
                            localStorage.removeItem('user')
                            localStorage.removeItem('token')
                        })
                    }}></i></div>
                </li>
                </span>
            </ul>
        </div>
        )
    })

    return (
        <div style={{marginTop:"30px"}}>  
            <h2 class="myH2">User Details</h2>
            <span class="temp">
                <li class="table-header">
                    <div class="col col-1">Index</div>
                    <div class="col col-2">User Name</div>
                    <div class="col col-3">Phone Number</div>
                    <div class="col col-4">Show / delete profile</div>
                    {/* <div class="">Blogs</div> */}
                </li>
            </span>
            {formatedUsers}
        </div>
    )
}

