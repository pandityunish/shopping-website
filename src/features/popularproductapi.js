import { toast } from 'react-toastify';


export const updatepopularproductimage=async({_id,image})=>{
    try {
       
        const res=await fetch("http://localhost:5000/updatepopularimage",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "isRole":"admin"
              },
            body:JSON.stringify({
                _id,image
            })
        }
        );
        console.log(res.body);
     
      
        if(res.status==200){
            const json=await res.json();
            console.log(json);
           
       
      
        }
    } catch (e) {
        console.log(e);
    }
}
export const postReview=async({product_id,userid,userimage,username,rating,review})=>{
    try {
       
        const res=await fetch("http://localhost:5000/postrating",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            body:JSON.stringify({
                
                    "userid":userid,
                    "username":username,
                    "userimage":userimage,
                    "product_id":product_id,
                    "rating":rating,
                    "review":review
                  
            })
        }
        );
        console.log(res.body);
     
      
        if(res.status==200){
            const json=await res.json();
            console.log(json);
           toast.success("Your Review Added Successfully")
       
      
        }
    } catch (e) {
        console.log(e);
    }
}
export const updateSliderimage=async({_id,image})=>{
    try {
       
        const res=await fetch("http://localhost:5000/updatesliderimage",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
            body:JSON.stringify({
                _id,image
            })
        }
        );
        console.log(res.body);
     
      
        if(res.status==200){
            const json=await res.json();
            console.log(json);
           
       
      
        }
    } catch (e) {
        console.log(e);
    }
}
export const updatepopularproduct=async({_id,name,description,price,images,category,navigate,isRole})=>{
    try {
      
        const res=await fetch("http://localhost:5000/updatepopularproduct",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "isRole":isRole
              },
            body:JSON.stringify({
                _id,name,description,price,images,category
            })
        }
        );
     
        console.log(res.body);
        if(res.status==200){
            const json=await res.json();
            console.log(json);
        //    toast.success("Product Edit Succesfully");
           navigate("/dashboard");
       
      
        }
    } catch (e) {
        console.log(e);
        // toast.error("Something wrong")
    }
}
export const editSlider=async({_id,name,description,price,images,category,navigate,})=>{
    try {
      
        const res=await fetch("http://localhost:5000/editslider",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
               
              },
            body:JSON.stringify({
                _id,name,description,price,images,category
            })
        }
        );
     
        console.log(res.body);
        if(res.status==200){
            const json=await res.json();
            console.log(json);
        //    toast.success("Product Edit Succesfully");
           navigate("/dashboard");
       
      
        }
    } catch (e) {
        console.log(e);
        // toast.error("Something wrong")
    }
}
export const postpopularproduct=async({name,description,price,images,category,navigate,rating,isRole})=>{
    try {
      
        const res=await fetch("http://localhost:5000/postpopularproduct",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "isRole":isRole
              },
            body:JSON.stringify({
               name,description,price,images,category,rating
            })
        }
        );
   
      
        if(res.status==200){
            const json=await res.json();
            console.log(json);
        //    toast.success("Product Edit Succesfully");
           navigate("/dashboard");
       
      
        }
    } catch (e) {
        console.log(e);
        // toast.error("Something wrong")
    }
}
export const deletepopularproduct=async({id,isRole,navigate})=>{
    try {
      
        const res=await fetch("http://localhost:5000/deletepopularproduct",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
               
                "isRole":isRole
              },
            body:JSON.stringify({
               id
            })
        }
        );
     
      console.log(res.body)
        if(res.status==200){
            const json=await res.json();
            console.log(json);
        //    toast.success("Product Edit Succesfully");
           navigate("/dashboard");
       
      
        }
    } catch (e) {
        console.log(e);
        // toast.error("Something wrong")
    }
}
export const deletecategory=async({id,navigate})=>{
    try {
      
        const res=await fetch("http://localhost:5000/deletecategory",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
               
               
              },
            body:JSON.stringify({
               id
            })
        }
        );
     
      console.log(res.body)
        if(res.status==200){
            const json=await res.json();
            console.log(json);
        //    toast.success("Product Edit Succesfully");
           navigate("/dashboard");
       
      
        }
    } catch (e) {
        console.log(e);
        // toast.error("Something wrong")
    }
}
export const postcategory=async({name,navigate})=>{
    try {
      
        const res=await fetch("http://localhost:5000/postcategory",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
            body:JSON.stringify({
               name
            })
        }
        );
   
      
        if(res.status==200){
            const json=await res.json();
            console.log(json);
        //    toast.success("Product Edit Succesfully");
           navigate("/dashboard");
       
      
        }
    } catch (e) {
        console.log(e);
        // toast.error("Something wrong")
    }
}