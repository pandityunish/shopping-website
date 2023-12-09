import { getSlider, getallCategory, getordersapi } from "../routes/ApiRoutes";

export const getallCategories=async({setcategories})=>{
    try {
        const res=await fetch(getallCategory,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              
        });
        // console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            // console.log(json);
            setcategories(json)
      
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const getproductRating=async({productid,setproductrating})=>{
    try {
        const res=await fetch(`http://localhost:5000/getrating/${productid}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              
        });
        // console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            console.log(json);
            setproductrating(json)
      
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const getuserOrder=async({setOrder,email})=>{
    try {
        const res=await fetch("http://localhost:5000/getuserorder",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              body:JSON.stringify({
                email
            })
              
        },);
        // console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            // console.log(json);
            setOrder(json)
      
        }else{
            toast.error("Something wrong")
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const getallSlider=async({setslider})=>{
    try {
        const res=await fetch(getSlider,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              
        });
        // console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            // console.log(json);
            setslider(json)
      
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const getallorders=async({setorders})=>{
    try {
        const res=await fetch(getordersapi,{
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              
        });
        // console.log(res);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            // console.log(json);
            setorders(json)
      
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const updateproductimage=async({_id,image,isRole})=>{
    try {
       
        const res=await fetch("http://localhost:5000/updateimage",
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
        
     
      
        if(res.status==200){
            const json=await res.json();
            console.log(json);
           
       
      
        }
    } catch (e) {
        console.log(e);
    }
}
export const update=async({_id,name,description,price,images,category,navigate,isRole})=>{
    try {
      
        const res=await fetch("http://localhost:5000/updateproduct",
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
export const postproduct=async({name,description,price,images,category,navigate,rating,isRole})=>{
    try {
      
        const res=await fetch("http://localhost:5000/postproduct",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
               
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
export const deleteproduct=async({id,isRole,navigate})=>{
    try {
      
        const res=await fetch("http://localhost:5000/deleteproduct",
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