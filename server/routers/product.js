const express=require("express");
const Product = require("../models/Product");
const PopularProduct = require("../models/PopularProduct");

const productRouter=express.Router();

productRouter.post("/postproduct",async(req,res)=>{
    try {
        const {name,description,price,rating,images}=req.body;

        let product= Product({name,description,price,rating,images});
      product=await product.save();
      res.json(product);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
});
productRouter.post("/postpopularproduct",async(req,res)=>{
    try {
        const {name,description,price,rating,images}=req.body;

        let product= PopularProduct({name,description,price,rating,images});
      product=await product.save();
      res.json(product);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
});
productRouter.get('/getproducts',async(req,res)=>{
    try {
        const products=await Product.find({});
res.json(products);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
});
productRouter.get('/popularproduct',async(req,res)=>{
    try {
        const products=await PopularProduct.find({});
res.json(products);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
})

module.exports=productRouter;