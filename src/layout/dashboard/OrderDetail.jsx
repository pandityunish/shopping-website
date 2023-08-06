import React,{useState} from 'react'
import NavBar from '../../components/NavBar'
import { useLocation } from 'react-router-dom';
import Product from '../../components/product';
export default function OrderDetail() {
    const [sides, setsides] = useState("Orders");
    const state=useLocation();
  return (
    <>
      <NavBar/>
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
         <div className='flex justify-between'>
         <h1 className='font-bold text-2xl'>{state.state.product.fullname}</h1>
         <h1>Total Price: Rs {state.state.product.totalprice}</h1>
         </div>
           <p className='pt-6'>Full Name: {state.state.product.fullname}</p>
           <p className='pt-6'>Address: {state.state.product.address}</p>
           <p className='pt-6'>Phone Number: {state.state.product.phonenumber}</p>
           <p className='pt-6'>Email: {state.state.product.email}</p>
           <p className='pt-6'>Landmark: {state.state.product.landmark}</p>
           <p className='pt-6'>Province: {state.state.product.province}</p>
           <p className='pt-6'>City: {state.state.product.city}</p>
           <p className='pt-6'>Area: {state.state.product.area}</p>
           <h1 className='font-bold text-xl mt-6'>Products</h1>
           {state.state.product.products.map((product,i)=>{
            return <div className='w-[35%]'><Product product={product} description={product.description} images={product.images} name={product.name} price={product.price} rating={product.rating}/></div> 
           })}
          <div className='flex justify-end mb-3'>
            <button className='flex items-center w-32 h-8 mt-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl ' onClick={() => {
             
            
              
           
            }}>Completed</button>
          </div>

        </div>
      </div>
    </>
  )
}
