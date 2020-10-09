const express=require('express');
const mongoose=require('mongoose');
const user_reg=require('../user_reg');
const route = express.Router();

route.post('/',async(req,res)=>{
    const{usertype}=req.body;
    let user_det={};
    user_det.usertype= usertype;
    let userModel=new user_reg(user_det);
   await userModel.save();
   res.json(userModel);
});
module.exports=route;
