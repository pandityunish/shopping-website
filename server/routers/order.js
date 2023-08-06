const express=require("express");
const Order = require("../models/Order");

const orderRouter=express.Router();

orderRouter.post("/postorder",async(req,res)=>{
    
    try {
        
        const {fullname,email,address,phonenumber,landmark,province,city,area,products,totalprice,isCompleted}=req.body;
        
        let orders=await Order({fullname,email,address,phonenumber,landmark,province,city,area,products,totalprice,isCompleted});
       
     orders=await orders.save();
     
     res.json(orders);
     
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
orderRouter.post("/getuserorder",async(req,res)=>{
    try {
        const {email}=req.body;
        const order=await Order.find({email});
       res.json(order);
     

    } catch (e) {
       res.status(500).json({mes:e.message}) 
    }
})

module.exports=orderRouter;