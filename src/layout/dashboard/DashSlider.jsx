import React,{useState,useEffect} from 'react'
import { getallSlider } from '../../features/productapi';

export default function DashSlider() {
    const [slider, setslider] = useState([]);
useEffect(() => {
 getallSlider({setslider})
}, [])
  return (
    <div className='flex flex-col'>
    <div className='flex justify-between items-center w-[100%]'>
       <h1 className='font-bold text-2xl'>Sliders</h1>
       <button className='flex items-center w-32 h-8 justify-center outline-none border-none text-white bg-green-800 rounded-3xl'>
           Add Slider
       </button>
    </div>
    <hr className='mt-4'/>
    <div>
      {slider.map((product,index)=>{
       return <div className='p-4 flex gap-1'>
           <p>{index+1}.</p>
         <p className='text-blue-800 cursor-pointer hover:underline'> {product.name}</p> 
           
           </div>
      })}
    </div>
   </div>
  )
}
