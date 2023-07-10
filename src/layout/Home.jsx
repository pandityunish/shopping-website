import React,{useEffect,useState} from 'react'
import Slider from '../components/slider'
import TitleHead from '../components/TitleHead'
import { useSelector,useDispatch } from "react-redux";
import { getallproduct } from '../features/productSlice';
import ProductsSection from '../components/ProductsSection';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NavBar from '../components/NavBar';
import { calculateTotals } from '../features/cartSlice';
import { getallpopularProduct } from '../features/popularProductSlice';
import JustForYouSection from '../components/JustForYouSection';
import { getallSlider } from '../features/productapi';
import Footer from '../components/Footer';
export default function Home() {
  const {products,isLoading} =useSelector((store)=>store.products);
const dispatch=useDispatch();
useEffect(() => {
  
dispatch(getallproduct());
dispatch(getallpopularProduct())
dispatch(calculateTotals())

}, [])
const [slider, setslider] = useState([]);
useEffect(() => {
 getallSlider({setslider})
}, [])
if(isLoading){
  return (
  <div className='lg:mx-16 mx-4'>
     <Skeleton className=' h-20 ' />
      <Skeleton className=' h-48 ' />
      <Skeleton className=' mt-11 ' />

      <SkeletonTheme   inline={true} direction='ltr' >
     
      <Skeleton className='lg:mx-7 mx-1 h-40 mt-4' width="20%" count={4}/>
      </SkeletonTheme>
      </div>
  )
}
  return (
    <div>
      <NavBar/>
    {slider.length==0?<div></div>:<Slider slider={slider}/>}  
      <TitleHead title="Popular Products"/>
      <ProductsSection/>
      <TitleHead title="Just For You"/>
      <JustForYouSection/>
      <Footer/>
    </div>
  )
}
