import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Slider({slider}) {
const navigate=useNavigate();
  return (
    <div className='lg:w-[90%] m-7 lg:m-0 lg:mx-16 bg-[#fcf0e4]  mt-3 lg:flex lg:flex-row lg:justify-between flex flex-col justify-center cursor-pointer'
    onClick={()=>{
      navigate(`/details/${slider[0].name}`,
        {state:{
           name: slider[0].name,
           description: slider[0].description,
           images: slider[0].images,
           rating: slider[0].rating,
           price: slider[0].price,
             
        }})
    }}
    >
        <div className='lg:p-14 p-8'>
        <h1 className='font-bold md:text-4xl text-2xl text-green-800 font-sans'>Grab Upto 50% Off On <br />{slider[0].name} </h1>
        <button className='rounded-3xl shadow-md bg-green-800 border-none h-10 w-24 text-white text-sm mt-4'>Buy Now</button>
        </div>
        <div className='h-64 pr-[20%]'>
      <img src={slider[0].images[0]} alt="" className='h-full'/>
        </div>
    </div>
  )
}
