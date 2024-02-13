const mongoose=require('mongoose')
const contectSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model('contactDetail',contectSchema)