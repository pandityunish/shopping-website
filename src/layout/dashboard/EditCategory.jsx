import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { deletecategory } from '../../features/popularproductapi';

export default function CategoryEditPage({sides}) {
  const navigate=useNavigate()
  const state = useLocation();
   const [productname, setproductname] = useState(state.state.product.name)
  return (
    <>
      <NavBar />
      <div className='flex mx-20 mt-14 justify-between'>

        <div className='w-[20%] flex flex-col items-start h-[90%]    p-4 gap-3 border-[2px]  border-black '>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Products" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Products")
          }}><h1 className='font-medium'>Products</h1></div>

          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Popular Products" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Popular Products")
          }}> <h1 className='font-medium'>Popular Products</h1></div>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Sliders" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Sliders")
          }}>   <h1 className='font-medium'>Sliders</h1></div>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Category" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Category")
          }}>  <h1 className='font-medium'>Category</h1></div>
          <div className={`hover:bg-green-800 hover:text-white w-full ${sides === "Orders" ? "bg-green-800 text-white" : ""} p-2 cursor-pointer rounded-md px-2`} onClick={() => {
            setsides("Orders")
          }}> <h1 className='font-medium'>Orders</h1></div>
        </div>
        <div className='flex flex-col w-[70%]'>
          <div className='flex justify-between items-center w-[100%]'>
            <h1 className='font-bold text-2xl'>{state.state.product.name}</h1>
            <button className='flex items-center w-32 h-8 justify-center outline-none border-none text-white bg-red-800 rounded-3xl' onClick={()=>{
                deletecategory({id:state.state.product._id,navigate:navigate})
            }}>
              Delete
            </button>
          </div>
          <p className='text-lg my-1 mt-4'>Product Name:</p>
          <input type="text" id='name' name='name' value={productname} onChange={(e) => setproductname(e.target.value)} className='w-80 h-10 border outline-none px-4   placeholder:items-center' placeholder='Product Name' />
          
          <div className='flex justify-end mb-3'>
            <button className='flex items-center w-32 h-8 mt-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl ' onClick={() => {
              
             if(selectedImage===null){

             }else{
              
 uploadimage();

//  console.log(productimages)
//  update({_id:state.state.product._id,category:category,images:productimages,description:productdescription,isRole:"admin",name:productname,navigate,price:productprice})
             }
              
            }}>Save</button>
          </div>

        </div>
      </div>
    </>
  )
}
