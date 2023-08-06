const express=require("express");
const { getallCategory, postCategory, getCategoryProduct, deleteCategory } = require("../controller/categoryController");

const categoryRouter=express.Router();


categoryRouter.get('/getallcategory',getallCategory);
categoryRouter.post('/postcategory',postCategory);
categoryRouter.get('/getCategoryProduct/:name',getCategoryProduct);
categoryRouter.post('/deletecategory',deleteCategory);
module.exports=categoryRouter;