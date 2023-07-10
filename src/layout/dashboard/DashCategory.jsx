import { useState,useEffect } from "react"
import React from 'react'
import { getallCategories } from "../../features/productapi";
export default function DashCategory() {
    
   const [categories, setcategories] = useState([]);

   useEffect(() => {
   getallCategories({setcategories})
   }, [])
   
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between items-center w-[100%]'>
       <h1 className='font-bold text-2xl'>Category</h1>
       <button className='flex items-center w-32 h-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl'>
           Add Category
       </button>
    </div>
    <hr className='mt-4'/>
    <div>
      {categories.map((product,index)=>{
       return <div className='p-4 flex gap-1'>
           <p>{index+1}.</p>
         <p className='text-blue-800 cursor-pointer hover:underline'> {product.name}</p> 
           
           </div>
      })}
    </div>
   </div>
  )
}
