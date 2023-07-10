 const adminmiddleware=async(req,res,next)=>{
   try {
     const {isRole}=req.header('isRole');
     if(isRole==="user"){
         res.status(400).json({mes:"You are not allowed"})
     }
     next();
   } catch (e) {
    res.status(500).json({mes:e.message})
   }
}

module.exports=adminmiddleware;