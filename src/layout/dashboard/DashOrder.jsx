import React,{useState,useEffect} from 'react'
import { getallorders } from '../../features/productapi'

export default function DashOrder() {
const [orders, setorders] = useState([])
useEffect(() => {
 getallorders({setorders})
}, [])

  return (
    <div className='flex flex-col'>
    <div className='flex justify-between items-center w-[100%]'>
       <h1 className='font-bold text-2xl'>Orders</h1>

    </div>
    <hr className='mt-4'/>
    <div>
      {orders.map((product,index)=>{
       return <div className='p-4 flex gap-1'>
           <p>{index+1}.</p>
         <p className='text-blue-800 cursor-pointer hover:underline'> {product.fullname}</p> 
           
           </div>
      })}
    </div>
   </div>
  )
}
