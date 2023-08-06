const express=require("express");
const Product = require("../models/Product");
const PopularProduct = require("../models/PopularProduct");
const { postProduct, postPopularProduct, getProduct, getPouplarProduct, getSlider, createSlider, searchProduct, updateProduct, updateimages, deleteproduct, updatePopularProduct, updatepopularimages, deletepopularproduct, editSlider, updateSliderImage } = require("../controller/productController");
const adminmiddleware = require("../middleware/adminmiddleware");

const productRouter=express.Router();

productRouter.post("/postproduct",adminmiddleware,postProduct);
productRouter.post("/postpopularproduct",postPopularProduct);
productRouter.get('/getproducts',getProduct);
productRouter.get('/popularproduct',getPouplarProduct);
productRouter.get('/allslider',getSlider);
productRouter.post('/createslider',createSlider);
productRouter.post('/editslider',editSlider);
productRouter.post('/updatesliderimage',updateSliderImage);
productRouter.get('/searchproduct/:name',searchProduct);
productRouter.post("/updateproduct",adminmiddleware,updateProduct);
productRouter.post("/updateimage",adminmiddleware,updateimages);
productRouter.post("/deleteproduct",adminmiddleware,deleteproduct);
productRouter.post("/updatepopularproduct",adminmiddleware,updatePopularProduct);
productRouter.post("/updatepopularimage",adminmiddleware,updatepopularimages);
productRouter.post("/deletepopularproduct",adminmiddleware,deletepopularproduct);



module.exports=productRouter;