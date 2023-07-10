const mongoose=require("mongoose");
const Product = require("./Product").schema;

const orderSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
        default:""
    },
    province:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    products:[Product],
    totalprice:{
        type:Number,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
});

const Order= mongoose.model("Orders",orderSchema);

module.exports=Order;