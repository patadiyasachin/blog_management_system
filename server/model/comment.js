const mongoose=require('mongoose')
const commentschema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
})

module.exports=mongoose.model('comment',commentschema)