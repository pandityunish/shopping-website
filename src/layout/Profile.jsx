import React,{useState,useEffect} from 'react'
import NavBar from '../components/NavBar'
import { getuser } from '../features/authapis'
import { useNavigate } from 'react-router-dom'
export default function Profile() {
const [userdata, setuserdata] = useState({})
useEffect(() => {
    const email=localStorage.getItem("email");
 getuser({email,setuserdata});
 console.log(userdata);
}, [])
const navigate=useNavigate();

  return (
    <div>
        <NavBar/>
      <div className='p-10 px-16'>
      <h1 className='font-medium text-3xl'>My Profile</h1>
      <div className='bg-[#f6f6f6] p-4 mt-5 flex flex-wrap  md:px-10 px-1'>
       <div className='flex flex-col p-5 md:w-[33%]'>
         <p className='py-3 text-sm'>Full Name</p>
         <p className='font-medium'>{userdata.name}</p>
       </div>
       <div className='flex flex-col p-5 md:w-[33%]'>
         <p className='py-3 text-sm'>Email address</p>
         <p className='font-medium'>{userdata.email}</p>
       </div>
       <div className='flex flex-col p-5 md:w-[33%]'>
         <p className='py-3 text-sm'>Mobile</p>
         <p className='font-medium'>{userdata.mobilenumber==""?"Enter you phonenumber":userdata.mobilenumber}</p>
       </div>
       <div className='flex flex-col p-5 md:w-[33%]'>
         <p className='py-3 text-sm'>Birthday</p>
         <p className='font-normal text-gray-400'>Please enter you Birthday</p>
       </div>
       <div className='flex flex-col p-5 md:w-[33%]'>
         <p className='py-3 text-sm'>Gender</p>
         <p className='font-normal text-gray-400'>Please enter you Gender</p>
       </div>

     
      </div>
      <div className='flex flex-col justify-between items-center md:flex-row '>
       
      
      <div className='flex flex-col'>
      <button className='h-10 w-80 mt-5 bg-green-800 text-white' onClick={()=>{
        
    }}>
        EDIT PROFILE
    </button>
    <button className='h-10 w-80 mt-5 bg-green-800 text-white' onClick={()=>{
    
}}>
    CHANGE PASSWORD
</button>
      </div>
      <div  className='flex flex-col'>
      <button className='h-10 w-80 mt-5 bg-green-800 text-white' onClick={()=>{
    localStorage.clear();
    navigate("/")
    
  }}>
      LOGOUT
  </button>
 { userdata.role==="admin"? <button className='h-10 w-80 mt-5 bg-green-800 text-white' onClick={()=>{
    navigate("/dashboard")
    
  }}>
      DASHBOARD
  </button>:""}
  </div>
      </div>
      </div>
    </div>
  )
}
