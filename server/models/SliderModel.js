const mongoose=require("mongoose");

const sliderSchema=mongoose.Schema({

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
    category:{
        type:String,
        required:true
    },
    images:[
        {
            type:String
        }
    ]
},{
    timestamps:true
   });

const Slider=mongoose.model("Slider",sliderSchema);

module.exports=Slider;