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
        // if (!res.ok) {
        //     throw new Error(`HTTP error! status:`);
        //   }
      
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