const express=require("express");
const Order = require("../models/Order");

const orderRouter=express.Router();

orderRouter.post("/postorder",async(req,res)=>{
    try {
        const {fullname,address,phonenumber,landmark,province,city,area,products,totalprice}=req.body;
        let order=await Order({fullname,address,phonenumber,landmark,province,city,area,products,totalprice});
     order=await order.save();
     res.json(order);
    } catch (e) {
       res.status(500).json({mes:e.message}) 
    }
})

module.exports=orderRouter;