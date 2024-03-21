const jwt  = require("jsonwebtoken")
const sec_key = "adkfkadjf";

const userLogdin =(req,res,next)=>{

    try {
        console.log("called!!");
        const authHeader=req.header("Authorization")
        const token=authHeader.split(' ')[1]

        if(!token){ 
            return res.status(401).send("login first")
        }
    
        const data = jwt.verify(token,sec_key);
        if(!data) return res.status(401).send("data not found");
        req.userData=data;
        console.log("data is ",req.userData);
        next()
    } catch (error) {
        console.log(error);
    }
    
}

module.exports=userLogdin