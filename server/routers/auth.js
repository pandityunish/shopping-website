const express=require("express");

const { registerUser, loginUser, getUserdata } = require("../controller/authController");
const authRouter=express.Router();


authRouter.post('/register',registerUser);
authRouter.post("/login",loginUser);

authRouter.post("/getuserdata",getUserdata)

module.exports=authRouter;