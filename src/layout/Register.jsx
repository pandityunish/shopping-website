import React,{useState} from 'react'
import logo from '../assets/icon.png';
import { useNavigate } from 'react-router-dom';
import { registeruser } from '../features/authapis';
export default function Register() {
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");
    const [name, setname] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const [mobilenumber, setmobilenumber] = useState("")
const navigate=useNavigate();
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    }

    const register=()=>{
       registeruser({name,mobilenumber,email,password,navigate});
    }
  return (
    <div className='flex flex-col items-center mt-7'>
        <img src={logo} alt="" className='h-24 flex items-center justify-center text-center'/>
        <div className='border rounded-md p-6 mt-5'>
            <h1 className='font-bold text-2xl mb-4'>Register</h1>
            <input type="text" id='name' name='name' onChange={(e)=>setname(e.target.value)} className='w-80 h-10 border outline-none px-4  placeholder:items-center' placeholder='Enter you Full Name'/> <br />
            <input type="text" id='mobilenumber' name='mobilenumber' onChange={(e)=>setmobilenumber(e.target.value)} className='w-80 h-10 mt-3 border outline-none px-4  placeholder:items-center' placeholder='Mobile number(optional)'/> <br />
         <input type="text" id='email' name='email' onChange={(e)=>setemail(e.target.value)} className='w-80 h-10 border  mt-3 outline-none px-4 placeholder:items-center' placeholder='Enter you email'/>
         <div className='relative flex items-center w-80'>
          <p className='absolute z-10 right-3 top-5 cursor-pointer text-gray-400'
           onClick={togglePasswordVisibility}>{showPassword? "Hide":"Show"}</p>
        <input type={showPassword?"text": "password"} id="password" name="password"
         onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter your password' className='w-[100%] h-10 border p-4 mt-3 outline-none'/>
        </div>
        <button className='h-10 w-80 mt-5 bg-green-800 text-white' onClick={()=>{
            register();
        }}>
            Register
        </button>
        <p className='pt-3 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>{
            navigate("/login")
        }}>Login</span></p>
        </div>
       
    </div>
  )
}
