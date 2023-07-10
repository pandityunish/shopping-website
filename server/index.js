const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const categoryRouter = require("./routers/category");
const app=express();
app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use("/auth",authRouter);
app.use(orderRouter);
app.use(categoryRouter);
const PORT=5000;
const db="mongodb+srv://yunishpandit:yunish1234@cluster0.kooumii.mongodb.net/?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(db).then(()=>{
    console.log("Conected successfully")
}).catch((e)=>{
    console.log(e);
});
app.listen(PORT,"0.0.0.0",()=>{
    console.log("Connected to "+PORT);
})

