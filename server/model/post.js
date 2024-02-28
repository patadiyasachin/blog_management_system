const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    userid:{
        type:String,
        require:true
    },
    title:{
      type:String,
      required:true,
      unique:true  
    },
    description:{
        type:String,
        required:true,
    },
    picture:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    catagories:{
        type:String,
        required:true,
    },
    createddata:{
        type:Date
    }
})

module.exports=mongoose.model('addpost',postSchema)