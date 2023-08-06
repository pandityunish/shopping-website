import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getallpopularProduct } from '../../features/popularProductSlice'
export default function DashPopularProduct({sides}) {
  const navigate=useNavigate()
  const dispatch=useDispatch();
    const {popularProducts}=useSelector((store)=>store.popularProduct)
    useEffect(() => {
      dispatch(getallpopularProduct())
    }, [])
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between items-center w-[100%]'>
       <h1 className='font-bold text-2xl'>Popular Products</h1>
       <button className='flex items-center w-32 h-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl' onClick={()=>{
        navigate("/addpopularproduct")
       }}>
           Add Product
       </button>
    </div>
    <hr className='mt-4'/>
    <div>
      {popularProducts.map((product,index)=>{
       return <div className='p-4 flex gap-1'>
           <p>{index+1}.</p>
         <p className='text-blue-800 cursor-pointer hover:underline' onClick={()=>{
            navigate("/editpopularproduct",{state:{sides:sides, product:product}})
        }}> {product.name}</p> 
           
           </div>
      })}
    </div>
   </div>
  )
}
