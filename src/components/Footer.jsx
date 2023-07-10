import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div className='bg-[#1c3b35] p-6 pt-10 mt-4'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex md:w-[50%] w-[100%] md:flex-row flex-col md:justify-between justify-center '>
           <div className='flex flex-col md:items-start items-center space-y-2 md:ml-16 '>
            <h1 className="text-white font-medium text-2xl">HELP</h1>
            <p className="text text-white cursor-pointer">Contact Us</p>
            <p className="text text-white cursor-pointer">FAQ</p>
            <p className="text text-white cursor-pointer">Customer Service</p>
            <p className="text text-white cursor-pointer">How to Buy</p>
            <p className="text text-white cursor-pointer">Returns and Refunds</p>
           </div>
           <div className='flex flex-col md:items-start items-center space-y-2 md:mt-0 mt-6 justify-start'>
            <h1 className="text-white font-medium text-2xl">ABOUT</h1>
            <p className="text text-white cursor-pointer">Our Story</p>
            <p className="text text-white cursor-pointer">Terms and condition</p>
            <p className="text text-white cursor-pointer">Privacy Policy</p>
            <p className="text text-white cursor-pointer">Blog</p>
           </div>
          </div>
          <div>

          </div>
          <div className='flex flex-col mx-auto md:mx-0 md:justify-end justify-center md:mt-0 mt-10'>
            <p className='text-white font-medium text-base md:text-end text-center '>Sign up to get 10% off your first order</p>
            <div>
           <div className='flex gap-3 mt-3 flex-wrap md:justify-end justify-center'>
           <input type="text" placeholder='Your Email Address'  className='overflow-hidden border-none bg-[#f5f7f9] rounded-3xl h-12 w-60 text-sm pl-4 pr-10 pb-1 text-justify placeholder:font-medium outline-none text-black' />
            <button className='h-12 w-28 bg-yellow-300 rounded-3xl font-bold text-green-900'>
             Subscribe
            </button>
           </div>
           <div className='flex gap-4 mt-7 md:justify-end justify-center items-center '>
<FacebookIcon color='white'className='text-white cursor-pointer'/>
<InstagramIcon className='text-white cursor-pointer'/>
<TwitterIcon className='text-white cursor-pointer'/>
<YouTubeIcon className='text-white cursor-pointer'/>

           </div>
            </div>
          </div>
        </div>
    </div>
  )
}
