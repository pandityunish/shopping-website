const Category=require("../models/CategoryModel");
const Product = require("../models/Product");
module.exports.getallCategory=async(req,res)=>{
    try {
        let categories=await Category.find({})
        res.json(categories);
    } catch (error) {
        res.status(500).json({mes:e.message})
    }
}
module.exports.postCategory=async(req,res)=>{
    try {
       const {name}=req.body;
       let category=await Category({name});
        category.save();
        res.json(category);
    } catch (error) {
        res.status(500).json({mes:e.message})
    }
}
module.exports.getCategoryProduct=async(req,res)=>{
   try {
     const {name}=req.params;
    
     let products=await Product.find({category:name});
     res.json(products);
   } catch (error) {
    res.status(500).json({mes:e.message})
   }
}