const mongoose=require("mongoose");

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
    rating:{
        type:Number,
        required:true
    },
    images:[
        {
            type:String
        }
    ]
});

const PopularProduct=mongoose.model("PopularProduct",popularProductSchema);

module.exports=PopularProduct;