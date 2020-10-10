const mongoose= require('mongoose');
const user_det=new mongoose.Schema({
    usertype:{
        type:String,required: true
    },
    ename:{
        type: String,required: true 
    },
    about:{
        type: String
    },
    email:{
        type:String,required: true
    },
    category:{
        type:String
    },
    address:{
        type:String
    },
    location:{
        type:String
    },
    password:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('user_det',user_det);