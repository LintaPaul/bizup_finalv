const mongoose= require('mongoose');
const user_det=new mongoose.Schema({
    usertype:{
        type:String
    },
    ename:{
        type: String
    },
    about:{
        type: String
    }
});
module.exports=user_reg=mongoose.model('user_det',user_det);