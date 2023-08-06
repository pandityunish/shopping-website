import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {  getuserrole } from '../features/authapis';
import NavBar from '../components/NavBar';
import DashboardProduct from './dashboard/DashboardProduct';
import DashPopularProduct from './dashboard/DashPopularProduct';
import DashSlider from './dashboard/DashSlider';
import DashCategory from './dashboard/DashCategory';
import DashOrder from './dashboard/DashOrder';
export default function Dashboard() {
  const [sides, setsides] = useState("Products")
    const navigate=useNavigate();
    const [userdata, setuserdata] = useState(undefined)
   useEffect(() => {
    const email=localStorage.getItem("email");
    getuserrole({email,navigate,setuserdata});
 
 
   }, [])
  
   


  return (
   <>
   <NavBar/>
   {userdata==undefined?<div>Loading</div>:<div className='flex mx-20 mt-14 justify-between'>
    <div className='w-[20%] flex flex-col items-start h-[90%]    p-4 gap-3 border-[2px]  border-black '> 
    <div className={`hover:bg-green-800 hover:text-white w-full ${sides==="Products"?"bg-green-800 text-white":""} p-2 cursor-pointer rounded-md px-2`} onClick={()=>{
      setsides("Products")
    }}><h1 className='font-medium'>Products</h1></div>
      
    <div className={`hover:bg-green-800 hover:text-white w-full ${sides==="Popular Products"?"bg-green-800 text-white":""} p-2 cursor-pointer rounded-md px-2`} onClick={()=>{
      setsides("Popular Products")
    }}> <h1 className='font-medium'>Popular Products</h1></div>
    <div className={`hover:bg-green-800 hover:text-white w-full ${sides==="Sliders"?"bg-green-800 text-white":""} p-2 cursor-pointer rounded-md px-2`} onClick={()=>{
      setsides("Sliders")
    }}>   <h1 className='font-medium'>Sliders</h1></div>
    <div className={`hover:bg-green-800 hover:text-white w-full ${sides==="Category"?"bg-green-800 text-white":""} p-2 cursor-pointer rounded-md px-2`} onClick={()=>{
      setsides("Category")
    }}>  <h1 className='font-medium'>Category</h1></div>
    <div className={`hover:bg-green-800 hover:text-white w-full ${sides==="Orders"?"bg-green-800 text-white":""} p-2 cursor-pointer rounded-md px-2`} onClick={()=>{
      setsides("Orders")
    }}> <h1 className='font-medium'>Orders</h1></div>
    </div>
    <div className='w-[70%]'>
      {
        sides==="Products"?<DashboardProduct sides={sides}/>:sides==="Popular Products"?<DashPopularProduct sides={sides}/>:sides==="Sliders"?<DashSlider sides={sides}/>:sides==="Category"?<DashCategory sides={sides}/>:sides==="Orders"?<DashOrder/>:<div></div>
      }
    </div>
    </div>}
   </>
    
  )
}
