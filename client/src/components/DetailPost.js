import { useEffect, useState } from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
export default function DetailPost(){
    const { id } = useParams()
    const [data, setData] = useState({})
    const [getData,setGetData]=useState([])
    const nme=localStorage.getItem('user')
    const n=JSON.parse(nme).username
    const [coment,setComment]=useState({
       name:n,
       userId:id,
       comment:""
    })
    var isVedio=false
    var splt=[]
    var len=0
    useEffect(() => {
        fetch('http://localhost:3030/' + id)
            .then((res) => { return res.json() })
            .then((res) => {
                setData(res)
            })
    }, [])

    if(data.picture){
        splt=data.picture.split(".")
        len=splt.length-1
        if(data.picture.split('.')[len]=="mp4"){
            isVedio=true
        }
    }

    async function postComment(){
        await fetch('http://localhost:3030/addComment',{
            method: "POST",
            body: JSON.stringify(coment),
            headers: { "Content-Type": "application/json" },
        })
    }

    function getAllComment(){
        fetch(`http://localhost:3030/getCmnt/${id}`)
        .then((res) => { return res.json() })
        .then((res) => {
            setGetData(res)
            console.log(".....",getData);
        })
        console.log(".....",getData);
    }

    const formatedComment=getData.map((d)=>{
        return(
            <div style={{backgroundColor:'white',height:80,width:700,marginLeft:30,marginTop:20,borderRadius:20}}>
                <div className='row'>
                    <div className='col-11'>
                        <h4>{d.name}</h4>
                    </div>
                    <div className='col'>
                        <img src='./images/3405244.png' style={{height:30,width:30,margin:2,transition:"all ease .5s"}} onClick={()=>{
                            fetch(`http://localhost:3030/deletecomment/${d._id}`,{
                                method:"DELETE"
                            })    
                            .then(()=>{
                                setGetData(getData.filter((data)=>{return data._id!==d._id}))
                            })
                        }}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-8'>
                        <h5>{d.comment}</h5>
                    </div>
                    <div className='col'>
                        <h6 className='m-2'>{d.date}</h6>
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="container-fluid">
            <div className="row customHeight">
                <div className="col">
                {
                    isVedio?
                    <video width="320" height="240" controls className="customHeightWidth">
                    <source src={data.picture} id="imgId" type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video>
                    :<img src={data.picture} className="customHeightWidth"/>
                }
                    {/* <video width="320" height="240" controls className="customHeightWidth">
                    <source src={data.picture} id="imgId" type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video> */}
                    {/* <img src={data.picture} className="customHeightWidth"/> */}
                </div>
            </div>
            <div className="row">
                <h1 className='text-center'>{data.title}</h1>
                <h3>{data.description}</h3>
                <h3>{data.catagories}</h3>
            </div>

            <div className='row'>
                <div className='col-11'>
                    <textarea style={{height:90,width:"100%",margin:10,marginRight:0,maxHeight:90,minHeight:90,borderRadius:10,border:"2px solid lightgrey",padding:9}} placeholder="Add Your Comments ..." onChange={(e)=>{
                        setComment({...coment,comment:e.target.value})
                    }}/>
                </div>
                <div className='col'> 
                     <img src="./images/360_F_293724835_LqDz77Sl5zGWOU5eEcPYMM99qeBiiaiu.jpg" style={{height:100,width:81,margin:0}} onClick={()=>{
                        postComment()
                        getAllComment()
                     }}/>
                </div>
            </div>
            
            <div className='row'>
                {formatedComment}
            </div>
        </div>
    )


}