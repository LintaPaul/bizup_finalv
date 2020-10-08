const express=require('express');
const mongoose=require('mongoose');
const user_reg=require('../user_reg');
const route=express.route();

route.post('/',async(req,res)=>{
    const{usertype}=req.body;
    let users={};
    users.usertype= usertype;
    let userModel=new user_reg(users);
   await userModel.save();
   res.json(userModel);
})
