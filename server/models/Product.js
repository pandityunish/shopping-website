const mongoose=require("mongoose");
const ratingShema = require("./RatingModel");

const productSchema=mongoose.Schema({

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
    rating:{
        type:Number,
        required:true
    },

productRating:[ratingShema],
    category:{
        type:String,
        required:true
    },
    images:[
        {
            type:String
        }
    ]
});

const Product=mongoose.model("Products",productSchema);

module.exports=Product;