import { useEffect, useState } from 'react'
import '../css/userProfile.css'
export default function UserProfile() {
    const [userDetail,setUserDetail]=useState({})
    let userData=localStorage.getItem('user')
    let uname=JSON.parse(userData).username
    let total_blog=localStorage.getItem("total_blog")
    useEffect(()=>{
        fetch(`http://localhost:3030/getUserDetails/${uname}`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            setUserDetail(res)
        })
    },[])

    console.warn("user detail is",userDetail)
    return (
        <>
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row d-flex justify-content-center">
                        <div class="col-xl-7 col-md-12">
                            <div class="card user-card-full">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white" style={{height:"60vh"}}>
                                            <div class="m-b-25" style={{width:"20vh",height:"20vh"}}>
                                                <img src={userDetail.userImage?userDetail.userImage:"https://img.icons8.com/bubbles/100/000000/user.png"} alt="loading..." class="img-radius" style={{width:"20vh",height:"20vh",objectFit:"cover",borderRadius:"50%"}}/>
                                            </div>
                                            <h6 class="f-w-600">{userDetail.name?userDetail.name:"----"}</h6>
                                            <p>User</p>
                                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h5 class="m-b-20 p-b-5 b-b-default f-w-600" className='mb-4' style={{color:"orange"}}>Information</h5>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600">UserName</h5>
                                                    <h6 class="text-muted f-w-400">{userDetail.username?userDetail.username:"----"}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600">Phone</h5>
                                                    <h6 class="text-muted f-w-400">{userDetail.phoneNo?userDetail.phoneNo:"----"}</h6>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600">Total Blog</h5>
                                                    <h6 class="text-muted f-w-400">{total_blog}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <h5 class="m-b-10 f-w-600">About Me</h5>
                                                    <h6 class="text-muted f-w-400">{userDetail.about?userDetail.about:"----"}</h6>
                                                </div>
                                            </div>
                                            <ul class="social-link list-unstyled m-t-40 m-b-10">
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="facebook" data-abc="true"><i class="mdi mdi-facebook feather icon-facebook facebook" aria-hidden="false"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="twitter" data-abc="true"><i class="mdi mdi-twitter feather icon-twitter twitter" aria-hidden="false"></i></a></li>
                                                <li><a href="#!" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="instagram" data-abc="true"><i class="mdi mdi-instagram feather icon-instagram instagram" aria-hidden="false"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}