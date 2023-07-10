import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { calculateTotals, removeItem } from '../features/cartSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';
import empty from '../assets/empty.json'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { getallCategories } from '../features/productapi';
import { getCategoryProducts } from '../features/categoryapis';
import { getSearchProducts } from '../features/searchProducts';
import { getallproduct } from '../features/productSlice';
export default function NavBar() {
    const { itemnumber, cartItems,totalamount } = useSelector((store) => store.cart);
    const { products  } = useSelector((store) => store.products);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [isCartOpen, setisCartOpen] = useState(false);
    const [isdropOpen, setisdropOpen] = useState(false);
    const [isOpen, setisOpen] = useState(false);
    const [categories, setcategories] = useState([])
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: empty,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
useEffect(() => {
  dispatch(calculateTotals());

 
}, [cartItems]);

useEffect(() => {
getallCategories({setcategories});
}, [])
const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handlesubmit=()=>{
    console.log("ok")
  }
  useEffect(() => {
    const results = searchFunction(searchTerm);
    setSearchResults(results);
  }, [searchTerm]);
 
  
const searchFunction = (searchTerm) => {
    return products.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };
 
    return (
        <>
            <div className='flex justify-between lg:pt-5 lg:px-16 p-4 items-center sticky top-0 bg-white z-20'>
                <Link to="/">  <h1 className='font-bold md:text-3xl text-2xl text-green-800 font-serif cursor-pointer' >Shopcart</h1></Link>
                <div className='hidden gap-4 lg:flex'>
                    <div className='relative'>
                    <p className='font-medium cursor-pointer flex flex-row' onClick={()=>setisdropOpen(!isdropOpen)}>Categories {isdropOpen===false?(<ArrowDropDownIcon/>):(<ArrowDropUpIcon/>)}</p>
                   {isdropOpen &&( <div className='absolute bg-green-50 w-36 mt-1  rounded-md shadow-sm transition duration-500 ease-in-out'>
                       {categories.map((category)=>{
                        return (
                            <p className='px-3 py-1 cursor-pointer text-base ' onClick={()=>{
                                dispatch(getCategoryProducts(category.name));
                                navigate(`/category/:${category.name}`);
                                setisdropOpen(false)
                            }}>{category.name}  </p>
                        )
                       })}
                    </div>)}
                    </div>
                    

                    <p className='font-medium cursor-pointer'>Deals</p>
                    <p className='font-medium cursor-pointer'>What's New</p>
                   <Link to="/favorites"><p className='font-medium cursor-pointer'>Favorites</p></Link> 
                </div>
                <div className='relative hidden lg:flex w-60 items-center'>
                    <SearchOutlinedIcon className="absolute z-10 right-4 top-1 text-[#b1b1b1] text-xs" />
                    <div className='relative '>

                    <form onSubmit={()=>{
                   
                        // dispatch(getSearchProducts(searchTerm));
                        navigate(`/search/${searchTerm}`);
                   
                    }}>
                    <input type="text" placeholder='Search here' value={searchTerm} onSubmit={handlesubmit
                        
                    }  onChange={handleChange} className='overflow-hidden border-none bg-[#f5f7f9] rounded-2xl h-8 w-60 text-sm pl-4 pr-10 pb-1 text-justify placeholder:font-medium outline-none text-[#b1b1b1]' />
                    </form>
                    <div className={` ${searchTerm==""?"hidden":"absolute  bg-green-50 w-60 p-4 mt-1  rounded-md shadow-sm transition duration-500 ease-in-out"}`}>
                   {searchResults.length==0?<p className='overflow-hidden'>Search for "{searchTerm}"</p>: searchResults.map((result)=>{
                    return (
                        <p className='cursor-pointer hover:font-bold' onClick={()=>{
                            dispatch(getSearchProducts(result.name));
                            navigate(`/search/${result.name}`)

                        }}>{result.name}</p>
                    );
                   })}
                    </div>
                    </div>
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
                        className="text-black-300   block px-3 py-2 rounded-md text-base font-medium"
                    >
                       <p className='font-medium cursor-pointer flex flex-row text-black-300 ' onClick={()=>setisdropOpen(!isdropOpen)}>Categories {isdropOpen===false?(<ArrowDropDownIcon/>):(<ArrowDropUpIcon/>)}</p>
                       {isdropOpen &&( <div className='absolute bg-green-50 w-36 mt-1  rounded-md shadow-sm transition duration-500 ease-in-out'>
                       {categories.map((category)=>{
                        return (
                            <p className='px-3 py-1 cursor-pointer text-base ' onClick={()=>{
                                dispatch(getCategoryProducts(category.name));
                                navigate(`/category/:${category.name}`);
                                setisdropOpen(false)
                            }}>{category.name}  </p>
                        )
                       })}
                    </div>)}
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
                        Favorite
                    </a>
                </div>
            </div>
            <div className={`${isCartOpen == false ? 'hidden' : 'fixed top-0 right-0 z-20 overflow-y-auto'} h-[100vh] flex flex-col  lg:w-[30%] w-[100%] bg-white transition duration-1000 ease-in-out`}>
                <div className='flex m-5 items-center gap-[30%] transition duration-300 ease-out'>
                    <CloseIcon className=' cursor-pointer transition-all duration-300 ease-out' onClick={() => {
                        setisCartOpen(false);
                    }} />
                    <h1 className='text-2xl font-bold text-center'>Your Cart {itemnumber==0?'':`(${itemnumber})`}</h1>

                </div>
                <div className='p-4'>
                    {cartItems.length == 0 &&
                        <div className='flex flex-col items-center justify-center my-auto'>
                           <Lottie options={defaultOptions}
              height={250}
              width={250}
             />
             <h1 className='text-xl font-bold text-center mt-3'>Your cart is empty</h1>
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
                    <button className='outline-none text-white rounded-3xl sm:w-28 w-28 text-xs font-medium h-8 mt-2 bg-green-800 text-center hover:text-white'
                    onClick={()=>{
                        navigate("/buynow",{state:{
                            isCart:true
                        }})
                    }}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </>

    )
}
