import { useEffect, useState } from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
export default function DetailPost(){
    const { id } = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('http://localhost:3030/' + id)
            .then((res) => { return res.json() })
            .then((res) => {
                setData(res)
            })
    }, [])

    return(
        <div className="container-fluid">
            <div className="row customHeight">
                <div className="col">
                    <img src={data.picture} className="customHeightWidth"/>
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