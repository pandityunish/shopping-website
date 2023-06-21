import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { calculateTotals, removeItem } from '../features/cartSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function NavBar() {
    const { itemnumber, cartItems,totalamount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [isCartOpen, setisCartOpen] = useState(false)
    const [isOpen, setisOpen] = useState(false);
useEffect(() => {
  dispatch(calculateTotals());

 
}, [cartItems])

    return (
        <>
            <div className='flex justify-between lg:pt-5 lg:px-16 p-4 items-center'>
                <Link to="/">  <h1 className='font-bold md:text-3xl text-2xl text-green-800 font-serif cursor-pointer' >Shopcart</h1></Link>
                <div className='hidden gap-4 lg:flex'>
                    <p className='font-medium cursor-pointer'>Categories</p>
                    <p className='font-medium cursor-pointer'>Deals</p>
                    <p className='font-medium cursor-pointer'>What's New</p>
                    <p className='font-medium cursor-pointer'>Delivery</p>
                </div>
                <div className='relative hidden lg:flex w-60 items-center'>
                    <SearchOutlinedIcon className="absolute z-10 right-4 top-1 text-[#b1b1b1] text-xs" />
                    <input type="text" placeholder='Search here' className='border-none bg-[#f5f7f9] rounded-2xl h-8 w-60 text-sm pl-4 pb-1 text-justify placeholder:font-medium outline-none text-[#b1b1b1]' />
                </div>

                <div className='flex lg:gap-6 gap-4  items-center'>
                    <div className='block lg:hidden'>
                        <SearchOutlinedIcon />
                    </div>
                    <div className='flex gap-1 cursor-pointer' onClick={()=>{
                        const token=localStorage.getItem("token");
                        if(token==null){
                            navigate("/login")
                        }else{
                            navigate("/profile")
                        }
                        
                    }}>
                        <PersonOutlinedIcon />
                        <p className='font-medium cursor-pointer hidden lg:flex'>Account</p>
                    </div>
                    <div className='flex gap-1 cursor-pointer' onClick={() => {
                        setisCartOpen(true);
                    }}>
                        <Badge badgeContent={itemnumber} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>

                        <p className='font-medium cursor-pointer hidden lg:flex'>Cart</p>
                    </div>
                    {isOpen == false ? <div className='block lg:hidden' >
                        <MenuOutlinedIcon onClick={() => {
                            setisOpen(!isOpen);

                        }

                        } />
                    </div> : <div className='block lg:hidden' >
                        <CloseOutlinedIcon onClick={() => {
                            setisOpen(!isOpen);

                        }

                        } />
                    </div>}
                </div>

            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-gray-200 transition-transform duration-100 ease-in-out transform`}>
                <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center">
                    <a
                        href="#"
                        className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Categories
                    </a>
                    <a
                        href="#"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Deals
                    </a>
                    <a
                        href="#"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        What's New
                    </a>
                    <a
                        href="#"
                        className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Delivery
                    </a>
                </div>
            </div>
            <div className={`${isCartOpen == false ? 'hidden' : 'fixed top-0 right-0 z-20 overflow-y-auto'} h-[100vh] flex flex-col  lg:w-[30%] w-[100%] bg-white transition-width duration-400 ease-in-out`}>
                <div className='flex m-5 items-center gap-[30%] '>
                    <CloseIcon className=' cursor-pointer ' onClick={() => {
                        setisCartOpen(false);
                    }} />
                    <h1 className='text-2xl font-bold text-center'>Your Cart {itemnumber==0?'':`(${itemnumber})`}</h1>

                </div>
                <div className='p-4'>
                    {cartItems.length == 0 &&
                        <div className='flex flex-col items-center justify-center mt-60'>
                            <p>No Product</p>
                        </div>
                    }
                    {cartItems.map((item, i) => {

                        return <div className='border rounded-md p-2 mt-6 flex justify-between'>
                            <div className='flex gap-3'>
                                <div className={`bg-[#f6f6f6] shadow-sm rounded-lg w-16 cursor-pointer flex justify-center h-16  `} onClick={()=>{
                                    navigate(`/details/${item.name}`,
                                    {state:{
                                       name: item.name,
                                       description: item.description,
                                       images: item.images,
                                       rating: item.rating,
                                       price: item.price,
                                       
                                    }})
                                }}>
                                    <img src={item.images[0]} alt="" />
                                </div>
                                <div>
                                    <p className='font-bold text-base text-ellipsis cursor-pointer'>{item.name}</p>
                                    <p className='font-medium text-sm text-ellipsis cursor-pointer'>${item.price}</p>
                                </div>
                            </div>
                            <div>
                                <p className='font-medium text-sm text-ellipsis text-center mx-3 mt-3'>x{item.count}</p>
                                <u className='font-medium text-xs cursor-pointer pt-2' onClick={() => {
                                    dispatch(removeItem(item.name))
                                }}>Delete</u>
                            </div>
                        </div>
                    })}
                    <div className='h-[10vh]'>

                    </div>
                </div>

            </div>
            <div className={`${isCartOpen == false ? 'hidden' : 'fixed bottom-0 right-0 z-20 overflow-y-auto'} p-2 h-[12vh] rounded-tl-xl rounded-tr-xl flex flex-col  lg:w-[30%] w-[100%] bg-gray-100 shadow-lg transition-width duration-400 ease-in-out`}>
                <div className='flex justify-between'>
                    <p className='font-semibold text-base'>Total amount: <br /> ${totalamount}</p>
                    <button className='outline-none text-white rounded-3xl sm:w-28 w-28 text-xs font-medium h-8 mt-2 bg-green-800 text-center hover:text-white'>
                        Buy Now
                    </button>
                </div>
            </div>
        </>

    )
}
