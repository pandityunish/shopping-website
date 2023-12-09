import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';
import MoneyIcon from '@mui/icons-material/Money';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { placeorder } from '../features/authapis';
import { useSelector } from 'react-redux';
import KhaltiCheckout from "khalti-checkout-web";

export default function BuyNow() {
    const state=useLocation();
    const navigate=useNavigate();
    const charge=20;
    const { itemnumber, cartItems,totalamount } = useSelector((store) => store.cart);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [fullname, setfullname] = useState("");
    const [inicatekhalti, setinicatekhalti] = useState(false)
    const [address, setaddress] = useState("");
    const [phonenumber, setphonenumber] = useState("");
    const [transaction_pin, settransaction_pin] = useState("")
    const [mobile, setmobile] = useState("")
    const [landmark, setlandmark] = useState("");
    const [province, setprovince] = useState("");
    const [city, setcity] = useState("");
    const [area, setarea] = useState("");
   
    let config = {
      "publicKey": "test_public_key_e8d782299ca14ca0957d2d16657a088c",
      "productIdentity": "1234567890",
      "productName": "Drogon",
      "productUrl": "http://gameofthrones.com/buy/Dragons",
      "eventHandler": {
        onSuccess (payload) {
          let email=localStorage.getItem("email");
          if(state.state.isCart==false){
      
      console.log(fullname,email,phonenumber,address,landmark,province,city,area)
      placeorder({
        fullname,email,phonenumber,address,landmark,province,city,area,
        products:[{
        name:state.state.name,
        description:state.state.description,
        price:state.state.price,
        images:state.state.images,
        rating:state.state.rating,
        category:state.state.category
    
      }],totalprice:state.state.price+charge,navigate,cartItems})
     }else{
      placeorder({
        fullname,email,phonenumber,address,landmark,province,city,area,
        products:cartItems,totalprice:totalamount+charge,navigate,cartItems});

     }
          console.log(payload);
        },
        // onError handler is optional
        onError (error) {
          // handle errors
          console.log(error);
        }
      },
      // one can set the order of payment options and also the payment options based on the order and items in the array
      paymentPreference: [
        "MOBILE_BANKING",
        "KHALTI",
        "EBANKING",
        "CONNECT_IPS",
        "SCT",
      ],
    };
    let checkout = new KhaltiCheckout(config);

  return (
   
    <>s
<NavBar/>
<div className='lg:p-10 p-2 mt-10'>

    <div className='flex gap-7 flex-wrap'>
        <div className='flex flex-col lg:w-[60%] w-[100%] '>

{fullname===""? <div className={`flex h-20  items-center cursor-pointer justify-center shadow-xl rounded-md`} onClick={
  handleOpen
} >
    <AddIcon/>
   <p>Add Delivery Address</p>
</div>:<div></div>}

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"

      >
      <div className='bg-white h-[80%] lg:w-[55%] w-[100%] absolute top-[10%] left-[20%] border p-3'>
     <div className='flex justify-between'>
     <p className='text-sm'>Add Delivery Address</p>
     <CloseOutlinedIcon className='cursor-pointer' onClick={handleClose}/>
     </div>
     

     <hr className='my-3'/>
     <div className='flex flex-wrap gap-8'>
     <div>
     <p className='text-sm my-1'>Full Name</p>
     <input type="text" id='name' name='name' onChange={(e)=>setfullname(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='Enter you Full Name'/> 
     </div>
     <div>
     <p className='text-sm my-1'>Address</p>
     <input type="text" id='adderess' name='address' onChange={(e)=>setaddress(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='House No./building/area/street'/> 
     </div>
     </div>
     <div className='flex flex-wrap gap-8 mt-4'>
     <div>
     <p className='text-sm my-1'>Mobile Number</p>
     <input type="text" id='phonenumber' name='phonenumber' onChange={(e)=>setphonenumber(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='Enter you Mobile Number'/> 
     </div>
     <div>
     <p className='text-sm my-1'>Landmark(optional)</p>
     <input type="text" id='lankmark' name='landmark' onChange={(e)=>setlandmark(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='Landmark'/> 
     </div>
     </div>
     <div className='my-2'>
     <p className='text-sm my-1'>Province</p>
     <input type="text" id='province' name='province' onChange={(e)=>setprovince(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='Province'/> 
     </div>
     <div className='my-2'>
     <p className='text-sm my-1'>City</p>
     <input type="text" id='city' name='city' onChange={(e)=>setcity(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='City'/> 
     </div>
     <div className='my-2'>
     <p className='text-sm my-1'>Area</p>
     <input type="text" id='area' name='area' onChange={(e)=>setarea(e.target.value)}  className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='Area'/> 
     </div>
     <div className='flex justify-end items-end pb-6'>
     <button className='h-10 w-32 shadow-lg  mt-5 ml-4 bg-green-800  text-white' onClick={()=>{
    handleClose();
  }}>
      Save
  </button>
     </div>
    
      </div>
      </Modal>
<div className=' flex p-4 mt-10 flex-col  shadow-xl rounded-md'>
  {state.state.isCart==true?<div>
{cartItems.map((item)=>{
  return <div className='flex items-center justify-between mt-3'>
    
  <div className='flex gap-4 items-center'>
  <div className='bg-[#f6f6f6] shadow-sm rounded-lg w-16 cursor-pointer flex justify-center h-16 '>
<img src={item.images[0]} alt="" />
</div>
<div className='flex flex-col'>
  <p>{item.name}</p>
  <p className=' text-xs pt-1 text-gray-500  '>{item.description.slice(0, 30)}...</p>
  <div className='flex items-center justify-center mt-2 border h-5 w-20 border-green-500 rounded-sm'>
    <p className=' text-xs/[0.7rem]  text-green-500  '>Free Delivery</p>
  </div>
</div>
<p className='lg:px-10'>Qty:{item.count}</p>
  </div>
  <p>${item.price}</p>
  </div>
})}

  </div>:<div className='flex items-center justify-between'>
    
    <div className='flex gap-4 items-center'>
    <div className='bg-[#f6f6f6] shadow-sm rounded-lg w-16 cursor-pointer flex justify-center h-16 '>
  <img src={state.state.images[0]} alt="" />
  </div>
  <div className='flex flex-col'>
    <p>{state.state.name}</p>
    <p className=' text-xs pt-1 text-gray-500  '>{state.state.description.slice(0, 30)}...</p>
    <div className='flex items-center justify-center mt-2 border h-5 w-20 border-green-500 rounded-sm'>
      <p className=' text-xs/[0.7rem]  text-green-500  '>Free Delivery</p>
    </div>
  </div>
  <p className='lg:px-10'>Qty:{state.state.count}</p>
    </div>
    <p>${state.state.price}</p>
    </div>}
    
    <hr className='mt-5'/>
    <div className='flex mt-4 justify-between items-center'>
    <div className='border rounded-md w-[60%] flex justify-between items-center h-14 px-3'>
    <div className='flex  items-center justify-center gap-1'>
        <MoneyIcon className='text-green-400 ' fontSize='small'/>
    <p className='text-sm text-gray-500'>Smart Voucher</p>
    </div>
    <div className='flex  items-center justify-center'>
    <p className='text-sm text-gray-500'>Get Voucher</p>
        <ChevronRightIcon fontSize='small'/>
    </div>
    
    </div>
    <div className='flex flex-col '>
        <p className='text-sm text-gray-500'>{state.state.isCart==false? state.state.count:itemnumber} Item(s). Subtotal:<span className='text-green-600'>${state.state.isCart==false? state.state.price:totalamount}</span></p>
       
    </div>
    </div>
</div>
        </div>
<div className='flex p-4 w-[400px] flex-col h-[40%]  shadow-xl rounded-md'>
 <p className='text-sm text-gray-500 font-bold'>Discount and Payment</p>
 <div className='flex pt-4 justify-between items-center'>
 <div className='flex   gap-1'>
        <MoneyIcon className='text-green-400 ' fontSize='small'/>
    <p className='text-sm text-gray-500'>Shopcart Voucher</p>
    </div>
    <p className='text-sm text-gray-500'>No Application Voucher</p>
 </div>
<hr className='mt-5'/>
<p className='text-sm text-gray-500 font-semibold mb-2'>Order Summary</p>
<div className='flex justify-between '>
  <p className='text-sm text-gray-500 font-semibold p-1'>Items Total</p>
  <p className='text-sm'>${state.state.isCart==false? state.state.price:totalamount}</p>
</div>
<div className='flex justify-between '>
  <p className='text-sm text-gray-500 font-semibold p-1'>Delivery Fee</p>
  <p className='text-sm'>${charge}</p>
</div>
<div className='flex justify-between '>
  <p className='text-sm text-gray-500 font-semibold p-1'>Total Payment</p>
  <p className='text-sm'>${state.state.isCart==false? state.state.price+charge:totalamount+charge}</p>
</div>
<p className='text-sm text-gray-500  text-right'>All Tax Included</p>
<button className='h-10 w-80 mt-5 ml-4 bg-green-800  text-white' onClick={()=>{
   let email=localStorage.getItem("email");
   if(email==null){

   }else{
  if(fullname==""){

  }else{
  // setinicatekhalti(true
  console.log(state.state.isCart==false? state.state.price+charge:totalamount+charge)
  checkout.show({amount: state.state.isCart==false? state.state.price+charge*100:totalamount+charge*100});
    
  }
   }
   
  }}>
      Place Order
  </button>
</div>
    </div>
</div>
    </>
  )
}
