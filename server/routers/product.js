const express=require("express");
const Product = require("../models/Product");
const PopularProduct = require("../models/PopularProduct");
const { postProduct, postPopularProduct, getProduct, getPouplarProduct, getSlider, createSlider, searchProduct, updateProduct, updateimages } = require("../controller/productController");
const adminmiddleware = require("../middleware/adminmiddleware");

const productRouter=express.Router();

productRouter.post("/postproduct",postProduct);
productRouter.post("/postpopularproduct",postPopularProduct);
productRouter.get('/getproducts',getProduct);
productRouter.get('/popularproduct',getPouplarProduct);
productRouter.get('/allslider',getSlider);
productRouter.post('/createslider',createSlider);
productRouter.get('/searchproduct/:name',searchProduct);
productRouter.post("/updateproduct",adminmiddleware,updateProduct);
productRouter.post("/updateimage",adminmiddleware,updateimages);



module.exports=productRouter;