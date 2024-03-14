import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function GetAllBlogAdmin(){
    const [blog,setBlog]=useState([])
    const {userid}=useParams()
    let isVedio = false

    useEffect(()=>{
        fetch(`http://localhost:3030/admin/getAllPost/${userid}`)
        .then((res)=>{return res.json()})
        .then((res)=>{
            setBlog(res)
        })
    },[])

    let formatedBlog=blog.map((b)=>{
        const splt = b.picture.split('.')
        const len = splt.length - 1
        console.log("length is ", len);
        if (b.picture.split('.')[len] === "mp4") {
            isVedio = true
        } else {
            isVedio = false
        }

        return(
            <div className="col-4 p-2 con" data-aos="zoom-in">
                <div class="card">
                    {
                        isVedio ?
                            <video controls style={{ height: "44vh",width:"100%"}}>
                                <source src={b.picture} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            : <img src={b.picture} class="card-img-top" alt="..." style={{ height: "44vh" }} />
                    }
                    <div class="card-body">
                        <div class="content">
                            <h5 class="card-title" style={{marginBottom:"8px"}}>{b.title}</h5>
                            <p class="card-text" style={{marginBottom:"0",marginTop:"0"}}>{b.description}</p>
                            <button class="btn fill" onClick={() => {
                                fetch(`http://localhost:3030/admin/blog/${b._id}`, { method: "DELETE" })
                                setBlog(blog.filter((data) => { return data._id !== b._id }))
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
        </div>
        )
    })

    return(
        <div className="row" style={{marginLeft:"20px"}}>
            {blog.length!=0?formatedBlog:
            <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",fontSize:"30px",color:"gray"}}>
                <div>No Blog Found !!</div>
            </div>
            </>}
        </div>
    )
}