const express=require("express");
const Order = require("../models/Order");

const orderRouter=express.Router();

orderRouter.post("/postorder",async(req,res)=>{
    try {
        const {fullname,address,phonenumber,landmark,province,city,area,products,totalprice,isCompleted}=req.body;
       
        let order=await Order({fullname,address,phonenumber,landmark,province,city,area,products,totalprice,isCompleted});
     order=await order.save();
     res.json(order);

    } catch (e) {
       res.status(500).json({mes:e.message}) 
    }
});
orderRouter.get("/getallorder",async(req,res)=>{
    try {
        const order=await Order.find({isCompleted:false});
    
     res.json(order);

    } catch (e) {
       res.status(500).json({mes:e.message}) 
    }
});

module.exports=orderRouter;