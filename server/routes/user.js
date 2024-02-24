const express = require("express");
const user = require("../model/userDetail");
const router = express.Router();
const jwt = require("jsonwebtoken");
const upload = require("../middlewear/multer");
const sec_key = "adkfkadjf";
const addpost=require("../model/post");
const Addcomment=require("../model/comment");
const moment = require('moment');
const uplodToCloudinary = require("../middlewear/cloudinery");
const comment = require("../model/comment");
const contactPage=require("../model/contactPage")

router.post("/signup", async (req, res) => {
  const data = new user();
  data.name = req.body.name;
  data.username = req.body.username;
  data.password = req.body.password;
  const d = await data.save();

  const paylod = {
    id: d._id,
  };
  const token = jwt.sign(paylod, sec_key);
  res.status(200).json(d);
});

router.post("/login", async (req, res) => {
  const data = await user.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(data);
  if (req.body.username !== "" && req.body.password !== "") {
    if (data) {
      const paylod = {
        id: data._id,
      };

      const token = jwt.sign(paylod, sec_key);
      res.status(200).json(data);
      //   const accessToken = jwt.sign(
      //     data.toJSON(),
      //     process.env.ACCESS_SECRET_KEY,
      //     { expiresIn: "15m" }
      //   );
      //   const refreshToken = jwt.sign(
      //     data.toJSON(),
      //     process.env.REFRESH_SECRET_KEY
      //   );
      //   const newToken = new Token({ token: refreshToken });
      //   await newToken.save();
    } else {
      res.status(401).send("Data not found !!");
    }
  } else {
    res.status(401).send("plese enter all fields first !!");
  }
});

router.post('/addpost',upload.single('user_image'),async(req,res)=>{
  try{
    const newPost=new addpost()
    console.log(req.file)
    const result = await uplodToCloudinary(req.file.path);
    newPost.title=req.body.title
    newPost.description=req.body.description
    newPost.username=req.body.username
    newPost.catagories=req.body.catagories
    newPost.picture = result
    newPost.createddata=new Date()
    const data=await newPost.save()
    res.send({data});
  }catch(error){
    console.error(error);
  }    
})

router.get('/getAllPost',async(req,res)=>{
  try{
    const data=await addpost.find();
    res.status(200).send(data)
  }catch(error){
    console.log(error);
  }
})

router.get('/getByCatagory/:catagory',async(req,res)=>{
  try{
    const data=await addpost.find({catagories:req.params.catagory})
    if(data){
      res.send({data})
    }else{
      res.send(400).send("Data not found !!")
    }
  }catch(error){
    console.log(error);
  }
})

router.get('/:id',async(req,res)=>{
  try{
    const data=await addpost.findOne({_id:req.params.id})
    if(data){
      res.send(data)
    }else{
      res.send("Data not found !!");
    }
  }catch(error){
    console.log(error);
  }
})

router.delete('/:id',async(req,res)=>{
  try{
    const data=await addpost.deleteOne({_id:req.params.id})
    if(data){
      return res.send(data)
    }
    return res.send("Data not deleted successfully ")
  }catch(error){
    console.log(error)
  }
})

router.put('/editpost/:id',upload.single('user_image'),async(req,res)=>{
  try{
    const data=await addpost.findOne({_id:req.params.id})
    const result = await uplodToCloudinary(req.file.path);
    data.title=req.body.title
    data.description=req.body.description
    data.catagories=req.body.catagories
    data.picture=result
    await data.save()
    if(data){
      res.send(data)
    }else{
      res.send("Data Not Updated !!")
    }
    console.log(data)
  }catch(error){
    console.log(error);
  }
})

router.post('/addComment',async(req,res)=>{
  try{
    const newComment=new Addcomment()
    const date = new Date();
    const formattedDate = moment(date).format('DD-MMM-YYYY');
    newComment.name=req.body.name
    newComment.userId=req.body.userId
    newComment.comment=req.body.comment
    newComment.date=formattedDate
    const data=await newComment.save()
    if(data){
      res.send(data)
    }else{
      res.send("Something Went Wrong !!!")
    }
  }catch(error){
    console.log(error);
  }
})

router.get('/getCmnt/:id',async(req,res)=>{
    try{
      const data=await comment.find({userId:req.params.id});
      console.log("......................................",data);
      if(data){
        res.status(200).send(data)
      }
    }catch(error){
      console.log(error);
    }
})

router.delete('/deletecomment/:id',async(req,res)=>{
  try{
    const data=await comment.deleteOne({_id:req.params.id})
    if(data){
      res.send(data)
    }else{
      res.send("Data not deleted successfully ")
    }
  }catch(error){
    console.log(error)
  }
})

router.post('/contactpage',async(req,res)=>{
  try{
    const contact=new contactPage()
    contact.name=req.body.name
    contact.email=req.body.email
    contact.discription=req.body.discription
    const data=await contact.save()
    if(data){
      res.send(data)
    }else{
      res.send("Something Went Wrong !!!")
    }
  }catch(error){
    console.log(error);
  }
})  
module.exports = router;
