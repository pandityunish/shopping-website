const express=require("express");
const { getallCategory, postCategory, getCategoryProduct } = require("../controller/categoryController");

const categoryRouter=express.Router();


categoryRouter.get('/getallcategory',getallCategory);
categoryRouter.post('/postcategory',postCategory);
categoryRouter.get('/getCategoryProduct/:name',getCategoryProduct);

module.exports=categoryRouter;