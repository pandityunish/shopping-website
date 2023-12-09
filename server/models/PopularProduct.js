const mongoose=require("mongoose");
const ratingShema = require("./RatingModel");

const popularProductSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    productRating:[ratingShema],

    
    images:[
        {
            type:String
        }
    ]
});

const PopularProduct=mongoose.model("PopularProduct",popularProductSchema);

module.exports=PopularProduct;