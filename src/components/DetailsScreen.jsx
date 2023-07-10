import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { addtoCart, calculateTotals } from '../features/cartSlice';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function DetailsScreen() {
    const state=useLocation();
    const dispatch=useDispatch();
    const [imagenumber, setimagenumber] = useState(0);
    let [count, setcount] = useState(1);
    // let count=0;
    const stars = [];

    for (let i = 0; i < state.state.rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    const data=state.state;
   
      useEffect(() => {
        dispatch(calculateTotals())
        window.scrollTo(0, 0);
      }, []);
    
    const navigate=useNavigate();
  return (
    <>
    <NavBar/>
    <div className='flex lg:flex-row flex-col  lg:mx-16 mx-4 mt-10'>
      
      <div className='lg:w-[50%] sm:w-[80%] w-full'>
      <div className='bg-[#f6f6f6] shadow-sm rounded-lg sm:w-[85%] w-[95%] flex  justify-center sm:h-[450px] h-[400px]'>
      <img src={state.state.images[imagenumber]} alt="" className=' '/>
      </div>
       <div className='flex justify-start items-start gap-2 my-3'>
       {state.state.images.map((image,i)=>{
        return <div className={`bg-[#f6f6f6] shadow-sm rounded-lg w-24 cursor-pointer flex justify-center h-24  ${i==imagenumber?'border border-green-800':''}`} onClick={()=>{
          setimagenumber(i);
        }}>
        <img src={image} alt="" />
        </div>
       })}
       </div>
      </div>
      <div className='mx-5 lg:w-[50%]'>
        <h1 className='text-3xl font-bold'>{state.state.name}</h1>
        <p className='text-sm w-[90%] pt-2 font-medium text-gray-600'>{state.state.description}</p>
        <div className='flex '>
     {stars.map((star)=>{
        return <p className='px-[1px] text-green-700'>{star}</p>
     })}
     <p className='px-1 text-xs pt-1 text-gray-500  '> ({state.state.rating})</p>
     </div>
     <hr className='my-3'/>
     <h1 className='text-2xl font-bold'>${state.state.price}.00</h1>
     <p className='text-sm font-medium  pt-2 text-gray-600'>Suggested payments with 6 months special financing</p>
     <hr className='my-5'/>
     <div className='h-10 w-32 bg-[#f6f6f6] rounded-3xl flex items-center justify-evenly'>
    <RemoveIcon className='cursor-pointer ' onClick={()=>{
      if(count>1){
        count-=1;
        setcount(count)
      }
     
    }}/>
    {count}
  <AddIcon className='cursor-pointer ' onClick={()=>{
    count+=1;
    setcount(count)
  }}/>
     </div>
     <div className='flex justify-between mt-5'>
     <button className='outline-none text-white rounded-3xl sm:w-40 w-32 text-xs font-medium h-10 mt-2 bg-green-800 text-center hover:text-white' onClick={()=>{
      navigate("/buynow", {state:{
       name: data.name,
       description: data.description,
       images: data.images,
       rating: data.rating,
       price: data.price,
       count:count,
       isCart:false
       
    }})
     }}>
        Buy Now
      </button>
      <button className='outline-none  border border-black rounded-3xl sm:w-40 w-32 text-xs font-medium h-10 mt-2  text-center '
      onClick={()=>{
        dispatch(addtoCart({name:data.name,description:data.description,price:data.price,rating:data.rating,images:data.images,count:count}));
        toast.success("Product added to cart",{
          position:"bottom-right"
        })
      }}
      >
        Add to Cart
      </button>
      </div>
      <div className='border rounded-md p-3 mt-6'>
    <div className='flex gap-3'>
    <LocalShippingIcon className='text-orange-400' fontSize='small'/>
    <div>
    <p className='text-sm font-medium  '>Free Delivery</p>
    <u className='text-xs font-medium  text-gray-500'>Enter you Postal code for Delivery Availiabity</u>
    </div>
    </div>
    <div className='flex gap-3 mt-5'>
    <AssignmentReturnedIcon className='text-orange-400' fontSize='small'/>
    <div>
    <p className='text-sm font-medium  '>Return Delivery</p>
    <p className='text-xs font-medium  text-gray-500'>Free 30days Delivery Returns. <u>Details</u></p>
    </div>
    </div>
      </div>
      </div>
     
    </div>
    </>
  )
}
