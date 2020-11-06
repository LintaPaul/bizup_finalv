const mongoose= require('mongoose');
const user=new mongoose.Schema({
    usertype:{
        type:String
    },
    ename:{
        type: String,required: true 
    },
    about:{
        type: String,required:true
    },
    email:{
        type:String,required: true
    },
    category:{
        type:String,
    },
    preference:{
        type:Object,
    },
    address:{
        type:String,required:true
    },
    phone:{
        type:Number
    },
    location:{
        type:String,required:true
    },
    username:{
        type:String,required:true,index: { unique: true }
    },
    password:{
        type:String,
        required:true
    },
    friends:{
        type:Object,
    },
    requests:{
        type:Object,
    }
});
module.exports=mongoose.model('user',user);