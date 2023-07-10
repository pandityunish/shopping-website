import React from 'react'
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import Product from '../components/product';
import Lottie from 'react-lottie';
import empty from '../assets/empty.json'
export default function Favorites() {
    const {favoriteItems} =useSelector((store)=>store.favorite);
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: empty,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  return (
    <>
         <NavBar/>
         <div className='p-6 flex flex-col'>
         <h1 className='text-2xl font-bold text-center'>Your Favorites </h1>
         <hr className='w-[15%] h-1 bg-green-300 mt-4 mx-auto'/>
         <div className='lg:mx-16 mx-0 flex flex-wrap justify-center md:justify-start'>

         { favoriteItems.length===0?<div className='flex  justify-center mx-auto my-20' >
          <Lottie options={defaultOptions}
              height={250}
              width={250}
             /></div>:
            favoriteItems.map((product,i)=>{
                return <Product  description={product.description} images={product.images} name={product.name} price={product.price} rating={product.rating} key={i} product={product}/>
            })
         }
          </div>
         </div>
       
    </>
  )
}
