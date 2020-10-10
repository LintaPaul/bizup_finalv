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
    address:{
        type:String,required:true
    },
    location:{
        type:String,required:true
    },
    username:{
        type:String,required:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('user',user);