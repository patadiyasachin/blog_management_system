const jwt  = require("jsonwebtoken")
const sec_key = "adkfkadjf";

const userLogdin =(req,res,next)=>{
    console.log("called!!");
    const header=req.header("Authorization")
    const token=header.split(' ')[1]

    if(!token){ 
        return res.status(401).send("login first")
    }
    const data=jwt.verify(token,sec_key,(err,data)=>{
        if(err){
            console.log("error from middleware is ",err);
        }
        else{
            console.log("daata of middleware ",data);
        }
    })
    if(!data){
        return res.status(401).send("data not found")
    }
    req.userId=data;
    next()
}

module.exports=userLogdin