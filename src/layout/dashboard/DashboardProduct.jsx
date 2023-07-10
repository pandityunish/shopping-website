import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getallproduct } from '../../features/productSlice';
export default function DashboardProduct({sides}) {
    const navigate=useNavigate();
    const dispatch=useDispatch();
const {products}=useSelector((store)=>store.products);
useEffect(() => {
  dispatch(getallproduct())
}, [])

  return (
    <div className='flex flex-col'>
     <div className='flex justify-between items-center w-[100%]'>
        <h1 className='font-bold text-2xl'>Products</h1>
        <button className='flex items-center w-32 h-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl'>
            Add Product
        </button>
     </div>
     <hr className='mt-4'/>
     <div>
       {products.map((product,index)=>{
        return <div className='p-4 flex gap-1' key={index}>
            <p>{index+1}.</p>
          <p className='text-blue-800 cursor-pointer hover:underline' onClick={()=>{
            navigate("/editproduct",{state:{sides:sides, product:product}})
        }}> {product.name}</p> 
            
            </div>
       })}
     </div>
    </div>
  )
}
