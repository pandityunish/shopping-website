import React,{useEffect} from 'react'
import NavBar from '../components/NavBar'
import { useSelector,useDispatch } from 'react-redux'
import Product from '../components/product';
import { Link, useParams } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getSearchProducts } from '../features/searchProducts';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Lottie from 'react-lottie';
import empty from '../assets/noresults.json'
export default function SearchPage() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: empty,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    const params=useParams();
    const {products}=useSelector((store)=>store.searchProduct)
  
  const dispatch= useDispatch();
  useEffect(() => {
  dispatch(getSearchProducts(params.name))
  }, [])
  
    
  return (
    <>
<NavBar/>
{products.length==0?<div className='flex flex-col justify-center mx-auto my-20' >
          <Lottie options={defaultOptions}
              height={250}
              width={250}
             />
             <h1 className='mx-auto font-bold mt-8'>No Result Found</h1>
             </div>:<div className='lg:mx-16 mx-2 mt-5'>
              <div className='flex flex-row  items-center '>
 <Link to="/"><p className='text-blue-500 hover:cursor-pointer'>Home</p></Link> 
  <ChevronRightIcon/>
  <span>Search Result</span>
</div>
<hr className='my-5'/>
<div className='lg:mx-8 flex flex-wrap items-center justify-between'>
  <p>{products.length} items found for "{params.name}"</p>
  <div className='flex items-center gap-3 mt-3 md:mt-0'>
<p>Sort By:</p>
<div className='h-9 cursor-pointer w-36 border border-black flex items-center justify-between px-1'>
<p>Best Matches</p>
<ArrowDropDownIcon/>
</div>
  </div>
</div>
              
              </div>}





<div className='lg:mx-16 mx-0 flex flex-wrap justify-center md:justify-start'>
  {products.map((product,i)=>{
    return <Product  description={product.description} images={product.images} name={product.name} price={product.price} rating={product.rating} key={i} product={product}/>
  })}
  </div>
    </>
  )
}
