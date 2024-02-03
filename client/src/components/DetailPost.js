import { useEffect, useState } from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
export default function DetailPost(){
    const { id } = useParams()
    const [data, setData] = useState({})
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
        </div>
    )
}