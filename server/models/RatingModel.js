const mongoose=require("mongoose");

const ratingShema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    userimage:{
        type:String,
    },
    userid:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    }
},
{
    timestamps:true
   }
);

module.exports=ratingShema;