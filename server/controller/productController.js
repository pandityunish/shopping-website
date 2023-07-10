const PopularProduct = require("../models/PopularProduct");
const Product = require("../models/Product");
const Slider = require("../models/SliderModel");

module.exports.postProduct=async(req,res)=>{
    try {
        const {name,description,price,rating,images,category}=req.body;

        let product= Product({name,description,price,rating,images,category});
      product=await product.save();
      res.json(product);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}

module.exports.postPopularProduct=async(req,res)=>{
    try {
        const {name,description,price,rating,images}=req.body;

        let product= PopularProduct({name,description,price,rating,images});
      product=await product.save();
      res.json(product);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}

module.exports.getPouplarProduct=async(req,res)=>{
    try {
        const products=await PopularProduct.find({});
res.json(products);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}
module.exports.getProduct=async(req,res)=>{
    try {
        const products=await Product.find({});
res.json(products);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}
module.exports.getSlider=async(req,res)=>{
    try {
        const products=await Slider.find({}).sort({updateAt:1});
res.json(products);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}
module.exports.createSlider=async(req,res)=>{
    try {
        const {name,description,price,rating,images,category}=req.body;

        let product= Slider({name,description,price,rating,images,category});
      product=await product.save();
      res.json(product);

    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}

module.exports.searchProduct=async(req,res)=>{
    try {
        const {name}=req.params;
        
        const product=await Product.find()
       
            const filteredItems = product.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()));
          res.json(filteredItems);
         
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}

module.exports.updateProduct=async(req,res)=>{
    try {
        const {_id,name,description,price,images,category}=req.body;
        let product=await Product.updateOne({_id:_id},{$set:{name,description,price,images,category}});
        
        res.json(product);
    } catch (e) {
        res.status(500).json({mes:e.message})
    }
}
module.exports.updateimages=async(req,res)=>{
    try {
        const {_id,image}=req.body;
        const post= await Product.findOneAndUpdate(
            {
             _id:_id
            },
            {
            $push:{
                images:image
            }
            }
        );
       
        // post=await post.save();
         res.json(post);
        } catch (e) {
        res.status(401).json({mes:e.message})
    }
}
