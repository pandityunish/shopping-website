import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export const loginuser=async({email,password,navigate})=>{
 
    try {
        const res=await fetch("http://localhost:5000/auth/login",{
            method:"POST",
            // crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              body: JSON.stringify({
                email,
                password,
              }),
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            console.log(json);
         localStorage.setItem("token",json.token);
         localStorage.setItem("email",json.user.email);
        navigate("/")
        }
    } catch (e) {
        toast.error("Something wrong")
    }
}

export const registeruser=async({name,mobilenumber,email,password,navigate})=>{
 
    try {
        const res=await fetch("http://localhost:5000/auth/register",{
            method:"POST",
            // crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              body: JSON.stringify({
                name,
                mobilenumber,
                email,
                password,
              }),
        });
        console.log(res.body);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            console.log(json);
       
        navigate("/login")
        }
    } catch (e) {
        toast.error("Something wrong")
    }
}
export const getuser=async({email,setuserdata})=>{
 
    try {
        const res=await fetch("http://localhost:5000/auth/getuserdata",{
            method:"POST",
            // crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              body: JSON.stringify({
                email,
              }),
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            console.log(json);
            setuserdata(json)
      
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const getuserrole=async({email,navigate,setuserdata})=>{
 
    try {
        const res=await fetch("http://localhost:5000/auth/getuserdata",{
            method:"POST",
            // crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
              },
              body: JSON.stringify({
                email,
              }),
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        if(res.status==200){
            const json=await res.json();
            setuserdata(json)
           if(json.role==="user"){
            navigate("/profile")
           }
      
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}
export const placeorder=async({fullname,phonenumber,address,landmark,province,city,area,products,totalprice,navigate,cartItems,email})=>{
    try {
      console.log(email)
        const res=await fetch("http://localhost:5000/postorder",
        {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              
                
              },
            body:JSON.stringify({
                fullname,email,phonenumber,address,landmark,province,city,area,products,totalprice,isCompleted:false
            })
        }
        );
        // if (!res.ok) {
        //     throw new Error(`HTTP error! status:`);
        //   }
       
        if(res.status==200){
            const json=await res.json();
            console.log(json);
           toast.success("Order Placed Succesfully");
           navigate("/");
         cartItems=[];
         cartItems.length=0;
      
        }else{
            toast.error("Something wrong")
        }
    } catch (e) {
        console.log(e);
        toast.error("Something wrong")
    }
}