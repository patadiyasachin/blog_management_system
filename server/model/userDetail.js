const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    },

    userImage:{
        type:String,
        require:true
    },
    // role:{
    //     type:String,
    //     require:true
    // },
    phoneNo:{
        type:Number,
        require:true,
        unique:true
    },
    about:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('user',userSchema)