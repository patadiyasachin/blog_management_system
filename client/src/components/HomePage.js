import { useNavigate } from 'react-router-dom'
import '../css/homePage.css'
import { useEffect, useState } from 'react'
export default function HomePage() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    let isVedio = false
    useEffect(() => {
        fetch('http://localhost:3030/getAllPost',{
            headers:{
                'Authorization':`bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setData(res)
            })
    }, [])

    const formatedData = data.map((data) => {
        const splt = data.picture.split('.')
        const len = splt.length - 1
        console.log("length is ", len);
        if (data.picture.split('.')[len] === "mp4") {
            isVedio = true
        } else {
            isVedio = false
        }


        return (
            <div className="col-4 p-2 con" data-aos="zoom-in">
                <div class="card">
                    {
                        isVedio ?
                            <video controls style={{ height: "44vh",width:"100%"}}>
                                <source src={data.picture} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            : <img src={data.picture} class="card-img-top" alt="..." style={{ height: "44vh" }} />
                    }
                    <div class="card-body">
                        <div class="content">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container-fluid">
            <div className="row">
                <div class="imageDiv">
                    <button class="button-75" role="button" onClick={() => {
                        { token ? navigate('/home') : navigate('/signup') }
                    }}><span class="text">Home  <i class="fa-solid fa-arrow-right-long fa-bounce" style={{ color: "black", marginLeft: "10px" }}></i></span></button>
                    <div class="myText" data-aos="fade-up">
                        <h1>"Welcome to our blog"</h1>
                        <h3> We're delighted to have you join our community of <br /> passionate bloggers and content creators.</h3>
                    </div>
                </div>
            </div>
            <div className='row' class="BlogTitle" data-aos="zoom-in">
                ALL BLOGS
            </div>
            <div className='row' style={{ width: "100%", marginLeft: "9px" }}>
                {formatedData}
            </div>
        </div>
    )
}