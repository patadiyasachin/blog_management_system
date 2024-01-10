const cloudinary=require('cloudinary')
cloudinary.config({
    cloud_name: 'de0punalk',
    api_key: '832251157443793',
    api_secret: 'Gm8NN181rgEqpGrQA2ZCg9MyctA'
})

async function uplodToCloudinary(localpath){
    const result=await cloudinary.v2.uploader.upload(localpath,{
        resource_type:"auto"
    })
    console.log(result.secure_url)
    return result.secure_url
}

module.exports=uplodToCloudinary