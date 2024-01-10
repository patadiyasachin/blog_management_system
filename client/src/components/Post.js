import "../index.css";
const Post = () => {
  return (
    <div className="container-fluid ">
        <div className="row">
            <img src="./images/retrosupply-jLwVAUtLOAQ-unsplash (1).jpg" class="h-50"/>
        </div>
        <div className="row">
            <div className="col-2">
                 <input type="file" style={{width:200,backgroundColor:"white"}}/>
            </div>
            <div className="col-6">
                <input type="text" placeholder="Add Title" style={{width:400,fontSize:18,backgroundColor:"white",border:"2px solid lightgrey"}}/>
            </div>
            <div className="col-4">
                 <button className="mt-2">Publish</button>
            </div>
        </div>

        <div className="row">
            <textarea style={{height:90,width:600,margin:20,maxHeight:90,minHeight:90,borderRadius:10,border:"2px solid lightgrey"}} placeholder="Add Discription ..."/>
        </div>
    </div>
  );
};

export default Post;
