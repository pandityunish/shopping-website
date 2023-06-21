import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addtoCart } from '../features/cartSlice';
import 'react-toastify/dist/ReactToastify.css';


export default function Product({name,description,rating,price,images,product}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>★</span>);
  }
  return (
    <div className='p-6'>
        <div className='relative flex'>

        
     <div className='bg-[#f6f6f6] shadow-sm rounded-lg items-center cursor-pointer flex p-8  h-64 w-64 justify-center' onClick={()=>{
        navigate(`/details/${name}`,
        {state:{
            name,
            description,
            images,
            rating,
            price,
           
        }})
     }}>
    <img src={images[0]} alt="" className='object-fill h-[100%] ' />
     </div>
     <div className='h-8 w-8 bg-white rounded-full absolute top-3 right-3 z-10 flex items-center justify-center cursor-pointer'>
     <FavoriteBorderIcon fontSize='small' className=' text-sm'/>
     </div>
     
     </div>
     <div className='flex justify-between pt-3'>
    <p className='font-bold text-base text-ellipsis'>{name}</p>
    <p className='font-bold text-base text-ellipsis'>${price}</p>
     </div>
     <p className=' text-xs pt-1 text-gray-500  '>{description.slice(0, 30)}...</p>
     <div className='flex '>
     {stars.map((star)=>{
        return <p className='px-[1px] text-green-700'>{star}</p>
     })}
     <p className='px-1 text-xs pt-1 text-gray-500  '> ({rating})</p>
     </div>
      <button className='outline-none  border border-black rounded-2xl w-24 text-xs font-medium h-7 mt-2 hover:bg-green-800 text-center hover:text-white' onClick={()=>{
        dispatch(addtoCart({name,description,price,rating,images,count:1}));
        toast.success("Product added to cart")
      }}>
        Add to Cart
      </button>
    </div>
  )
}
