const express=require("express");
const User = require("../models/User");
const bycrypt=require("bcryptjs");
var jwt = require('jsonwebtoken');
const authRouter=express.Router();
const secret="yunish1234";


authRouter.post('/register',async(req,res)=>{
    try {
      const {name,email,mobilenumber,password}=req.body;
       let existingUser=await User.findOne({email});
      if(existingUser){
        res.status(400).json({mes:"Email is not available"})
      }
          let salt=await bycrypt.genSalt(10);
          const secpassword=await bycrypt.hash(password,salt); 
      let user=User({name,email,mobilenumber,password:secpassword});
      
      user=await user.save();
      res.json(user);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
});
authRouter.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        let user=await User.findOne({email});
        if(!user){
            res.status(400).json({mes:"User doesnot exist"})
        };
        const passowrdcompare=await bycrypt.compare(password,user.password);
        const token= jwt.sign({
            data: 'something'
          }, secret, { expiresIn: 60 * 60 });
        if (!passowrdcompare) {
            return res
              .status(400)
              .json({ mes: "Please try to login with valid credentials" });
          }
          res.json({user,token});

    } catch (e) {
        res.status(500).json({mes:e.message})
    }
});

authRouter.post("/getuserdata",async(req,res)=>{
    const {email}=req.body;
    let user=await User.findOne({email});
    res.json(user);
})

module.exports=authRouter;