import React,{useState,useEffect} from 'react';
import { json, useLocation } from 'react-router-dom';
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
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PersonOutlineOutlined } from '@mui/icons-material';
import { postReview } from '../features/popularproductapi';
import { getuser } from '../features/authapis';
import { getproductRating } from '../features/productapi';
export default function DetailsScreen() {
    const state=useLocation();
    const dispatch=useDispatch();
    const [imagenumber, setimagenumber] = useState(0);
    let [count, setcount] = useState(1);
    const [productrating, setproductrating] = useState(null)
    const [userdata, setuserdata] = useState({})
useEffect(() => {
    const email=localStorage.getItem("email");
    getproductRating({productid:state.state.id,setproductrating})
 getuser({email,setuserdata});

 console.log(userdata);
}, [])
    // let count=0;
    const stars = [];

    for (let i = 0; i < state.state.rating; i++) {
      stars.push(<span key={i}>★</span>);
    }
    const data=state.state;
   
      useEffect(() => {
        console.log(state.state.productRating);
        dispatch(calculateTotals())
        window.scrollTo(0, 0);
      }, []);
    
    const navigate=useNavigate();
    const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleRatingHover = (value) => {
    setHoverRating(value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const renderStars = (numberOfStars) => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`text-3xl cursor-pointer ${
            i <= (hoverRating || rating) ? 'text-yellow-500' : 'text-black'
          }`}
          onClick={() => handleRatingClick(i)}
          onMouseEnter={() => handleRatingHover(i)}
          onMouseLeave={() => handleRatingHover(0)}
        />
      );
    }

    return stars;
  };
  const RepeatText = ({ times }) => {
    const textArray = Array.from({ length: times }, (_, index) => index + 1);
  
    return (
      <div className='flex '>
       {textArray.map((star,i)=>{
          return <p className='px-[1px] text-green-700'><span key={i}>★</span></p>
       })}
       </div>
    );
  };
  const DateTimeConverter = ({dateString}) => {
    const dateObject = new Date(dateString);
  
    // Format the date as "20 Set 2023"
    const formattedDate = dateObject.toLocaleString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  
    return (
      
        <p className='text-gray-500 text-sm'> {formattedDate}</p>
    );
  };
  const isUserPresent = state.state.productRating&&state.state.productRating .some((user) => user.userid === userdata._id);

  return (
    <>
    <NavBar/>
    <div>

   
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
       isCart:false,
       category:data.category
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
    <div className='lg:mx-16 mx-4 mt-10'>
      <div className='w-[100%] flex gap-3 flex-wrap-reverse'>
        <div className='lg:w-[60%] w-[100%]'>

      
      <h1 className='font-bold text-2xl'>Top Reviews:</h1>
{state.state.productRating.map((e,i)=>(
  <div className='mt-5 ' key={i}>
  <div className='flex w-[100%] justify-between'>
  <div className='flex items-center gap-3'>
  <div className='h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center'>
  <PersonOutlineOutlined />
  </div>
  <p className='font-medium'>{e.username}</p>
  </div>
  <MoreVertIcon/>
  </div>
  <div className='flex mt-2 gap-3 items-center'>
 <RepeatText times={e.rating}/>
       <DateTimeConverter dateString={e.createdAt}/>
  </div>
  <p className='text-sm'>{e.review}
  </p>
  </div>
))}
</div>
{isUserPresent?"": <div className='lg:w-[35%] w-[100%]'>
<div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Rate and Review</h2>
      <div className="mb-4">{renderStars(5)}</div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
          Review
        </label>
        <textarea
          id="review"
          name="review"
          value={review}
          onChange={handleReviewChange}
          className="w-full h-20 bg-gray-200 border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={()=>{
          if(localStorage.getItem("email")===null){
navigate("/login")
          }else{
            if(rating!=0&& review!=null){
              
                        postReview({product_id:state.state.id,rating:rating,review:review,userid:userdata._id,userimage:"",username:userdata.name}).finally(()=>{
                          
                          setRating(0);
                          setReview("")
                        });
  
             }
          }
           
        }}
      >
        Submit
      </button>
    </div>
</div>}
      </div>

    </div>
    </div>
    </>
  )
}
